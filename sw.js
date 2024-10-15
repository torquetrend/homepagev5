const cacheName = 'torquetrend-cache-v1';
const assetsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/particles.json',
    '/manifest.json',
    '/images/hero-bg.jpg',
    '/images/article1.jpg',
    '/images/article2.jpg',
    // Add other assets as needed
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
