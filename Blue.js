// ==UserScript==
// @name         pink
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make Blue 
// @author       camel
// @match        https://*/room*
// @match        http://*/room*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drrr.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    room.rainbow.putBlueTheme === undefined ? 
		console.log("Module Rainbow Not Loaded"):
		room.rainbow.putBlueTheme();

})();
