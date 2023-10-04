'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "aa795fcf0517cbcdfdaf5ca2550f0c8e",
"assets/AssetManifest.json": "49218b80f5c480b075e1a36c69d7a0b4",
"assets/assets/bee.png": "a61ffae95bb560e81f7584fc4a81b80a",
"assets/assets/bg.png": "4398bb575109565c257db67ae4e0c9d4",
"assets/assets/icons/home.png": "a0afc837876d836d552873c113e6834b",
"assets/assets/icons/orders.png": "023989ee6b4e8bd77a6d9f1d83cc4180",
"assets/assets/icons/promo.png": "cbdc925d18ac1238933043392d60362c",
"assets/assets/icons/shop.png": "3134718ea4ba06d03728d84861981ab6",
"assets/assets/jollibot/burger.png": "91b11f0c04693ad198f9aa28c91a052a",
"assets/assets/jollibot/chickenjoy.png": "770ad4abae3503accfde9017aefecd9a",
"assets/assets/jollibot/fam.png": "0d5bbdbc98ec4db2b55627e2edb34b9b",
"assets/assets/login_bg.jpg": "a95e9e210951287f0c91faa1a63537fd",
"assets/assets/logo.png": "079050b3777006ca038a6121b5292b01",
"assets/assets/register_bg.jpg": "4969275ff46a4ada797414a95b0a426c",
"assets/assets/sliders/slide1.png": "efa331446d1956d7228f6b67277c68d4",
"assets/assets/sliders/slide2.png": "de9ce565f01ff0e87e30f9fa294042ac",
"assets/assets/sliders/slide3.png": "1d04a0255cef88ee07f449253ea79e17",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "07b61aa4eeaa3971cfc3dcb97dd7b2f0",
"assets/google_fonts/OFL.txt": "cabc2d83f0db00f1c4d8ab4f5cd8a34d",
"assets/google_fonts/Quicksand-Bold.ttf": "517b4a8fa3577cc7066e9bcfebe4beff",
"assets/google_fonts/Quicksand-Light.ttf": "34d0d3091e4f3de26ff0f2c4a4f6bfb7",
"assets/google_fonts/Quicksand-Medium.ttf": "890d9ed927bb7f0c6b9eed04f9c329e5",
"assets/google_fonts/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"assets/google_fonts/Quicksand-SemiBold.ttf": "60683c595c4de500713906b9ccf1e2ab",
"assets/NOTICES": "bcda17f3572cb64893dbecbf229d3ce2",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "c622cda37f1b51c65350bcc9bd238093",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "4add2b996b8a57cc0860624cba788f81",
"icons/Icon-512.png": "a5516195b9967e4c84171945bac16859",
"icons/Icon-maskable-192.png": "4add2b996b8a57cc0860624cba788f81",
"icons/Icon-maskable-512.png": "a5516195b9967e4c84171945bac16859",
"index.html": "437b54d7caf7b9de415e6eeabed1a878",
"/": "437b54d7caf7b9de415e6eeabed1a878",
"main.dart.js": "958bca0f63da7bffe1e632b479ff9bf6",
"manifest.json": "4fa9237b302966d71b2e8b696e58a69c",
"splash/img/dark-1x.png": "da6077aad53ee1abbeab625eccba794a",
"splash/img/dark-2x.png": "81fda14d5066a293ae7ad9b497a42221",
"splash/img/dark-3x.png": "ca5ac540d5edacf7a44276fef31d9eb4",
"splash/img/dark-4x.png": "9fe08f0fa6957973bea6e627993af6f2",
"splash/img/light-1x.png": "da6077aad53ee1abbeab625eccba794a",
"splash/img/light-2x.png": "81fda14d5066a293ae7ad9b497a42221",
"splash/img/light-3x.png": "ca5ac540d5edacf7a44276fef31d9eb4",
"splash/img/light-4x.png": "9fe08f0fa6957973bea6e627993af6f2",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "854fd4faba3cdad8db866826180393c6",
"version.json": "9f7da2f51e0d41bda449872d30d9b403"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
