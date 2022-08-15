// ==UserScript==
// @name         Red
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/room*
// @match        http://*/room*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drrr.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

document.getElementsByClassName("message_box_effect_wraper")[0].style.backgroundColor="#302424";

document.getElementsByName("message")[0].style.backgroundColor="#422e2e";

setTimeout( ()=>{document.getElementsByName("ext_post")[0].style.backgroundColor="#422e2e";}, 150);

document.styleSheets[(document.styleSheets.length -1 )].cssRules[958].style.color="white"

document.styleSheets[(document.styleSheets.length -1 )].cssRules[1193].style.color="white"




})();
