import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import lyricsHandler from './api/lyrics.js';

function mockRes(nodeRes) {
  return {
    statusCode: 200,
    headers: {},
    setHeader(k, v) {
      this.headers[k] = v;
      nodeRes.setHeader(k, v);
    },
    status(code) {
      this.statusCode = code;
      nodeRes.statusCode = code;
      return this;
    },
    json(body) {
      nodeRes.setHeader('Content-Type', 'application/json');
      nodeRes.end(JSON.stringify(body));
    },
    end(body) {
      if (body != null) nodeRes.end(body);
      else nodeRes.end();
    },
  };
}

/** Dev middleware mirrors Vercel /api/* */
function apiPlugin() {
  return {
    name: 'jagah-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url?.startsWith('/api/lyrics')) {
          try {
            const u = new URL(req.url, 'http://localhost');
            await lyricsHandler(
              { method: req.method, query: Object.fromEntries(u.searchParams) },
              mockRes(res),
            );
          } catch {
            res.statusCode = 502;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'lyrics failed' }));
          }
          return;
        }

        if (!req.url?.startsWith('/api/discover')) return next();
        try {
          const u = new URL(req.url, 'http://localhost');
          const q = (u.searchParams.get('q') || '').trim().slice(0, 120);
          if (!q) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'missing q' }));
            return;
          }
          const yt = await fetch(
            'https://www.youtube.com/results?search_query=' + encodeURIComponent(q),
            {
              headers: {
                'User-Agent':
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'en-IN,en;q=0.9,hi;q=0.8',
              },
            },
          );
          const html = await yt.text();
          const items = [];
          const seen = new Set();
          const re =
            /"videoId":"([A-Za-z0-9_-]{11})".{0,800}?"title":\{"runs":\[\{"text":"(.*?)"\}/g;
          let m;
          while ((m = re.exec(html))) {
            const id = m[1];
            if (seen.has(id)) continue;
            seen.add(id);
            let title = m[2];
            try {
              title = JSON.parse(`"${title}"`);
            } catch {
              title = title.replace(/\\u0026/g, '&');
            }
            if (!title || /#shorts/i.test(title)) continue;
            items.push({ id, title });
            if (items.length >= 20) break;
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ items }));
        } catch {
          res.statusCode = 502;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'youtube search failed' }));
        }
      });
    },
  };
}

export default defineConfig({
  server: { port: 5173, open: false },
  plugins: [apiPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        place: resolve(__dirname, 'place.html'),
      },
    },
  },
});
