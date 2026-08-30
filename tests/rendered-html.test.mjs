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
    "de.appsmakerdeluxe.lemivo",
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
    "com.appsmakerdeluxe.paginotetrial",
    "de.appsmakerdeluxe.stimmivo",
    "de.appsmakerdeluxe.dialvori",
    "de.appsmakerdeluxe.dialvexa",
  ]) assert.match(html, new RegExp(appId.replaceAll(".", "\\.")));
  assert.match(html, /Lemivo/);
  assert.match(html, /PagiNote Trial/);
  assert.match(html, /Stimmivo/);
  assert.match(html, /Dialvori/);
  assert.match(html, /Dialvexa/);
  assert.match(html, /Wear OS/);
  assert.match(html, /My Love Calculator/);
  assert.doesNotMatch(html, /Recallune/);
  assert.match(html, /ChiliWise/);
  assert.match(html, /Kavorenza/);
  assert.match(html, /wachsende Sammlung/);
  assert.match(html, /appsmakerdeluxe@gmail\.com/);
  assert.match(html, /id="kontakt"/);
  assert.match(html, /lang-selector-btn/);
  assert.doesNotMatch(html, /In Vorbereitung/);
  assert.match(html, /og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton|formsubmit|Projekt anfragen|App anfragen/i);
});

test("contains all 12 supported languages in translation dictionary", async () => {
  const { SUPPORTED_LANGUAGES, translations } = await import("../app/i18n/translations.ts");
  assert.equal(SUPPORTED_LANGUAGES.length, 12);
  for (const lang of SUPPORTED_LANGUAGES) {
    const dict = translations[lang.code];
    assert.ok(dict, `Translation dictionary for ${lang.code} exists`);
    assert.ok(dict.nav.apps, `nav.apps exists for ${lang.code}`);
    assert.ok(dict.hero.titleLine1, `hero.titleLine1 exists for ${lang.code}`);
    assert.ok(dict.work.filterAll, `work.filterAll exists for ${lang.code}`);
    assert.ok(dict.work.filterWear, `work.filterWear exists for ${lang.code}`);
    assert.ok(dict.apps.daymigo.name, `daymigo exists for ${lang.code}`);
    assert.ok(dict.apps.lemivo.name, `lemivo exists for ${lang.code}`);
    assert.ok(dict.apps.dialvori.name, `dialvori exists for ${lang.code}`);
    assert.ok(dict.apps.dialvexa.name, `dialvexa exists for ${lang.code}`);
    assert.ok(dict.apps.mylovecalculator.name, `mylovecalculator exists for ${lang.code}`);
    assert.ok(dict.apps.paginotetrial.name, `paginotetrial exists for ${lang.code}`);
    assert.ok(dict.apps.stimmivo.name, `stimmivo exists for ${lang.code}`);
    assert.ok(dict.statement.quotePrefix, `statement exists for ${lang.code}`);
    assert.ok(dict.contact.form.submitButton, `contact.form.submitButton exists for ${lang.code}`);
  }
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
  await access(new URL("../public/studio-badge.webp", import.meta.url));
  await access(new URL("../public/apps/lemivo.webp", import.meta.url));
  await access(new URL("../public/apps/paginotetrial.webp", import.meta.url));
  await access(new URL("../public/apps/stimmivo.webp", import.meta.url));
  await access(new URL("../public/apps/dialvori.webp", import.meta.url));
  await access(new URL("../public/apps/dialvexa.webp", import.meta.url));
  await access(new URL("../public/apps/dialvexa-store.webp", import.meta.url));
  await access(new URL("../public/logo-mark.webp", import.meta.url));
  await access(new URL("../public/favicon.png", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
