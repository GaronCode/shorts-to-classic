// ==UserScript==
// @name         Classic player for Youtube shorts
// @namespace    http://tampermonkey.net/
// @version      1
// @description  change player to classic in youtube shorts
// @author       Garon
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    'use strict';
    let a = () => {
        if(window.location.href.includes('/shorts/')) document.location.replace(window.location.href.replace('/shorts/', '/watch?v='))
    }
    a();
    document.body.addEventListener("yt-navigate-start", ()=>a());
})();
