const {
  AndroidConfig,
  withAndroidManifest,
  withDangerousMod,
  withMainActivity,
  withPlugins,
} = require('expo/config-plugins');
const fs = require('fs');
const path = require('path');

// ponytail: platform MediaSession only — no androidx.media dep
const SERVICE_KT = `package xyz.jagah.music

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.content.pm.ServiceInfo
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.media.session.MediaSession
import android.media.session.PlaybackState
import android.os.Build
import android.os.IBinder
import androidx.core.app.NotificationCompat

/** Sticky media FGS so WebView audio keeps process priority while backgrounded. */
class MediaKeepAliveService : Service() {
  private var session: MediaSession? = null
  private var focusRequest: AudioFocusRequest? = null

  override fun onBind(intent: Intent?): IBinder? = null

  override fun onCreate() {
    super.onCreate()
    ensureChannel()
    session = MediaSession(this, "jagah").also { s ->
      s.isActive = true
      s.setPlaybackState(
        PlaybackState.Builder()
          .setActions(PlaybackState.ACTION_PLAY or PlaybackState.ACTION_PAUSE)
          .setState(PlaybackState.STATE_PLAYING, 0L, 1f)
          .build()
      )
    }
    requestFocus()
    val notif = buildNotification()
    if (Build.VERSION.SDK_INT >= 29) {
      startForeground(NOTIF_ID, notif, ServiceInfo.FOREGROUND_SERVICE_TYPE_MEDIA_PLAYBACK)
    } else {
      startForeground(NOTIF_ID, notif)
    }
  }

  override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int = START_STICKY

  override fun onDestroy() {
    abandonFocus()
    session?.isActive = false
    session?.release()
    session = null
    super.onDestroy()
  }

  private fun requestFocus() {
    val am = getSystemService(AUDIO_SERVICE) as AudioManager
    if (Build.VERSION.SDK_INT >= 26) {
      val req = AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN)
        .setAudioAttributes(
          AudioAttributes.Builder()
            .setUsage(AudioAttributes.USAGE_MEDIA)
            .setContentType(AudioAttributes.CONTENT_TYPE_MUSIC)
            .build()
        )
        .setOnAudioFocusChangeListener { }
        .build()
      focusRequest = req
      am.requestAudioFocus(req)
    } else {
      @Suppress("DEPRECATION")
      am.requestAudioFocus(null, AudioManager.STREAM_MUSIC, AudioManager.AUDIOFOCUS_GAIN)
    }
  }

  private fun abandonFocus() {
    val am = getSystemService(AUDIO_SERVICE) as AudioManager
    if (Build.VERSION.SDK_INT >= 26) {
      focusRequest?.let { am.abandonAudioFocusRequest(it) }
    } else {
      @Suppress("DEPRECATION")
      am.abandonAudioFocus(null)
    }
  }

  private fun ensureChannel() {
    if (Build.VERSION.SDK_INT < 26) return
    val nm = getSystemService(NOTIFICATION_SERVICE) as NotificationManager
    val ch = NotificationChannel(CHANNEL_ID, "Playback", NotificationManager.IMPORTANCE_LOW)
    ch.setSound(null, null)
    nm.createNotificationChannel(ch)
  }

  private fun buildNotification(): Notification {
    val launch = packageManager.getLaunchIntentForPackage(packageName)
    val pi = PendingIntent.getActivity(
      this, 0, launch,
      PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
    )
    return NotificationCompat.Builder(this, CHANNEL_ID)
      .setContentTitle("JAGAH")
      .setContentText("Playing")
      .setSmallIcon(R.mipmap.ic_launcher)
      .setContentIntent(pi)
      .setOngoing(true)
      .setSilent(true)
      .setCategory(NotificationCompat.CATEGORY_TRANSPORT)
      .setVisibility(NotificationCompat.VISIBILITY_PUBLIC)
      .build()
  }

  companion object {
    private const val CHANNEL_ID = "jagah_playback"
    private const val NOTIF_ID = 42
  }
}
`;

function withManifestAndActivity(config) {
  config = withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults;
    const app = AndroidConfig.Manifest.getMainApplicationOrThrow(manifest);

    const perms = [
      'android.permission.FOREGROUND_SERVICE',
      'android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK',
      'android.permission.POST_NOTIFICATIONS',
      'android.permission.WAKE_LOCK',
    ];
    if (!manifest.manifest['uses-permission']) {
      manifest.manifest['uses-permission'] = [];
    }
    for (const name of perms) {
      const list = manifest.manifest['uses-permission'];
      if (!list.some((p) => p.$?.['android:name'] === name)) {
        list.push({ $: { 'android:name': name } });
      }
    }

    if (!app.service) app.service = [];
    const svcName = '.MediaKeepAliveService';
    if (!app.service.some((s) => s.$?.['android:name'] === svcName)) {
      app.service.push({
        $: {
          'android:name': svcName,
          'android:exported': 'false',
          'android:foregroundServiceType': 'mediaPlayback',
        },
      });
    }
    return cfg;
  });

  config = withMainActivity(config, (cfg) => {
    let src = cfg.modResults.contents;
    if (!src.includes('MediaKeepAliveService')) {
      if (!src.includes('import android.content.Intent')) {
        src = src.replace(
          'import android.os.Bundle',
          'import android.content.Intent\nimport android.os.Bundle',
        );
      }
      src = src.replace(
        'super.onCreate(null)',
        `super.onCreate(null)
    try {
      val i = Intent(this, MediaKeepAliveService::class.java)
      if (android.os.Build.VERSION.SDK_INT >= 26) startForegroundService(i) else startService(i)
    } catch (_: Exception) {}`,
      );
      cfg.modResults.contents = src;
    }
    return cfg;
  });

  return config;
}

function withMediaServiceFile(config) {
  return withDangerousMod(config, [
    'android',
    async (cfg) => {
      const dir = path.join(
        cfg.modRequest.platformProjectRoot,
        'app/src/main/java/xyz/jagah/music',
      );
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'MediaKeepAliveService.kt'), SERVICE_KT);
      return cfg;
    },
  ]);
}

module.exports = (config) =>
  withPlugins(config, [withManifestAndActivity, withMediaServiceFile]);
