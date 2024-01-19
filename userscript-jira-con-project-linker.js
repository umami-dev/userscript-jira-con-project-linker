// ==UserScript==
// @name         Tripla CON project linker
// @namespace    http://tampermonkey.net/
// @version      2024-01-19
// @description  try to take over the world!
// @author       Shangwei Tsai
// @match        https://github.com/umami-dev/*
// @icon         https://tripla.jp/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('.commit-title, .js-issue-title').forEach((elm) => {
        elm.innerHTML =  elm.innerHTML.replaceAll(/CON-\d+/ig, `<a href='https://umami-me.atlassian.net/browse/$&' target='_blank'>$&</a>`)
    })
})();
