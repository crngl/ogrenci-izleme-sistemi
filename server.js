import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 5187);
const publicFiles = new Set(["index.html", "app.js", "security.js", "pdf-loader.js", "styles.css", "cloud-config.js"]);
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".wasm": "application/wasm", ".gz": "application/gzip" };

const server = createServer(async (req, res) => {
  try {
    if (!["GET", "HEAD"].includes(req.method)) {
      res.writeHead(405).end();
      return;
    }
    const url = new URL(req.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    const file = resolve(root, pathname === "/" ? "index.html" : pathname.replace(/^\/+/, ""));
    const name = relative(root, file);
    if (name.startsWith("..") || (!publicFiles.has(name) && !name.startsWith(`vendor${sep}`))) {
      res.writeHead(404).end("Not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "same-origin",
      "Cache-Control": "no-store",
      "Content-Security-Policy": "script-src-attr 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'",
      "X-Frame-Options": "DENY",
      "Permissions-Policy": "camera=(self), microphone=(), geolocation=()",
    });
    res.end(req.method === "HEAD" ? undefined : body);
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Ogrenci Izleme: http://localhost:${server.address().port}`);
});
