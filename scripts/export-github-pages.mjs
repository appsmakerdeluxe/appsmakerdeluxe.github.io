import { cp, mkdir, writeFile } from "node:fs/promises";

const clientRoot = new URL("../dist/client/", import.meta.url);
const pagesRoot = new URL("../docs/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);

const { default: worker } = await import(`${workerUrl.href}?static=${Date.now()}`);
const response = await worker.fetch(
  new Request("https://appsmakerdeluxe.github.io/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) throw new Error(`Static export failed with HTTP ${response.status}`);

await mkdir(pagesRoot, { recursive: true });
await cp(clientRoot, pagesRoot, { recursive: true, force: true });
await writeFile(new URL("index.html", pagesRoot), await response.text(), "utf8");
await writeFile(
  new URL(".nojekyll", pagesRoot),
  "",
  "utf8",
);

console.log("GitHub Pages export created in docs/.");
