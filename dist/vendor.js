!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({9:function(e,t,n){"use strict";n.r(t);var a=document.getElementById("chatForm"),r=document.getElementById("chatInput"),i=document.getElementById("chatUl"),c=function(e,t,n){var a=document.createElement("li"),r=document.createElement("span"),c=document.createElement("span");r.innerText="".concat(t,":"),c.innerText=e,0===n?a.classList.add("chat__li--system"):1===n?a.classList.add("chat__li--me"):2===n?a.classList.add("chat__li--user"):3===n&&a.classList.add("chat__li--error"),a.appendChild(r),a.appendChild(c),i.appendChild(a)},s=function(e,t,n){var a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),c=document.createElement("span"),s=document.createElement("div"),o=document.createElement("div"),d=document.createElement("ul");if(a.classList.add("userArea"),a.classList.add("user".concat(e-1)),a.setAttribute("data-id",n),r.classList.add("user__title"),i.classList.add("user__nickname"),c.classList.add("user__nickname-span"),s.classList.add("user__avatar"),o.classList.add("user__board"),d.classList.add("user__board-ul"),c.innerText=t,i.appendChild(c),r.appendChild(i),r.appendChild(s),o.appendChild(d),a.appendChild(r),a.appendChild(o),e<4){document.querySelector(".nav1").appendChild(a)}else{var l=document.querySelector(".nav2"),u=l.querySelector(".chat");l.insertBefore(a,u)}},o=document.querySelector(".dataSetting"),d=function(){var e=!0,t=document.querySelector(".attackBtn"),n=document.querySelectorAll(".data__item button"),a=document.querySelectorAll(".dataDiv>span"),r=[];a.forEach((function(e){r.push(parseInt(e.innerText)),e.classList.contains("invalid")&&e.classList.remove("invalid"),t.classList.contains("invalid")&&t.classList.remove("invalid"),n.forEach((function(e){e.classList.contains("invalid")&&e.classList.remove("invalid")}))})),r.forEach((function(n){r.filter((function(e){return e!==n})).length===r.length-1?e=1==e:(e=!1,a.forEach((function(e){parseInt(e.innerText)===n&&(e.classList.add("invalid"),e.parentElement.previousSibling.classList.add("invalid"),e.parentElement.nextSibling.classList.add("invalid")),t.classList.add("invalid")})))}))};function l(){var e=this.nextSibling.childNodes[0].innerText;parseInt(e)<9?this.nextSibling.childNodes[0].innerText=parseInt(e)+1:this.nextSibling.childNodes[0].innerText=0,d()}function u(){var e=this.previousSibling.childNodes[0].innerText;parseInt(e)>0?this.previousSibling.childNodes[0].innerText=parseInt(e)-1:this.previousSibling.childNodes[0].innerText=9,d()}var m,f=function(e){if(e<3){for(var t=0;t<parseInt(e)+3;t++){var n=document.createElement("div"),a=document.createElement("button"),r=document.createElement("i"),i=document.createElement("button"),c=document.createElement("i"),s=document.createElement("div"),d=document.createElement("span");a.classList.add("upBtn"),r.classList.add("fas"),r.classList.add("fa-angle-up"),a.appendChild(r),i.classList.add("downBtn"),c.classList.add("fas"),c.classList.add("fa-angle-down"),i.appendChild(c),s.classList.add("dataDiv"),d.innerText="0",d.classList.add("invalid"),s.appendChild(d),n.classList.add("data__item"),n.appendChild(a),n.appendChild(s),n.appendChild(i),o.appendChild(n)}document.querySelector(".attackBtn").classList.add("invalid")}var m,f;m=document.querySelectorAll(".upBtn"),f=document.querySelectorAll(".downBtn"),m.forEach((function(e){e.addEventListener("click",l),e.classList.add("invalid")})),f.forEach((function(e){e.addEventListener("click",u),e.classList.add("invalid")}))},v=function(e,t){var n=document.querySelector(".info-window"),a=document.createElement("li");switch(a.innerText=e,t){case 0:a.classList.add("good");break;case 1:a.classList.add("bad");break;case 2:a.classList.add("error")}n.appendChild(a),setTimeout(p,5e3,a)};function p(e){e.remove()}function h(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var L=1,S=0,b=!1,g=!1,E=!1,k=!1,I=!1,A=function(e){switch(parseInt(e)){case 0:m=io("/easy");break;default:console.log("FUCK",e)}var t;t=localStorage.getItem("nickname"),m.emit("postNickname",{nickname:t}),m.nickname=t,m.emit("postRoom"),m.on("meJoin",(function(t){var n=t.nicknames,a=t.USER,r=t.IDs,i=t.ROOM;console.log(m.id);for(var o=2;o<a+1;o++)s(o,n[o-2],r[o-2]);m.room=i,function(e,t){var n,a=document.querySelector(".title--info .roomName");switch(e){case 0:n="Easy";break;case 1:n="Normal";break;case 2:n="Hard"}a.innerText="".concat(n," | ").concat(t)}(parseInt(e),i),C(a),document.querySelector(".title--nickname .userNickname").innerText=m.nickname,c("Welcome to join this game","system",0),v("Welcome to join this game",0)})),m.on("otherJoin",(function(e){var t=e.nickname,n=e.USER,a=e.ID;s(n,t,a),C(n),c("[".concat(t,"] joined this game"),"system",0),v("[".concat(t,"] joined this game"),0)})),m.on("getLeave",(function(e){var t=e.nickname,n=e.USER,a=e.clientDatas,r=e.clientIDs;document.querySelectorAll(".userArea").forEach((function(e){return e.remove()}));var i=h(r).filter((function(e){return e!==m.id})),o=[];i.forEach((function(e){o.push(a[e])}));for(var d=2;d<n+1;d++)s(d,o[d-2],i[d-2]);C(n),c("[".concat(t,"] leaved this game"),"system",0),v("[".concat(t,"] leaved this game"),0)})),m.on("getRoomStart",(function(){g=!0;var e=document.querySelector(".attackBtn");e.classList.contains("readyBtn")&&e.classList.remove("readyBtn"),e.classList.contains("ready")&&e.classList.remove("ready"),e.innerHTML='<i class="fas fa-baseball-ball"></i>',c("Game Start","system",0),c("Please set up your number","system",0),v("Game Start",0),v("Please set up your number",0),C(L)})),m.on("getGameStart",(function(){E=!0,c("All player has set a number","system",0),C(L),v("All player has set a number",0)})),m.on("getTurn",(function(){if(!1===k){b=!0,c("It's your turn","system",0),m.emit("postOtherTurn",m.id),document.querySelectorAll(".userArea").forEach((function(e){e.classList.contains("turn")&&e.classList.remove("turn")}));var e=document.querySelector(".attackBtn");e.classList.contains("inactive")&&e.classList.remove("inactive"),v("It's your turn",0)}else m.emit("postData",{dataArr:"LOSE",nickname:m.nickname,ID:m.id})})),m.on("getOtherTurn",(function(e){var t=document.querySelectorAll(".userArea"),n=document.querySelector('.userArea[data-id="'.concat(e,'"]')),a=document.querySelector(".attackBtn");a.classList.contains("inactive")||a.classList.add("inactive"),t.forEach((function(e){e.classList.contains("turn")&&e.classList.remove("turn")})),n.classList.add("turn")})),m.on("getData",(function(t){var n=t.dataArr,a=t.nickname;c("[".concat(n,"]"),a,0);var r=function(e,t,n){for(var a=0,r=0,i=0;i<t;i++)if(n[i]==e[i])a+=1;else for(var c=0;c<t;c++)n[c]==e[i]&&(r+=1);return 0===a&&0===r?"OUT":a===t?"Correct":"".concat(a,"S ").concat(r,"B")}(n,parseInt(e)+3,m.numData);!1===k&&(m.emit("postChat",{chat:r}),m.emit("postCheckedData",{DATA:r,dataArr:n}),"Correct"===r&&(m.emit("postLose",m.id),c("YOU LOSE","system",0),v("YOU LOSE",1),k=!0))}));var n=document.querySelector(".attackBtn");m.ready=!1,n.addEventListener("click",(function(){!function(e){var t=document.querySelectorAll(".dataDiv>span"),n=[],a=!0;if(t.forEach((function(e){return n.push(parseInt(e.innerText))})),n.forEach((function(e){a=n.filter((function(t){return t!==e})).length===n.length-1&&1==a})),!0===I)return c("Game has been closed","system",3),void v("Game has been closed",2);if(!0===g)!1===a?(c("Invalid Value","system",3),v("Invalid Value",2)):0===e?(m.numData=n,m.emit("postSetDataDone"),c("Your number has been set up successfully","system",0),v("Your number has been set up successfully",0),i=document.querySelector(".title--nickname .userNumber"),s=m.numData.join(""),i.innerText="| ".concat(s),S=1):!0===E?!0===b?(c("[".concat(n,"]"),m.nickname,1),m.emit("postData",{dataArr:n,nickname:m.nickname,ID:m.id}),b=!1):(c("It's not your turn","system",3),v("It's not your turn",2)):(c("Someone didn't set number yet","system",3),v("Someone didn't set number yet",2));else{var r=document.querySelector(".attackBtn");!1===m.ready?(m.emit("ready"),m.ready=!0,r.classList.contains("ready")||r.classList.add("ready")):(m.emit("notReady"),m.ready=!1,r.classList.contains("ready")&&r.classList.remove("ready"))}var i,s}(S)})),m.on("getCheckedData",(function(e){!function(e,t,n){var a=document.querySelector('.userArea[data-id="'.concat(n,'"]')).lastChild.firstChild,r=document.createElement("li"),i=document.createElement("span"),c=document.createElement("span");i.innerText=t.join(""),c.innerText=e,r.appendChild(i),r.appendChild(c),a.appendChild(r)}(e.DATA,e.dataArr,e.ID)})),m.on("getWin",(function(){c("YOU WIN","system",0),v("You WIN",0),m.emit("postCloseGame")})),m.on("otherWin",(function(e){e.ID;var t=e.nickname;c("[".concat(t,"] is winner"),"system",0),v("[".concat(t,"] is winner"),1)})),m.on("getLose",(function(e){var t=e.ID,n=e.nickname;c("[".concat(n,"] has been defeated"),"system",0),document.querySelector('.userArea[data-id="'.concat(t,'"]')).classList.add("LOSE"),v("[".concat(n,"] has been defeated"),1)})),m.on("getCloseGame",(function(){I=!0})),m.on("getChat",(function(e){var t=e.chat,n=e.nickname;c(t,n,2)})),function(){var e=m.nickname;(function(e){a.addEventListener("submit",(function(t){t.preventDefault(),c(r.value,e,1)}))})(e),document.getElementById("chatForm").addEventListener("submit",(function(){!function(){var e=document.getElementById("chatInput"),t=e.value;m.emit("postChat",{chat:t}),e.value=""}()}))}()};function C(e){var t=document.querySelector(".title--info .roomStatus");t.innerText=!0===g?!0===E?"Game has been started":"Game has been started (The player is setting a number)":"Waiting for another player (".concat(e,"/4)"),L=e}var _,q=document.querySelector(".login"),T=document.querySelector(".multiRoom"),x=document.querySelector(".login__form"),D=x.querySelector(".login__input"),O=document.querySelectorAll(".modeBtn");function B(e){e.preventDefault(),localStorage.setItem("nickname",D.value),f(_),A(_),D.value="",q.classList.add("invisi"),T.classList.remove("invisi")}function j(){_=this.dataset.mode,O.forEach((function(e){e.classList.contains("checked")&&e.classList.remove("checked")})),this.classList.add("checked"),localStorage.setItem("mode",_)}!function(){x.addEventListener("submit",B);var e=localStorage.getItem("nickname");null!==e&&(D.value=e),null===(_=localStorage.getItem("mode"))&&(_=0),O.forEach((function(e){e.dataset.mode==_&&e.classList.add("checked"),e.addEventListener("click",j)}))}()}});