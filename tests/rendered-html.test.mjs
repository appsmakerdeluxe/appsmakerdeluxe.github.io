import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the finished German portfolio with real app links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="de">/i);
  assert.match(html, /<title>AppsMakerDeluxe Studios \| Android-Produkte<\/title>/i);
  assert.match(html, /Apps, die sich/);
  for (const appId of [
    "de.appsmakerdeluxe.daymigo",
    "de.appsmakerdeluxe.riftivo",
    "de.appsmakerdeluxe.riftivo3d",
    "com.appsmakerdeluxe.mylovecalculator",
    "de.appsmakerdeluxe.buymorrow",
    "de.appsmakerdeluxe.everago",
    "com.appsmakerdeluxe.callblockerplus",
    "com.draven.indexgenie",
    "de.appsmakerdeluxe.luxcue",
    "de.appsmakerdeluxe.storivio",
    "de.appsmakerdeluxe.chiliwise",
    "de.appsmakerdeluxe.Kavorenza",
  ]) assert.match(html, new RegExp(appId.replaceAll(".", "\\.")));
  assert.match(html, /My Love Calculator/);
  assert.doesNotMatch(html, /Recallune/);
  assert.match(html, /ChiliWise/);
  assert.match(html, /Kavorenza/);
  assert.match(html, /Zwölf/);
  assert.match(html, /appsmakerdeluxe@gmail\.com/);
  assert.match(html, /id="kontakt"/);
  assert.doesNotMatch(html, /In Vorbereitung/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton|formsubmit|Projekt anfragen|App anfragen/i);
});

test("keeps final assets and accessibility safeguards in place", async () => {
  const [page, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);
  assert.match(page, /className="skip-link"/);
  assert.match(page, /prefers-reduced-motion|reduced-motion/i.test(css) ? /skip-link/ : /$^/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await access(new URL("../public/og.png", import.meta.url));
  await access(new URL("../public/logo.webp", import.meta.url));
  await access(new URL("../public/logo-mark.webp", import.meta.url));
  await access(new URL("../public/favicon.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
