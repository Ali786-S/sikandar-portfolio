import test from "node:test";
import assert from "node:assert/strict";
const base = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";
const pages = [
  "/",
  "/projects",
  "/about",
  "/experience",
  "/why-work-with-me",
  "/contact",
  "/privacy",
  ...[
    "flosendo",
    "jobstrikes",
    "migration-discourse",
    "openstack-data-lake",
    "restart-housing",
    "bookstore-api",
    "student-progression",
    "sustainable-web",
  ].map((x) => "/projects/" + x),
];
for (const path of pages)
  test(`Production HTML: ${path}`, async () => {
    const r = await fetch(base + path);
    assert.equal(r.status, 200);
    const html = await r.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.match(html, /<html[^>]*lang="en-GB"/);
    assert.match(html, /<meta name="description"/);
    assert.match(html, /<link rel="canonical"/);
    assert.match(html, /<main id="main"/);
    assert.ok(!html.includes('href="#"'), "No placeholder links");
    assert.ok(!html.includes("TODO"), "No unfinished markers");
    assert.equal(r.headers.get("x-content-type-options"), "nosniff");
  });
test("All internal links and page fragment targets resolve", async () => {
  const cache = new Map();
  for (const path of pages) {
    const html = await (await fetch(base + path)).text();
    cache.set(path, html);
  }
  const checked = new Set();
  for (const [path, html] of cache) {
    for (const match of html.matchAll(/href="([^" ]+)"/g)) {
      const href = match[1].replaceAll("&amp;", "&");
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, base + path);
      if (url.origin !== new URL(base).origin) continue;
      if (url.hash) {
        const target =
          cache.get(url.pathname) || (await (await fetch(url)).text());
        assert.ok(
          target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `Missing fragment ${url.href}`,
        );
      }
      if (!checked.has(url.pathname)) {
        const r = await fetch(url.origin + url.pathname);
        assert.ok(r.ok, `Broken link: ${url.href}`);
        checked.add(url.pathname);
      }
    }
  }
});
test("Unknown project and route return real 404 responses", async () => {
  for (const p of ["/projects/not-a-project", "/missing-page"])
    assert.equal((await fetch(base + p)).status, 404);
});
test("CV download is the real Word document", async () => {
  const r = await fetch(base + "/Sikandar-Ali-CV.docx");
  assert.equal(r.status, 200);
  const bytes = new Uint8Array(await r.arrayBuffer());
  assert.equal(bytes[0], 0x50);
  assert.equal(bytes[1], 0x4b);
  assert.ok(bytes.length > 10000);
});
test("SEO endpoints and generated sharing image work", async () => {
  for (const p of [
    "/sitemap.xml",
    "/robots.txt",
    "/opengraph-image",
    "/icon.svg",
  ])
    assert.equal((await fetch(base + p)).status, 200);
  const xml = await (await fetch(base + "/sitemap.xml")).text();
  assert.equal((xml.match(/<loc>/g) || []).length, pages.length);
  assert.ok(
    (await (await fetch(base + "/robots.txt")).text()).includes("Sitemap:"),
  );
});
test("Public screenshot and portrait assets are available", async () => {
  for (const p of [
    "sikandar-ali",
    "flosendo-source",
    "jobstrikes-live",
    "migration-live",
  ]) {
    const r = await fetch(base + `/images/${p}.webp`);
    assert.equal(r.status, 200);
    assert.match(r.headers.get("content-type"), /image\/webp/);
  }
});
