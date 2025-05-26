// ==UserScript==
// @name         Tripla CON project linker
// @namespace    http://tampermonkey.net/
// @version      2025-05-26.1
// @description  try to take over the world!
// @author       Shangwei Tsai
// @match        https://github.com/umami-dev/*
// @downloadURL  https://raw.githubusercontent.com/umami-dev/userscript-jira-con-project-linker/main/userscript-jira-con-project-linker.user.js
// @updateURL    https://raw.githubusercontent.com/umami-dev/userscript-jira-con-project-linker/main/userscript-jira-con-project-linker.user.js
// @icon         https://tripla.jp/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const transform = () => {
        document.querySelectorAll('.commit-title, .js-issue-title .extended-commit-description-container').forEach((elm) => {
            if(!elm.dataset.triplaConProjectLinkTransformed) {
                elm.innerHTML =  elm.innerHTML.replaceAll(/CON[-\s]\d+/ig, (raw) => { 
                    const formatted = raw.replace(/[-_\s]+/ig, '-')
                    return `<a href='https://triplakk.atlassian.net/browse/${formatted}' target='_blank'>${raw}</a>`
                })
                elm.dataset.triplaConProjectLinkTransformed = 'done'
            }
        })
    }
    transform()
    setInterval(transform, 2000) // for SPA

})();
