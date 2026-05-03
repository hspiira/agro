const CACHE_VERSION = 'alm-agros-v1';
const SHELL = ['/', '/m', '/m/home', '/m/about', '/m/shop', '/m/gallery', '/m/more'];

self.addEventListener('install', (e) => {
  console.log('[SW] Installing service worker...');
  e.waitUntil(
    caches.open(CACHE_VERSION)
      .then((c) => {
        console.log('[SW] Caching app shell');
        return c.addAll(SHELL);
      })
      .then(() => {
        console.log('[SW] Installation complete');
        return self.skipWaiting();
      })
      .catch((err) => console.error('[SW] Installation failed:', err))
  );
});

self.addEventListener('activate', (e) => {
  console.log('[SW] Activating service worker...');
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((k) => k !== CACHE_VERSION)
          .map((k) => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      );
    }).then(() => {
      console.log('[SW] Activation complete');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const cache = caches.open(CACHE_VERSION);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => {
          console.log('[SW] Network failed, using cache for:', url.pathname);
          return caches.match(request).then((cached) => cached || caches.match('/m'));
        })
    );
    return;
  }

  // Handle resource requests with cache-first strategy
  e.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response && response.status === 200) {
            const cache = caches.open(CACHE_VERSION);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        })
        .catch((err) => {
          console.error('[SW] Fetch failed:', url.pathname, err);
          return null;
        });
    })
  );
});
