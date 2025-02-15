const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    // CSS、JS、画像など、キャッシュしたいリソースを追加
];

self.addEventListener('install', event => {
    // Service Workerインストール時にリソースをキャッシュ
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    // ネットワーク要求に対してキャッシュを返す
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
