// ==UserScript==
// @name         pink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make pink
// @author       camel
// @match        https://*/room*
// @match        http://*/room*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drrr.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
document.body.style.backgroundColor="#d5a5a4";

document.getElementsByClassName("message_box_effect_wraper")[0].style.backgroundColor="#cd9897";

document.getElementsByName("message")[0].style.backgroundColor="#cd9897";

document.styleSheets[(document.styleSheets.length -1 )].cssRules[895].style.color="black"

document.styleSheets[(document.styleSheets.length -1 )].cssRules[958].style.color="black"

document.styleSheets[(document.styleSheets.length -1 )].cssRules[1193].style.color="black"

document.styleSheets[(document.styleSheets.length -1 )].cssRules[1254].style.color="black"


document.styleSheets[(document.styleSheets.length -1 )].cssRules[1761].style.color="black"

document.styleSheets[(document.styleSheets.length -1 )].cssRules[1309].style.color="#000000"

setTimeout( ()=>{document.getElementsByName("ext_post")[0].style.backgroundColor="#cd9897";}, 150);

document.getElementsByClassName("panel-hide is-host")[0].style.backgroundColor="#cd9897";




})();
