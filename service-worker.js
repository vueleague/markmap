const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), u = [
  a + "/_app/immutable/entry/app.71cc33c9.js",
  a + "/_app/immutable/assets/0.254b6b5d.css",
  a + "/_app/immutable/nodes/0.5f5ac94a.js",
  a + "/_app/immutable/assets/1.b20769a5.css",
  a + "/_app/immutable/nodes/1.d1cb666a.js",
  a + "/_app/immutable/nodes/2.308994a7.js",
  a + "/_app/immutable/nodes/3.b9e23e65.js",
  a + "/_app/immutable/assets/4.a8067485.css",
  a + "/_app/immutable/nodes/4.00dc0ddc.js",
  a + "/_app/immutable/nodes/5.9f78c8d2.js",
  a + "/_app/immutable/nodes/6.70b9c218.js",
  a + "/_app/immutable/nodes/7.fc21a249.js",
  a + "/_app/immutable/nodes/8.e02b7b96.js",
  a + "/_app/immutable/chunks/common.84ee5c52.js",
  a + "/_app/immutable/chunks/debounce.06000378.js",
  a + "/_app/immutable/chunks/footer.4bf0f568.js",
  a + "/_app/immutable/chunks/ga.d84d4cc0.js",
  a + "/_app/immutable/chunks/index.6063bb9a.js",
  a + "/_app/immutable/chunks/index.6267134c.js",
  a + "/_app/immutable/chunks/index.738c4dae.js",
  a + "/_app/immutable/chunks/loader.71521e64.js",
  a + "/_app/immutable/chunks/markmap.f44705b9.js",
  a + "/_app/immutable/chunks/navigation.951af4f9.js",
  a + "/_app/immutable/chunks/preload-helper.cf010ec4.js",
  a + "/_app/immutable/chunks/scheduler.4813dac0.js",
  a + "/_app/immutable/chunks/singletons.f919b582.js",
  a + "/_app/immutable/chunks/stores.148d9323.js",
  a + "/_app/immutable/chunks/toast.ba9d61ec.js",
  a + "/_app/immutable/chunks/toolbar.c96a3a99.js",
  a + "/_app/immutable/assets/toolbar.607b20a4.css",
  a + "/_app/immutable/entry/start.0e9ababe.js",
  a + "/_app/immutable/chunks/buttons.esm.48f94bc9.js",
  a + "/_app/immutable/chunks/index.ddfb74cb.js",
  a + "/_app/immutable/chunks/faq.853276a1.js",
  a + "/_app/immutable/chunks/json-options.4f7ddb4e.js",
  a + "/_app/immutable/chunks/markmap.ef13e9c4.js",
  a + "/_app/immutable/chunks/packages--coc-markmap.10bd7856.js",
  a + "/_app/immutable/chunks/packages--markmap-cli.b2e4fcc9.js",
  a + "/_app/immutable/chunks/packages--markmap-lib.6b1a1d45.js",
  a + "/_app/immutable/chunks/packages--markmap-toolbar.31bde5d9.js",
  a + "/_app/immutable/chunks/packages--markmap-view.692c7aee.js",
  a + "/_app/immutable/assets/codemirror.8a3c1e84.css",
  a + "/_app/immutable/chunks/codemirror.0e7480c7.js"
], l = [
  a + "/.nojekyll",
  a + "/.well-known/brave-rewards-verification.txt",
  a + "/favicon.png",
  a + "/logo-192.png",
  a + "/logo-512.png",
  a + "/manifest.json"
], n = "1690379099022", m = `cache${n}`, i = u.concat(l), o = new Set(i);
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(m).then((s) => s.addAll(i)).then(() => {
      self.skipWaiting();
    })
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== m && await caches.delete(t);
      self.clients.claim();
    })
  );
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url);
  if (s.protocol.startsWith("http") && !(s.hostname === self.location.hostname && s.port !== self.location.port)) {
    if (s.host === self.location.host && o.has(s.pathname)) {
      e.respondWith(caches.match(e.request, { ignoreSearch: !0 }));
      return;
    }
    e.request.cache !== "only-if-cached" && [self.location.host, "cdn.jsdelivr.net"].includes(s.host) && e.respondWith(
      caches.open(`offline${n}`).then(async (t) => {
        try {
          const c = await fetch(e.request);
          return t.put(e.request, c.clone()), c;
        } catch (c) {
          const p = await t.match(e.request);
          if (p)
            return p;
          throw c;
        }
      })
    );
  }
});
