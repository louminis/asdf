// ==UserScript==
// @name         day-night
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       camel
// @match        https://*/room*
// @match        http://*/room*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drrr.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
	
    if(room.rainbow===undefined) {
      console.log("Module Rainbow Not Loaded");
      return;
    }

    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 20;
    isDayTime? room.rainbow.putPinkTheme(): room.rainbow.putBlueTheme();
})();
