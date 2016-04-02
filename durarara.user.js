// ==UserScript==
// @name           Durarara Style
// @namespace      qgustavor
// @description    Changes the shoutbox style to the Durarara style from April Fools
// @version        1.0
// @match    https://tracker.uniotaku.com/shoutboxn.php
// @grant    GM_getValue
// ==/UserScript==

var script = document.createElement('script');
script.src = 'https://qgustavor.github.io/durarara-style/drrr.js';
document.head.appendChild(script);