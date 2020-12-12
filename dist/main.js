!function(o){var e={};function t(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return o[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=o,t.c=e,t.d=function(o,e,r){t.o(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:r})},t.r=function(o){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},t.t=function(o,e){if(1&e&&(o=t(o)),8&e)return o;if(4&e&&"object"==typeof o&&o&&o.__esModule)return o;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:o}),2&e&&"string"!=typeof o)for(var n in o)t.d(r,n,function(e){return o[e]}.bind(null,n));return r},t.n=function(o){var e=o&&o.__esModule?function(){return o.default}:function(){return o};return t.d(e,"a",e),e},t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},t.p="",t(t.s=5)}([function(o,e){o.exports=require("express")},function(o,e){o.exports=require("path")},function(o,e){o.exports=require("socket.io")},function(o,e){o.exports=require("morgan")},function(o,e){o.exports=require("dotenv")},function(o,e,t){t(6),o.exports=t(7)},function(o,e){o.exports=require("@babel/polyfill")},function(o,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),a=t(2),i=t.n(a),c=t(3),s=t.n(c),m=t(4),u=t.n(m),f=t(1),l=t.n(f);t(8);function d(o){return function(o){if(Array.isArray(o))return g(o)}(o)||function(o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o))return Array.from(o)}(o)||function(o,e){if(!o)return;if("string"==typeof o)return g(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);"Object"===t&&o.constructor&&(t=o.constructor.name);if("Map"===t||"Set"===t)return Array.from(o);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(o,e)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(o,e){(null==e||e>o.length)&&(e=o.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=o[t];return r}function p(o,e,t,r,n,a,i){try{var c=o[a](i),s=c.value}catch(o){return void t(o)}c.done?e(s):Promise.resolve(s).then(r,n)}function y(o){return function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function i(o){p(a,r,n,i,c,"next",o)}function c(o){p(a,r,n,i,c,"throw",o)}i(void 0)}))}}u.a.config();var v=process.env.PORT,h=n()();h.set("view engine","pug"),h.set("views",l.a.resolve("src","frontend","templates")),h.use(s()("dev")),h.use("/dist",n.a.static(l.a.resolve("dist"))),h.get("/",(function(o,e){e.render("main.pug",{FONTAWESOME:process.env.FONTAWESOME})}));var b=h.listen(v,(function(){return console.log("Listening on http://localhost:".concat(v))})),S=i.a.listen(b),k=S.of("/easy");k.room={},k.on("connection",(function(o){function e(){k.room[o.room].gameStart=!0,o.emit("getGameStart"),o.to(o.room).broadcast.emit("getGameStart"),S.of("/easy").in(o.room).clients((function(o,e){e.length>0&&S.of("/easy").connected[e[0]].emit("getTurn")}))}o.settedData=!1,o.lose=!1,o.on("postNickname",(function(e){var t=e.nickname;o.nickname=t})),o.on("postRoom",y(regeneratorRuntime.mark((function e(){var t,r,n,a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(){return(i=y(regeneratorRuntime.mark((function o(){var e;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,S.of("/easy").in(t).clients((function(o,e){r=d(e)}));case 2:e=o.sent,r.forEach((function(o){n.push(e.sockets[o].nickname)})),t in k.room||(console.log("create Object"),k.room[t]={roomStart:!1,gameStart:!1,users:0,settedData:0,ready:0,lose:0}),(r.length>=4||!0===k.room[t].roomStart)&&(console.log("can't enter room",t),t+=1,r=[],n=[],a());case 6:case"end":return o.stop()}}),o)})))).apply(this,arguments)},a=function(){return i.apply(this,arguments)},t=1,r=[],n=[],e.next=7,a();case 7:c=r.length+1,o.join(t),o.room=t,o.to(o.room).broadcast.emit("otherJoin",{nickname:o.nickname,USER:c,ID:o.id}),o.emit("meJoin",{nicknames:n,USER:c,IDs:r,ROOM:t}),k.room[o.room].users+=1,4===c&&(o.emit("getRoomStart"),o.to(o.room).broadcast.emit("getRoomStart"),k.room[o.room].roomStart=!0,k.room[o.room].users=4),console.log(k.room);case 15:case"end":return e.stop()}}),e)})))),o.on("disconnecting",(function(){try{!0===k.room[o.room].gameStart&&S.of("/easy").in(o.room).clients((function(e,t){if(t.length>1){console.log("I will LEAVE!!!");var r=t[t.findIndex((function(e){return e===o.id}))+1];void 0===r&&(r=t[0]),S.of("/easy").connected[r].emit("getTurn")}}))}catch(o){console.log(o)}})),o.on("disconnect",y(regeneratorRuntime.mark((function t(){var r,n,a,i,c,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=o.room,n=[],a={},t.next=5,S.of("/easy").in(r).clients((function(o,e){n=d(e)}));case 5:i=t.sent,n.forEach((function(o){a[o]=i.sockets[o].nickname})),c=n.length,o.to(r).broadcast.emit("getLeave",{nickname:o.nickname,USER:c,clientDatas:a,clientIDs:n});try{!0===o.lose&&(k.room[o.room].lose-=1),!0===o.settedData&&(k.room[o.room].settedData-=1),k.room[o.room].settedData===k.room[o.room].users&&!1===k.room[o.room].gameStart&&e(),k.room[o.room].users-=1,k.room[o.room].users===k.room[o.room].lose+1&&!0===k.room[o.room].roomStart&&(s=n.filter((function(o){return!1===S.of("/easy").connected[o].lose})),S.of("/easy").connected[s[0]].emit("getWin")),0===k.room[o.room].users&&(k.room[o.room]={roomStart:!1,gameStart:!1,users:0,settedData:0,ready:0,lose:0})}catch(o){console.log(o)}console.log(k.room);case 11:case"end":return t.stop()}}),t)})))),o.on("postCloseGame",(function(){S.of("/easy").to(o.room).emit("getCloseGame")})),o.on("ready",(function(){k.room[o.room].ready+=1,k.room[o.room].ready>4&&(k.room[o.room].ready=4),k.room[o.room].users>=2&&k.room[o.room].ready===k.room[o.room].users&&(o.emit("getRoomStart"),o.to(o.room).broadcast.emit("getRoomStart"),k.room[o.room].roomStart=!0),console.log(k.room)})),o.on("notReady",(function(){k.room[o.room].ready-=1,k.room[o.room].ready<0&&(k.room[o.room].ready=0),console.log(k.room)})),o.on("postSetDataDone",y(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k.room[o.room].settedData+=1,o.settedData=!0,k.room[o.room].settedData===k.room[o.room].users&&e(),console.log(k.room);case 4:case"end":return t.stop()}}),t)})))),o.on("postOtherTurn",(function(e){o.to(o.room).broadcast.emit("getOtherTurn",e)})),o.on("postLose",(function(e){k.room[o.room].lose+=1,console.log(k.room),o.lose=!0;var t=S.of("/easy").in(o.room).clients().sockets[e].nickname;o.to(o.room).broadcast.emit("getLose",{ID:e,nickname:t}),k.room[o.room].lose+1===k.room[o.room].users&&S.of("/easy").in(o.room).clients((function(e,t){var r=t.filter((function(o){return!1===S.of("/easy").connected[o].lose}));S.of("/easy").connected[r].emit("getWin");var n=S.of("/easy").in(o.room).clients().sockets[r].nickname;o.to(o.room).broadcast.emit("otherWin",{ID:r,nickname:n})}))})),o.on("postChat",(function(e){var t=e.chat;o.to(o.room).broadcast.emit("getChat",{chat:t,nickname:o.nickname})})),o.on("postData",(function(e){var t=e.dataArr,r=e.nickname,n=e.ID;"LOSE"!==t&&o.to(o.room).broadcast.emit("getData",{dataArr:t,nickname:r});try{S.of("/easy").in(o.room).clients((function(o,e){if(e.length>0){var t=e[e.findIndex((function(o){return o===n}))+1];void 0===t&&(t=e[0]),S.of("/easy").connected[t].emit("getTurn")}}))}catch(o){console.log(o)}})),o.on("postCheckedData",(function(e){var t=e.DATA,r=e.dataArr;o.to(o.room).broadcast.emit("getCheckedData",{DATA:t,dataArr:r,ID:o.id})}))}))},function(o,e,t){}]);