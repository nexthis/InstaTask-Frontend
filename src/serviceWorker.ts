/* eslint-disable no-restricted-globals */
/* tslint:disable:no-var-requires */

///@ts-ignore
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

///@ts-ignore
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
