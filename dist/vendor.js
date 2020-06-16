/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend/app/chat.js":
/*!**********************************!*\
  !*** ./src/frontend/app/chat.js ***!
  \**********************************/
/*! exports provided: paintChat, chatApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintChat\", function() { return paintChat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatApp\", function() { return chatApp; });\nvar chatForm = document.getElementById(\"chatForm\");\nvar chatInput = document.getElementById(\"chatInput\");\nvar chatUl = document.getElementById(\"chatUl\");\nvar paintChat = function paintChat(text, nickname, mode) {\n  // mode 0: system, 1: self, 2: other, 3: error\n  var chatLi = document.createElement(\"li\");\n  var chatNick = document.createElement(\"span\");\n  var chatText = document.createElement(\"span\");\n  chatNick.innerText = \"\".concat(nickname, \":\");\n  chatText.innerText = text;\n\n  if (mode === 0) {\n    chatLi.classList.add(\"chat__li--system\");\n  } else if (mode === 1) {\n    chatLi.classList.add(\"chat__li--me\");\n  } else if (mode === 2) {\n    chatLi.classList.add(\"chat__li--user\");\n  } else if (mode === 3) {\n    chatLi.classList.add(\"chat__li--error\");\n  }\n\n  chatLi.appendChild(chatNick);\n  chatLi.appendChild(chatText);\n  chatUl.appendChild(chatLi);\n};\nvar chatApp = function chatApp(nickname) {\n  chatForm.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    paintChat(chatInput.value, nickname, 1);\n  });\n};\n\n//# sourceURL=webpack:///./src/frontend/app/chat.js?");

/***/ }),

/***/ "./src/frontend/app/dataController.js":
/*!********************************************!*\
  !*** ./src/frontend/app/dataController.js ***!
  \********************************************/
/*! exports provided: checkingData, validateValue, createController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkingData\", function() { return checkingData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateValue\", function() { return validateValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createController\", function() { return createController; });\nvar dataSettingArea = document.querySelector(\".dataSetting\");\nvar checkingData = function checkingData(dataArr, MAX, socketData) {\n  var S = 0;\n  var B = 0;\n  var DATA;\n\n  for (var i = 0; i < MAX; i++) {\n    if (socketData[i] == dataArr[i]) {\n      S += 1;\n    } else {\n      for (var j = 0; j < MAX; j++) {\n        if (socketData[j] == dataArr[i]) {\n          B += 1;\n        }\n      }\n    }\n  }\n\n  if (S === 0 && B === 0) {\n    DATA = \"OUT\";\n  } else if (S === MAX) {\n    DATA = \"WIN\";\n  } else {\n    DATA = \"\".concat(S, \"S \").concat(B, \"B\");\n  }\n\n  return DATA;\n};\nvar validateValue = function validateValue() {\n  var valid = true;\n  var attackBtn = document.querySelector(\".attackBtn\");\n  var arrowBtn = document.querySelectorAll(\".data__item button\");\n  var datas = document.querySelectorAll(\".dataDiv>span\");\n  var dataArr = [];\n  datas.forEach(function (element) {\n    dataArr.push(parseInt(element.innerText));\n\n    if (element.classList.contains(\"invalid\")) {\n      element.classList.remove(\"invalid\");\n    }\n\n    if (attackBtn.classList.contains(\"invalid\")) {\n      attackBtn.classList.remove(\"invalid\");\n    }\n\n    arrowBtn.forEach(function (element) {\n      if (element.classList.contains(\"invalid\")) {\n        element.classList.remove(\"invalid\");\n      }\n    });\n  });\n  dataArr.forEach(function (element) {\n    if (dataArr.filter(function (i) {\n      return i !== element;\n    }).length === dataArr.length - 1) {\n      valid == true ? valid = true : valid = false;\n    } else {\n      valid = false;\n      datas.forEach(function (e) {\n        if (parseInt(e.innerText) === element) {\n          e.classList.add(\"invalid\");\n          e.parentElement.previousSibling.classList.add(\"invalid\");\n          e.parentElement.nextSibling.classList.add(\"invalid\");\n        }\n\n        attackBtn.classList.add(\"invalid\");\n      });\n    }\n  });\n};\n\nfunction handleUpBtn() {\n  var value = this.nextSibling.childNodes[0].innerText;\n\n  if (parseInt(value) < 9) {\n    this.nextSibling.childNodes[0].innerText = parseInt(value) + 1;\n  } else {\n    this.nextSibling.childNodes[0].innerText = 0;\n  }\n\n  validateValue();\n}\n\nfunction handleDownBtn() {\n  var value = this.previousSibling.childNodes[0].innerText;\n\n  if (parseInt(value) > 0) {\n    this.previousSibling.childNodes[0].innerText = parseInt(value) - 1;\n  } else {\n    this.previousSibling.childNodes[0].innerText = 9;\n  }\n\n  validateValue();\n}\n\nfunction handleController() {\n  var upBtns = document.querySelectorAll(\".upBtn\");\n  var downBtns = document.querySelectorAll(\".downBtn\");\n  upBtns.forEach(function (element) {\n    element.addEventListener(\"click\", handleUpBtn);\n    element.classList.add(\"invalid\");\n  });\n  downBtns.forEach(function (element) {\n    element.addEventListener(\"click\", handleDownBtn);\n    element.classList.add(\"invalid\");\n  });\n}\n\nvar createController = function createController(MODE) {\n  if (MODE < 3) {\n    for (var i = 0; i < parseInt(MODE) + 3; i++) {\n      var dataItem = document.createElement(\"div\");\n      var upBtn = document.createElement(\"button\");\n      var upI = document.createElement(\"i\");\n      var downBtn = document.createElement(\"button\");\n      var downI = document.createElement(\"i\");\n      var dataDiv = document.createElement(\"div\");\n      var span = document.createElement(\"span\");\n      upBtn.classList.add(\"upBtn\");\n      upI.classList.add(\"fas\");\n      upI.classList.add(\"fa-angle-up\");\n      upBtn.appendChild(upI);\n      downBtn.classList.add(\"downBtn\");\n      downI.classList.add(\"fas\");\n      downI.classList.add(\"fa-angle-down\");\n      downBtn.appendChild(downI);\n      dataDiv.classList.add(\"dataDiv\");\n      span.innerText = \"0\";\n      span.classList.add(\"invalid\");\n      dataDiv.appendChild(span);\n      dataItem.classList.add(\"data__item\");\n      dataItem.appendChild(upBtn);\n      dataItem.appendChild(dataDiv);\n      dataItem.appendChild(downBtn);\n      dataSettingArea.appendChild(dataItem);\n    }\n\n    document.querySelector(\".attackBtn\").classList.add(\"invalid\");\n  }\n\n  handleController();\n};\n\n//# sourceURL=webpack:///./src/frontend/app/dataController.js?");

/***/ }),

