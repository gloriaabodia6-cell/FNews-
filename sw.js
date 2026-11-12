// F NEWS - Makes app work offline + installable
const CACHE = "fnews-v1";
const FILES = ["index.html", "live.html", "news.html", "manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request)).catch(() => caches.match("index.html"))
  );
});