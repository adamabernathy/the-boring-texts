const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const SRC = path.join(__dirname, "src");
const DIST = path.join(__dirname, "dist");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "js") continue; // JS is handled by esbuild
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function build() {
  const isProduction = process.argv.includes("--production");

  // Clean dist
  fs.rmSync(DIST, { recursive: true, force: true });

  // Copy static assets (HTML, CSS, etc.) — skips src/js/
  copyDir(SRC, DIST);

  // Rewrite HTML script tags: replace ES module imports with single bundle
  for (const file of fs.readdirSync(DIST)) {
    if (!file.endsWith(".html")) continue;
    const htmlPath = path.join(DIST, file);
    let html = fs.readFileSync(htmlPath, "utf-8");
    html = html.replace(
      '<script type="module" src="./js/app.js"></script>',
      '<script src="./app.bundle.js" defer></script>'
    );
    fs.writeFileSync(htmlPath, html);
  }

  // Bundle JS into a single file
  await esbuild.build({
    entryPoints: [path.join(SRC, "js", "app.js")],
    bundle: true,
    format: "iife",
    outfile: path.join(DIST, "app.bundle.js"),
    minify: isProduction,
    sourcemap: !isProduction,
    target: ["es2020"],
    external: [],
  });

  const bundleSize = fs.statSync(path.join(DIST, "app.bundle.js")).size;
  const label = isProduction ? "production" : "development";
  console.log(`Built (${label}): dist/app.bundle.js — ${(bundleSize / 1024).toFixed(1)} KB`);
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