/***/ "./src/frontend/app/login.js":
/*!***********************************!*\
  !*** ./src/frontend/app/login.js ***!
  \***********************************/
/*! exports provided: loginApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginApp\", function() { return loginApp; });\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ \"./src/frontend/app/socket.js\");\n/* harmony import */ var _dataController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataController */ \"./src/frontend/app/dataController.js\");\n\n\nvar login = document.querySelector(\".login\");\nvar room = document.querySelector(\".multiRoom\");\nvar loginForm = document.querySelector(\".login__form\");\nvar loginInput = loginForm.querySelector(\".login__input\");\nvar loginModes = document.querySelectorAll(\".modeBtn\");\nvar MODE;\n\nfunction handleLogin(event) {\n  // Prevent Event\n  event.preventDefault(); // Save in LocalStorage & Initialize Login Input & Handle Invisi\n\n  localStorage.setItem(\"nickname\", loginInput.value); // Run Application\n\n  Object(_dataController__WEBPACK_IMPORTED_MODULE_1__[\"createController\"])(MODE);\n  Object(_socket__WEBPACK_IMPORTED_MODULE_0__[\"socketApp\"])(MODE); // Invisi\n\n  loginInput.value = \"\";\n  handleInvisi();\n}\n\nfunction handleInvisi() {\n  login.classList.add(\"invisi\");\n  room.classList.remove(\"invisi\");\n}\n\nfunction handleMode() {\n  MODE = this.dataset.mode;\n  loginModes.forEach(function (element) {\n    if (element.classList.contains(\"checked\")) element.classList.remove(\"checked\");\n  });\n  this.classList.add(\"checked\");\n  localStorage.setItem(\"mode\", MODE);\n}\n\nvar loginApp = function loginApp() {\n  // Set EventListener\n  loginForm.addEventListener(\"submit\", handleLogin); // Get Nickname in LocalStorage\n\n  var NICKNAME = localStorage.getItem(\"nickname\");\n\n  if (NICKNAME !== null) {\n    loginInput.value = NICKNAME;\n  } // Set Mode\n\n\n  MODE = localStorage.getItem(\"mode\");\n\n  if (MODE === null) {\n    MODE = 0;\n  }\n\n  loginModes.forEach(function (element) {\n    if (element.dataset.mode == MODE) {\n      element.classList.add(\"checked\");\n    }\n\n    element.addEventListener(\"click\", handleMode);\n  });\n};\n\n//# sourceURL=webpack:///./src/frontend/app/login.js?");

