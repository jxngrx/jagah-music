import { defineConfig, loadEnv } from 'vite';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

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

/** Dev middleware: /api/<name> → ./api/<name>.js, same handlers Vercel runs. */
function apiPlugin() {
  return {
    name: 'jagah-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const u = new URL(req.url || '/', 'http://localhost');
        const m = u.pathname.match(/^\/api\/([a-z]+)$/);
        if (!m || !existsSync(resolve(__dirname, 'api', `${m[1]}.js`))) return next();
        try {
          const { default: handler } = await import(pathToFileURL(resolve(__dirname, 'api', `${m[1]}.js`)).href + `?t=${Date.now()}`);
          const query = {};
          for (const k of new Set(u.searchParams.keys())) {
            const all = u.searchParams.getAll(k);
            query[k] = all.length > 1 ? all : all[0];
          }
          await handler({ method: req.method, query }, mockRes(res));
        } catch {
          res.statusCode = 502;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'api failed' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), '')); // .env.local → api handlers
  return {
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
};
});
