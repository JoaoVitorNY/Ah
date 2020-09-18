var CACHE_NAME = 'joaoyoshida-cache-v1'
var urlsToCache = [
    'css/bootstrap.css',
    'js/bootstrap.js',
    'js/jquery-3.5.1.js',
]

self.addEventListener('install', function(e) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log('Cache Aberto')
            return cache.addAll(urlsToCache)
        })
    )
})

self.addEventListener('fetch', function(e) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response
            }
            return fetch(event.request)
        })
    )
})