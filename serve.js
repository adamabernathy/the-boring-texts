const http = require("http");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PORT = process.env.PORT || 3000;
const DIST = path.join(__dirname, "dist");
const SRC = path.join(__dirname, "src");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".map": "application/json; charset=utf-8",
};

function build() {
  try {
    execSync("node build.js", { stdio: "inherit", cwd: __dirname });
  } catch {
    console.error("Build failed");
  }
}

// Initial build
build();

// Watch src/ for changes and rebuild
let debounce = null;
fs.watch(SRC, { recursive: true }, () => {
  clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log("\nFile changed — rebuilding...");
    build();
  }, 200);
});

// Serve dist/
const server = http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (url.endsWith("/")) url += "index.html";

  const filePath = path.join(DIST, url);

  // Prevent path traversal
  if (!filePath.startsWith(DIST)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath);
    const contentType = MIME[ext] || "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Dev server running at http://localhost:${PORT}`);
  console.log("Watching src/ for changes...\n");
});
