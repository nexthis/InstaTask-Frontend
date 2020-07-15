module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.{ico,html,png,json,js,css}"
  ],
  "swDest": "build/sw.js",
  "swSrc": "src/serviceWorker.ts",
  //"injectionPoint": "/(const precacheManifest = )\[\](;)/"
};