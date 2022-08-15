// ==UserScript==
// @name         Drrr Youtube Player
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Camel
// @match        https://*/room*
// @match        http://*/room*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

const iframe = document.createElement("iframe");
document.getElementById("body").prepend(iframe);
iframe.frameBorder = 0;
iframe.style.zIndex=0;
iframe.style.position="fixed";
iframe.style.left=0;
iframe.style.right =0;
iframe.style.top=0;
iframe.style.right =0;
iframe.style.height="100%";
iframe.style.width="100%";
const eText= document.createElement("input");
eText.style.cssText=`
	position:fixed;
	width:60px;
	height:60px;
	bottom:15%;
	right:5%;
	background-color:#000C0933;
	border-radius:50px;
	color:#FFF;
	text-align:center;
`;
eText.type="text";
eText.onkeypress = (event) =>{
 var key = event.keyCode;

    if (key === 13) {
        const value = eText.value;
	iframe.src = `https://www.youtube.com/embed/${youtube_parser(value)}`;
    }

}
eText.innerText="H";
document.body.append(eText);
function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}
