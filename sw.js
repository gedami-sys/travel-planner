const CACHE = 'travel-planner-v1';
const FILES = [
  '/travel-planner/',
  '/travel-planner/index.html',
  '/travel-planner/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
