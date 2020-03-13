// This is the service worker with the Cache-first network

const CACHE = "pwabuilder-precache";
const precacheFiles = [
  "/static/media/arrow.a27cc34d.svg",
  "/static/media/home.7335ec85.svg",
  "/static/media/light.1ee409f6.svg",
  "/static/media/papers.e7fd6c37.svg",
  "/static/media/solar.feb89d2c.svg",
  "/favicon.ico",
  "/static/js/2.51b1363f.chunk.js",
  "/static/js/2.51b1363f.chunk.js.map",
  "/static/js/main.7e3d7dc9.chunk.js",
  "/static/js/main.7e3d7dc9.chunk.js.map",
  "/static/js/runtime-main.6c427cc5.js",
  "/static/js/runtime-main.6c427cc5.js.map"
];

self.addEventListener("install", function(event) {
  console.log("[PWA Builder] Install Event processing");

  console.log("[PWA Builder] Skip waiting on install");
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      console.log("[PWA Builder] Caching pages during install");
      return cache.addAll(precacheFiles);
    })
  );
});

// Allow sw to control of current page
self.addEventListener("activate", function(event) {
  console.log("[PWA Builder] Claiming clients for current page");
  event.waitUntil(self.clients.claim());
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fromCache(event.request).then(
      function(response) {
        // The response was found in the cache so we responde with it and update the entry

        // This is where we call the server to get the newest version of the
        // file to use the next time we show view
        event.waitUntil(
          fetch(event.request).then(function(response) {
            return updateCache(event.request, response);
          })
        );

        return response;
      },
      function() {
        // The response was not found in the cache so we look for it on the server
        return fetch(event.request)
          .then(function(response) {
            // If request was success, add or update it in the cache
            event.waitUntil(updateCache(event.request, response.clone()));

            return response;
          })
          .catch(function(error) {
            console.log(
              "[PWA Builder] Network request failed and no cache." + error
            );
          });
      }
    )
  );
});

function fromCache(request) {
  // Check to see if you have it in the cache
  // Return response
  // If not in the cache, then return
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(function(matching) {
      if (!matching || matching.status === 404) {
        return Promise.reject("no-match");
      }

      return matching;
    });
  });
}

function updateCache(request, response) {
  return caches.open(CACHE).then(function(cache) {
    return cache.put(request, response);
  });
}
