// ==UserScript==
// @name         rainbow 
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Load all colored themes 
// @author       camel
// @match        https://*/room*
// @match        http://*/room*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=drrr.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	// Your code here...

	room.rainbow = room.rainbow === undefined ? {} : room.rainbow;

	room.rainbow.putPinkTheme = () => {
		document.body.style.backgroundColor="#d5a5a4";		
		document.getElementsByClassName("message_box_effect_wraper")[0].style.backgroundColor="#cd9897";
		document.getElementsByName("message")[0].style.backgroundColor="#cd9897";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[895].style.color="black";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[958].style.color="black";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1193].style.color="black";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1254].style.color="black";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1761].style.color="black";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1309].style.color="#000000";
		setTimeout( ()=>{document.getElementsByClassName("form-control room-submit-btn")[0].style.backgroundColor="#cd9897";}, 150);
		document.getElementsByClassName("panel-hide is-host")[0].style.backgroundColor="#cd9897";
	}


	room.rainbow.putBlueTheme = () => {
		document.body.style.backgroundColor="#555c61";
		document.getElementsByClassName("message_box_effect_wraper")[0].style.backgroundColor="#3a3e42";
		document.getElementsByName("message")[0].style.backgroundColor="#3a3e42";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[895].style.color="20B2AA";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[958].style.color="20B2AA";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1193].style.color="20B2AA";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1254].style.color="20B2AA";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1761].style.color="20B2AA";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1309].style.color="#20B2AA";
		setTimeout( ()=>{document.getElementsByClassName("form-control room-submit-btn")[0].style.backgroundColor="#3a3e42";}, 150);
		document.getElementsByClassName("panel-hide is-host")[0].style.backgroundColor="#3a3e42";
	}


	room.rainbow.putRedTheme = () => {
		document.getElementsByClassName("message_box_effect_wraper")[0].style.backgroundColor="#302424";
		document.getElementsByName("message")[0].style.backgroundColor="#422e2e";
		setTimeout( ()=>{document.getElementsByClassName("form-control room-submit-btn")[0].style.backgroundColor="#422e2e";}, 150);
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[958].style.color="white";
		document.styleSheets[(document.styleSheets.length -1 )].cssRules[1193].style.color="white";
	}

	console.log("rainbow loaded");



})();