/***/ }),

/***/ "./src/frontend/app/socket.js":
/*!************************************!*\
  !*** ./src/frontend/app/socket.js ***!
  \************************************/
/*! exports provided: socketApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socketApp\", function() { return socketApp; });\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat */ \"./src/frontend/app/chat.js\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/frontend/app/user.js\");\n/* harmony import */ var _dataController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataController */ \"./src/frontend/app/dataController.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-undef */\n\n\n\nvar socket;\nvar roomUsers = 1;\nvar attackMode = 0;\nvar myTurn = false;\nvar roomStart = false;\nvar gameStart = false;\nvar socketApp = function socketApp(MODE) {\n  switch (parseInt(MODE)) {\n    case 0:\n      socket = io(\"/easy\");\n      break;\n\n    default:\n      console.log(\"FUCK\", MODE);\n  } // Set Nickname\n\n\n  Nickname(); // Set Room\n\n  socket.emit(\"postRoom\"); // Join\n\n  socket.on(\"meJoin\", function (_ref) {\n    var nicknames = _ref.nicknames,\n        USER = _ref.USER,\n        IDs = _ref.IDs,\n        ROOM = _ref.ROOM;\n    console.log(socket.id);\n\n    for (var i = 2; i < USER + 1; i++) {\n      Object(_user__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"])(i, nicknames[i - 2], IDs[i - 2]);\n    }\n\n    socket.room = ROOM;\n    paintRoomName(parseInt(MODE), ROOM);\n    paintRoomStatus(USER);\n    paintUserNickname();\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Welcome to join this game\", \"system\", 0);\n  }); // Someone Join\n\n  socket.on(\"otherJoin\", function (_ref2) {\n    var nickname = _ref2.nickname,\n        USER = _ref2.USER,\n        ID = _ref2.ID;\n    Object(_user__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"])(USER, nickname, ID);\n    paintRoomStatus(USER);\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"[\".concat(nickname, \"] joined this game\"), \"system\", 0);\n  }); // Someone Leave\n\n  socket.on(\"getLeave\", function (_ref3) {\n    var nickname = _ref3.nickname,\n        USER = _ref3.USER,\n        clientDatas = _ref3.clientDatas,\n        clientIDs = _ref3.clientIDs;\n    Object(_user__WEBPACK_IMPORTED_MODULE_1__[\"deleteUser\"])();\n\n    var IDs = _toConsumableArray(clientIDs).filter(function (element) {\n      return element !== socket.id;\n    });\n\n    var nicknames = [];\n    IDs.forEach(function (ID) {\n      nicknames.push(clientDatas[ID]);\n    });\n\n    for (var i = 2; i < USER + 1; i++) {\n      Object(_user__WEBPACK_IMPORTED_MODULE_1__[\"createUser\"])(i, nicknames[i - 2], IDs[i - 2]);\n    }\n\n    paintRoomStatus(USER);\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"[\".concat(nickname, \"] leaved this game\"), \"system\", 0);\n  }); // Room Start\n\n  socket.on(\"getRoomStart\", function () {\n    roomStart = true;\n    var btn = document.querySelector(\".attackBtn\");\n\n    if (btn.classList.contains(\"readyBtn\")) {\n      btn.classList.remove(\"readyBtn\");\n    }\n\n    if (btn.classList.contains(\"ready\")) {\n      btn.classList.remove(\"ready\");\n    }\n\n    btn.innerHTML = \"<i class=\\\"fas fa-baseball-ball\\\"></i>\";\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Game Start\", \"system\", 0);\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Please set up your number\", \"system\", 0);\n    paintRoomStatus(roomUsers);\n  }); // Game Start\n\n  socket.on(\"getGameStart\", function () {\n    gameStart = true;\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"All player has set a number\", \"system\", 0);\n    paintRoomStatus(roomUsers);\n  }); // Get Turn\n\n  socket.on(\"getTurn\", function () {\n    myTurn = true;\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"It's your turn\", \"system\", 0);\n    socket.emit(\"postOtherTurn\", socket.id);\n    var userAreas = document.querySelectorAll(\".userArea\");\n    userAreas.forEach(function (element) {\n      if (element.classList.contains(\"turn\")) {\n        element.classList.remove(\"turn\");\n      }\n    });\n  });\n  socket.on(\"getOtherTurn\", function (ID) {\n    var userAreas = document.querySelectorAll(\".userArea\");\n    var userArea = document.querySelector(\".userArea[data-id=\\\"\".concat(ID, \"\\\"]\"));\n    userAreas.forEach(function (element) {\n      if (element.classList.contains(\"turn\")) {\n        element.classList.remove(\"turn\");\n      }\n    });\n    userArea.classList.add(\"turn\");\n  }); // Attacked\n\n  socket.on(\"getData\", function (_ref4) {\n    var dataArr = _ref4.dataArr,\n        nickname = _ref4.nickname;\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"[\".concat(dataArr, \"]\"), nickname, 0);\n    var DATA = Object(_dataController__WEBPACK_IMPORTED_MODULE_2__[\"checkingData\"])(dataArr, parseInt(MODE) + 3, socket.numData);\n    socket.emit(\"postChat\", {\n      chat: DATA\n    });\n    socket.emit(\"postCheckedData\", {\n      DATA: DATA,\n      dataArr: dataArr\n    });\n  }); // Attack\n\n  var attackBtn = document.querySelector(\".attackBtn\");\n  socket.ready = false;\n  attackBtn.addEventListener(\"click\", function () {\n    handleAttack(attackMode);\n  }); // Get Checked Data\n\n  socket.on(\"getCheckedData\", function (_ref5) {\n    var DATA = _ref5.DATA,\n        dataArr = _ref5.dataArr,\n        ID = _ref5.ID;\n    Object(_user__WEBPACK_IMPORTED_MODULE_1__[\"paintUserBoard\"])(DATA, dataArr, ID);\n  }); // Chat\n\n  socket.on(\"getChat\", function (_ref6) {\n    var chat = _ref6.chat,\n        nickname = _ref6.nickname;\n    Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(chat, nickname, 2);\n  });\n  Chat();\n}; // Set Nickname\n\nfunction Nickname() {\n  var nickname = localStorage.getItem(\"nickname\");\n  socket.emit(\"postNickname\", {\n    nickname: nickname\n  });\n  socket.nickname = nickname;\n} // Room Title\n\n\nfunction paintRoomName(MODE, ROOM) {\n  var roomMode;\n  var roomName = document.querySelector(\".title--info .roomName\");\n\n  switch (MODE) {\n    case 0:\n      roomMode = \"Easy\";\n      break;\n\n    case 1:\n      roomMode = \"Normal\";\n      break;\n\n    case 2:\n      roomMode = \"Hard\";\n      break;\n  }\n\n  roomName.innerText = \"\".concat(roomMode, \" | \").concat(ROOM);\n}\n\nfunction paintRoomStatus(USER) {\n  var roomStatus = document.querySelector(\".title--info .roomStatus\");\n\n  if (roomStart === true) {\n    if (gameStart === true) {\n      roomStatus.innerText = \"Game has been started\";\n    } else {\n      roomStatus.innerText = \"Game has been started (The player is setting a number)\";\n    }\n  } else {\n    roomStatus.innerText = \"Waiting for another player (\".concat(USER, \"/4)\");\n  }\n\n  roomUsers = USER;\n}\n\nfunction paintUserNickname() {\n  var userNickname = document.querySelector(\".title--nickname .userNickname\");\n  userNickname.innerText = socket.nickname;\n}\n\nfunction paintUserNumber() {\n  var userNumber = document.querySelector(\".title--nickname .userNumber\");\n  var numData = socket.numData.join(\"\");\n  userNumber.innerText = \"| \".concat(numData);\n} // Attack\n\n\nfunction handleAttack(mode) {\n  var datas = document.querySelectorAll(\".dataDiv>span\");\n  var dataArr = [];\n  var valid = true; // Validate Data\n\n  datas.forEach(function (element) {\n    return dataArr.push(parseInt(element.innerText));\n  });\n  dataArr.forEach(function (element) {\n    if (dataArr.filter(function (i) {\n      return i !== element;\n    }).length === dataArr.length - 1) {\n      valid == true ? valid = true : valid = false;\n    } else {\n      valid = false;\n    }\n  }); // Attack MODE\n\n  if (roomStart === true) {\n    if (valid === false) {\n      Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Invalid Value\", \"system\", 3);\n    } else {\n      if (mode === 0) {\n        socket.numData = dataArr;\n        socket.emit(\"postSetDataDone\");\n        Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Your number has been set up successfully\", \"system\", 0);\n        paintUserNumber();\n        attackMode = 1;\n      } else {\n        if (gameStart === true) {\n          if (myTurn === true) {\n            Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"[\".concat(dataArr, \"]\"), socket.nickname, 1);\n            socket.emit(\"postData\", {\n              dataArr: dataArr,\n              nickname: socket.nickname,\n              ID: socket.id\n            });\n            myTurn = false;\n          } else {\n            Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"It's not your turn\", \"system\", 3);\n          }\n        } else {\n          Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"paintChat\"])(\"Someone didn't set number yet\", \"system\", 3);\n        }\n      }\n    }\n  } else {\n    var btn = document.querySelector(\".attackBtn\");\n\n    if (socket.ready === false) {\n      socket.emit(\"ready\");\n      socket.ready = true;\n\n      if (!btn.classList.contains(\"ready\")) {\n        btn.classList.add(\"ready\");\n      }\n    } else {\n      socket.emit(\"notReady\");\n      socket.ready = false;\n\n      if (btn.classList.contains(\"ready\")) {\n        btn.classList.remove(\"ready\");\n      }\n    }\n  }\n} // Chat\n\n\nfunction handleChat() {\n  var chatInput = document.getElementById(\"chatInput\");\n  var value = chatInput.value;\n  socket.emit(\"postChat\", {\n    chat: value\n  });\n  chatInput.value = \"\";\n}\n\nfunction Chat() {\n  var _socket = socket,\n      nickname = _socket.nickname;\n  Object(_chat__WEBPACK_IMPORTED_MODULE_0__[\"chatApp\"])(nickname);\n  var chatForm = document.getElementById(\"chatForm\");\n  chatForm.addEventListener(\"submit\", function () {\n    handleChat();\n  });\n}\n\n//# sourceURL=webpack:///./src/frontend/app/socket.js?");

