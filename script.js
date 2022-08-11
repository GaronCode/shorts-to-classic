// ==UserScript==
// @name         Classic player for Youtube shorts
// @namespace    http://tampermonkey.net/
// @version      1.1
// @homepageURL  https://github.com/GaronCode/shorts-to-classic
// @supportURL   https://github.com/GaronCode/shorts-to-classic/issues
// @updateURL    https://raw.githubusercontent.com/GaronCode/shorts-to-classic/main/script.js
// @downloadURL  https://raw.githubusercontent.com/GaronCode/shorts-to-classic/main/script.js
// @description  change player to classic in youtube shorts
// @author       Garon
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    'use strict';
    let a = () => {if(window.location.href.includes('/shorts/')) document.location.replace(window.location.href.replace('/shorts/', '/watch?v='))}
    a()
    window.addEventListener('yt-navigate-start', a)

})();
