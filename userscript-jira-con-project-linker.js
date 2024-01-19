// ==UserScript==
// @name         Tripla CON project linker
// @namespace    http://tampermonkey.net/
// @version      2024-01-19.2
// @description  try to take over the world!
// @author       Shangwei Tsai
// @match        https://github.com/umami-dev/*
// @downloadURL  https://raw.githubusercontent.com/umami-dev/userscript-jira-con-project-linker/main/userscript-jira-con-project-linker.js
// @updateURL    https://raw.githubusercontent.com/umami-dev/userscript-jira-con-project-linker/main/userscript-jira-con-project-linker.js
// @icon         https://tripla.jp/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const transform = () => {
        document.querySelectorAll('.commit-title, .js-issue-title').forEach((elm) => {
            if(!elm.dataset.triplaConProjectLinkTransformed) {
                elm.innerHTML =  elm.innerHTML.replaceAll(/CON-\d+/ig, `<a href='https://umami-me.atlassian.net/browse/$&' target='_blank'>$&</a>`)
                elm.dataset.triplaConProjectLinkTransformed = 'done'
            }
        })
    }
    setInterval(transform, 2000) // for SPA

})();
