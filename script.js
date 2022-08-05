// ==UserScript==
// @name         Classic player for Youtube shorts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  change player to classic in youtube shorts
// @author       Garon
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @match        https://github.com/GaronCode/shorts-to-classic/blob/main/script.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    let a = (h) => {
        if(h.includes('/shorts/')) document.location.replace(window.location.href.replace('/shorts/', '/watch?v='))
    }
    let href = window.location.href;

    a(href);
    setInterval(() => {
        if (href !== window.location.href) {
            href = window.location.href;
            a(href);
        }
    }, 50)
})();
