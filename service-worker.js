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

importScripts("/walletconnect-dapp/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/walletconnect-dapp/workbox-v3.6.3"});

importScripts(
  "/walletconnect-dapp/precache-manifest.e45827d9725f2d9cfd8834c636303e7d.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/walletconnect-dapp/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
