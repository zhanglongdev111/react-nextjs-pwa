self.__precacheManifest = [
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/_app.js",
    "revision": "a6707f8ce2b0404b398e"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/_error.js",
    "revision": "595de66b3dc75d01b272"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/dynamicPage/[counter].js",
    "revision": "41a95171018085afe879"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/index.js",
    "revision": "4136661bbb23d4cf33f1"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/login.js",
    "revision": "86bd89a009658082875f"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/page1.js",
    "revision": "3d1d601b29cbe5a3c7fc"
  },
  {
    "url": "/_next/static/USOnSTBlp3bpEJu1grJrb/pages/private1.js",
    "revision": "1cefc059f0900f2886bc"
  },
  {
    "url": "/_next/static/chunks/commons.cbbc5cda5d9c1e5f29c2.js",
    "revision": "76335237adb2340d65de"
  },
  {
    "url": "/_next/static/runtime/main-5676d46b107b105eec22.js",
    "revision": "58974ec02e5f5ef8c50c"
  },
  {
    "url": "/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "static/android-chrome-192x192.png",
    "revision": "530141b9ba7c48c046b7be068992fbea"
  },
  {
    "url": "static/android-chrome-512x512.png",
    "revision": "03e1e69e355a1e67830d9d6eb73c1529"
  },
  {
    "url": "static/apple-touch-icon.png",
    "revision": "c85de09057f2c9e7f28b4e12b21db83a"
  },
  {
    "url": "static/browserconfig.xml",
    "revision": "a493ba0aa0b8ec8068d786d7248bb92c"
  },
  {
    "url": "static/css/bootstrap.min.css",
    "revision": "8166a7305b3f33070aa61650c9efaaed"
  },
  {
    "url": "static/favicon-16x16.png",
    "revision": "6f32c8d064cb9227a542beca31b7706e"
  },
  {
    "url": "static/favicon-32x32.png",
    "revision": "ff0f064d4f31dc5f75cbd864a695811f"
  },
  {
    "url": "static/manifest.json",
    "revision": "2110c4a029711d3f60be3c7d0332c268"
  },
  {
    "url": "static/mstile-150x150.png",
    "revision": "bcbcd87df04932e11eef6faf134a2593"
  },
  {
    "url": "static/robot.txt",
    "revision": "6978a616c585d03cb5b542a891995efb"
  },
  {
    "url": "static/safari-pinned-tab.svg",
    "revision": "940da6a2fdfb2efae0c14326fc431ed6"
  },
  {
    "url": "static/splashscreen-icon-512x512.png",
    "revision": "0be5f9bfd8d4e977a3a3293ed3f1ce2c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