/***/ }),

/***/ "./src/frontend/app/user.js":
/*!**********************************!*\
  !*** ./src/frontend/app/user.js ***!
  \**********************************/
/*! exports provided: createUser, deleteUser, paintUserBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createUser\", function() { return createUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteUser\", function() { return deleteUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"paintUserBoard\", function() { return paintUserBoard; });\nvar createUser = function createUser(users, NICKNAME, ID) {\n  var userArea = document.createElement(\"div\");\n  var title = document.createElement(\"div\");\n  var nickname = document.createElement(\"div\");\n  var nicknameSpan = document.createElement(\"span\");\n  var avatar = document.createElement(\"div\");\n  var board = document.createElement(\"div\");\n  var ul = document.createElement(\"ul\");\n  userArea.classList.add(\"userArea\");\n  userArea.classList.add(\"user\".concat(users - 1));\n  userArea.setAttribute(\"data-id\", ID);\n  title.classList.add(\"user__title\");\n  nickname.classList.add(\"user__nickname\");\n  nicknameSpan.classList.add(\"user__nickname-span\");\n  avatar.classList.add(\"user__avatar\");\n  board.classList.add(\"user__board\");\n  ul.classList.add(\"user__board-ul\");\n  nicknameSpan.innerText = NICKNAME;\n  nickname.appendChild(nicknameSpan);\n  title.appendChild(nickname);\n  title.appendChild(avatar);\n  board.appendChild(ul);\n  userArea.appendChild(title);\n  userArea.appendChild(board);\n\n  if (users < 4) {\n    var nav1 = document.querySelector(\".nav1\");\n    nav1.appendChild(userArea);\n  } else {\n    var nav2 = document.querySelector(\".nav2\");\n    var chat = nav2.querySelector(\".chat\");\n    nav2.insertBefore(userArea, chat);\n  }\n};\nvar deleteUser = function deleteUser() {\n  var userAreas = document.querySelectorAll(\".userArea\");\n  userAreas.forEach(function (element) {\n    return element.remove();\n  });\n};\nvar paintUserBoard = function paintUserBoard(DATA, dataArr, ID) {\n  var userArea = document.querySelector(\".userArea[data-id=\\\"\".concat(ID, \"\\\"]\"));\n  var userBoardUl = userArea.lastChild.firstChild;\n  var li = document.createElement(\"li\");\n  var numSpan = document.createElement(\"span\");\n  var dataSpan = document.createElement(\"span\");\n  numSpan.innerText = dataArr.join(\"\");\n  dataSpan.innerText = DATA;\n  li.appendChild(numSpan);\n  li.appendChild(dataSpan);\n  userBoardUl.appendChild(li);\n};\n\n//# sourceURL=webpack:///./src/frontend/app/user.js?");

/***/ }),

/***/ "./src/frontend/index.js":
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/login */ \"./src/frontend/app/login.js\");\n\nObject(_app_login__WEBPACK_IMPORTED_MODULE_0__[\"loginApp\"])();\n\n//# sourceURL=webpack:///./src/frontend/index.js?");

/***/ })

/******/ });