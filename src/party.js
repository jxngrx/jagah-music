/**
 * Music party over WebRTC (PeerJS). The host's browser IS the server: it owns the room code,
 * the queue and the playhead. Guests connect straight to it. Host leaves → room ends.
 * PeerJS's free public broker only introduces the peers; no state of ours lives anywhere else.
 */
import Peer from 'peerjs';

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no 0/O/1/I
const PREFIX = 'jagah-party-';
const MAX_ADDS = 5; // per guest
const rand = () => Array.from({ length: 4 }, () => ALPHABET[Math.floor(Math.random() * ALPHABET.length)]).join('');

/** Guests are untrusted: keep only what a track needs. */
function cleanTrack(t) {
  if (!t || !/^[\w-]{11}$/.test(t.id)) return null;
  return { id: t.id, title: String(t.title || '').slice(0, 120), artist: String(t.artist || '').slice(0, 120) };
}

/**
 * Open a room. snapshot() → state message; onAdd(track) / onSkip() = guest requests; onGuests(n).
 * Resolves { code, broadcast(), stop() }.
 */
export function startHost({ snapshot, onAdd, onSkip, onGuests }) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const open = () => {
      const code = rand();
      const peer = new Peer(PREFIX + code);
      const guests = new Map(); // peer id → { c, adds }

      peer.on('error', (e) => {
        if (e.type === 'unavailable-id' && ++tries < 5) {
          peer.destroy();
          open();
        } else reject(e);
      });

      peer.on('open', () => {
        const send = (m) => guests.forEach(({ c }) => c.open && c.send(m));
        const room = {
          code,
          broadcast: () => send(snapshot()),
          stop: () => {
            send({ t: 'end' });
            setTimeout(() => peer.destroy(), 300);
          },
        };
        const beat = setInterval(room.broadcast, 4000); // heartbeat + drift correction
        peer.on('close', () => clearInterval(beat));

        peer.on('connection', (c) => {
          c.on('open', () => {
            guests.set(c.peer, { c, adds: 0 });
            c.send(snapshot());
            onGuests(guests.size);
          });
          c.on('close', () => {
            guests.delete(c.peer);
            onGuests(guests.size);
          });
          c.on('data', (m) => {
            const g = guests.get(c.peer);
            if (!g || !m) return;
            if (m.t === 'ping') c.send({ t: 'pong', s: m.s });
            else if (m.t === 'skip') onSkip();
            else if (m.t === 'add' && g.adds < MAX_ADDS) {
              const track = cleanTrack(m.track);
              if (track) {
                g.adds++;
                onAdd(track);
              }
            }
          });
        });
        resolve(room);
      });
    };
    open();
  });
}

/**
 * Join a room. onState(msg, latencySec) on every host update; onEnd(reason) once.
 * Rejects if the room doesn't exist. Resolves { send(msg), leave() }.
 */
export function joinParty(code, { onState, onEnd }) {
  return new Promise((resolve, reject) => {
    const peer = new Peer();
    let conn = null;
    let opened = false;
    let done = false;
    let last = Date.now();
    let latency = 0;
    let timers = [];

    const finish = (reason) => {
      if (done) return;
      done = true;
      timers.forEach(clearInterval);
      peer.destroy();
      if (opened) onEnd(reason);
      else reject(new Error(reason));
    };

    timers.push(setTimeout(() => !opened && finish('not-found'), 12000));
    peer.on('error', () => finish(opened ? 'lost' : 'not-found'));
    peer.on('open', () => {
      conn = peer.connect(PREFIX + code, { reliable: true });
      conn.on('close', () => finish('ended'));
      conn.on('error', () => finish('lost'));
      conn.on('open', () => {
        opened = true;
        resolve({
          send: (m) => conn.open && conn.send(m),
          leave: () => finish('left'),
          latency: () => latency, // one-way, seconds
        });
        const ping = () => conn.open && conn.send({ t: 'ping', s: performance.now() });
        ping();
        timers.push(setInterval(ping, 5000));
        // host heartbeat every 4s; silence for 15s = gone (covers a host that vanished without closing)
        timers.push(setInterval(() => Date.now() - last > 15000 && finish('lost'), 5000));
      });
      conn.on('data', (m) => {
        if (!m) return;
        last = Date.now();
        if (m.t === 'pong') latency = (performance.now() - m.s) / 2000;
        else if (m.t === 'end') finish('ended');
        else if (m.t === 'state') onState(m, latency);
      });
    });
  });
}
