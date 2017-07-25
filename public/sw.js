const CACHE_NAME = 'GLENNDEHAAN-v2';
const expectedCaches = [CACHE_NAME];
const staticFiles = [
    './',
    './css/main.css',
    './build/bundle.js',
    './css/materialize.min.css',
    './fonts/MaterialIcons-Regular.eot',
    './fonts/MaterialIcons-Regular.ijmap',
    './fonts/MaterialIcons-Regular.svg',
    './fonts/MaterialIcons-Regular.ttf',
    './fonts/MaterialIcons-Regular.woff',
    './fonts/MaterialIcons-Regular.woff2',
    './images/icon/logo_144x144.png',
    './favicon.ico'
];

/**
 * Performs install steps.
 */
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(staticFiles))
    );
});

/**
 * Handles requests: responds with cache or else network.
 */
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});

/**
 * Cleans up static cache and activates the Service Worker.
 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map((key) => {
                if (!expectedCaches.includes(key)) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            console.log(`${CACHE_NAME} now ready to handle fetches!`);
            return clients.claim();
        })
    );
});
