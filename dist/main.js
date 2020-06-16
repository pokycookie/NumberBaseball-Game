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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backend/index.js":
/*!******************************!*\
  !*** ./src/backend/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _frontend_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../frontend/styles/main.scss */ \"./src/frontend/styles/main.scss\");\n/* harmony import */ var _frontend_styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_frontend_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_3___default.a.config();\nvar PORT = process.env.PORT;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.set(\"view engine\", \"pug\");\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(\"src\", \"frontend\", \"templates\"));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()(\"dev\"));\napp.use(\"/dist\", express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(\"dist\")));\napp.get(\"/\", function (req, res) {\n  res.render(\"main.pug\", {\n    FONTAWESOME: process.env.FONTAWESOME\n  });\n});\nvar server = app.listen(PORT, function () {\n  return console.log(\"Listening on http://localhost:\".concat(PORT));\n});\nvar io = socket_io__WEBPACK_IMPORTED_MODULE_1___default.a.listen(server);\nvar easySpace = io.of(\"/easy\");\neasySpace.room = {}; // Easy Space\n\neasySpace.on(\"connection\", function (socket) {\n  socket.settedData = false;\n  socket.lose = false; // Set Nickname\n\n  socket.on(\"postNickname\", function (_ref) {\n    var nickname = _ref.nickname;\n    socket.nickname = nickname;\n  }); // Set Room & Join\n\n  socket.on(\"postRoom\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var ROOM, clientIDs, clientNicknames, getClients, _getClients, USER;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _getClients = function _getClients3() {\n              _getClients = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                var CLIENTS;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return io.of(\"/easy\")[\"in\"](ROOM).clients(function (err, clients) {\n                          clientIDs = _toConsumableArray(clients);\n                        });\n\n                      case 2:\n                        CLIENTS = _context.sent;\n                        clientIDs.forEach(function (ID) {\n                          clientNicknames.push(CLIENTS.sockets[ID].nickname);\n                        });\n\n                        if (!(ROOM in easySpace.room)) {\n                          console.log(\"create Object\");\n                          easySpace.room[ROOM] = {\n                            roomStart: false,\n                            gameStart: false,\n                            users: 0,\n                            settedData: 0,\n                            ready: 0\n                          };\n                        }\n\n                        if (clientIDs.length >= 4 || easySpace.room[ROOM].roomStart === true) {\n                          console.log(\"can't enter room\", ROOM);\n                          ROOM += 1;\n                          clientIDs = [];\n                          clientNicknames = [];\n                          getClients();\n                        }\n\n                      case 6:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n              return _getClients.apply(this, arguments);\n            };\n\n            getClients = function _getClients2() {\n              return _getClients.apply(this, arguments);\n            };\n\n            ROOM = 1;\n            clientIDs = [];\n            clientNicknames = [];\n            _context2.next = 7;\n            return getClients();\n\n          case 7:\n            USER = clientIDs.length + 1;\n            socket.join(ROOM);\n            socket.room = ROOM;\n            socket.to(socket.room).broadcast.emit(\"otherJoin\", {\n              nickname: socket.nickname,\n              USER: USER,\n              ID: socket.id\n            });\n            socket.emit(\"meJoin\", {\n              nicknames: clientNicknames,\n              USER: USER,\n              IDs: clientIDs,\n              ROOM: ROOM\n            });\n            easySpace.room[socket.room].users += 1;\n\n            if (USER === 4) {\n              socket.emit(\"getRoomStart\");\n              socket.to(socket.room).broadcast.emit(\"getRoomStart\");\n              easySpace.room[socket.room].roomStart = true;\n              easySpace.room[socket.room].users = 4;\n            }\n\n            console.log(easySpace.room);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }))); // Disconnecting\n\n  socket.on(\"disconnecting\", function () {\n    try {\n      if (easySpace.room[socket.room].gameStart === true) {\n        io.of(\"/easy\")[\"in\"](socket.room).clients(function (err, clients) {\n          if (clients.length > 1) {\n            console.log(\"I will LEAVE!!!\");\n            var nextID = clients[clients.findIndex(function (element) {\n              return element === socket.id;\n            }) + 1];\n\n            if (typeof nextID === \"undefined\") {\n              nextID = clients[0];\n            }\n\n            io.of(\"/easy\").connected[nextID].emit(\"getTurn\");\n          }\n        });\n      }\n    } catch (error) {\n      console.log(error);\n    }\n  }); // Disconnect\n\n  socket.on(\"disconnect\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var ROOM, clientIDs, clientDatas, CLIENTS, USER;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            ROOM = socket.room;\n            clientIDs = [];\n            clientDatas = {};\n            _context3.next = 5;\n            return io.of(\"/easy\")[\"in\"](ROOM).clients(function (err, clients) {\n              clientIDs = _toConsumableArray(clients);\n            });\n\n          case 5:\n            CLIENTS = _context3.sent;\n            clientIDs.forEach(function (ID) {\n              clientDatas[ID] = CLIENTS.sockets[ID].nickname;\n            });\n\n            try {\n              if (socket.settedData === true) {\n                easySpace.room[socket.room].settedData -= 1;\n              }\n\n              easySpace.room[socket.room].users -= 1;\n\n              if (easySpace.room[socket.room].users === 0) {\n                easySpace.room[socket.room] = {\n                  roomStart: false,\n                  gameStart: false,\n                  users: 0,\n                  settedData: 0,\n                  ready: 0\n                };\n              }\n            } catch (error) {\n              console.log(error);\n            }\n\n            console.log(easySpace.room);\n            USER = clientIDs.length;\n            socket.to(ROOM).broadcast.emit(\"getLeave\", {\n              nickname: socket.nickname,\n              USER: USER,\n              clientDatas: clientDatas,\n              clientIDs: clientIDs\n            });\n\n            if (easySpace.room[socket.room].settedData === easySpace.room[socket.room].users && easySpace.room[socket.room].gameStart === false) {\n              startGame();\n            }\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }))); // User Ready\n\n  socket.on(\"ready\", function () {\n    easySpace.room[socket.room].ready += 1;\n\n    if (easySpace.room[socket.room].ready > 4) {\n      easySpace.room[socket.room].ready = 4;\n    }\n\n    if (easySpace.room[socket.room].users >= 2) {\n      if (easySpace.room[socket.room].ready === easySpace.room[socket.room].users) {\n        socket.emit(\"getRoomStart\");\n        socket.to(socket.room).broadcast.emit(\"getRoomStart\");\n        easySpace.room[socket.room].roomStart = true;\n      }\n    }\n\n    console.log(easySpace.room);\n  });\n  socket.on(\"notReady\", function () {\n    easySpace.room[socket.room].ready -= 1;\n\n    if (easySpace.room[socket.room].ready < 0) {\n      easySpace.room[socket.room].ready = 0;\n    }\n\n    console.log(easySpace.room);\n  }); // User Set Data\n\n  socket.on(\"postSetDataDone\", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            easySpace.room[socket.room].settedData += 1;\n            socket.settedData = true;\n\n            if (easySpace.room[socket.room].settedData === easySpace.room[socket.room].users) {\n              startGame();\n            }\n\n            console.log(easySpace.room);\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }))); // Start Game\n\n  function startGame() {\n    easySpace.room[socket.room].gameStart = true;\n    socket.emit(\"getGameStart\");\n    socket.to(socket.room).broadcast.emit(\"getGameStart\");\n    io.of(\"/easy\")[\"in\"](socket.room).clients(function (err, clients) {\n      if (clients.length > 0) {\n        io.of(\"/easy\").connected[clients[0]].emit(\"getTurn\");\n      }\n    });\n  } // Turn\n\n\n  socket.on(\"postOtherTurn\", function (ID) {\n    socket.to(socket.room).broadcast.emit(\"getOtherTurn\", ID);\n  }); // Chat Broadcast\n\n  socket.on(\"postChat\", function (_ref5) {\n    var chat = _ref5.chat;\n    socket.to(socket.room).broadcast.emit(\"getChat\", {\n      chat: chat,\n      nickname: socket.nickname\n    });\n  }); // Data Broadcast\n\n  socket.on(\"postData\", function (_ref6) {\n    var dataArr = _ref6.dataArr,\n        nickname = _ref6.nickname,\n        ID = _ref6.ID;\n    socket.to(socket.room).broadcast.emit(\"getData\", {\n      dataArr: dataArr,\n      nickname: nickname\n    });\n\n    try {\n      io.of(\"/easy\")[\"in\"](socket.room).clients(function (err, clients) {\n        if (clients.length > 0) {\n          var nextID = clients[clients.findIndex(function (element) {\n            return element === ID;\n          }) + 1];\n\n          if (typeof nextID === \"undefined\") {\n            nextID = clients[0];\n          }\n\n          io.of(\"/easy\").connected[nextID].emit(\"getTurn\");\n        }\n      });\n    } catch (error) {\n      console.log(error);\n    }\n  }); // Checked Data Broadcast\n\n  socket.on(\"postCheckedData\", function (_ref7) {\n    var DATA = _ref7.DATA,\n        dataArr = _ref7.dataArr;\n    socket.to(socket.room).broadcast.emit(\"getCheckedData\", {\n      DATA: DATA,\n      dataArr: dataArr,\n      ID: socket.id\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/backend/index.js?");

/***/ }),

/***/ "./src/frontend/styles/main.scss":
/*!***************************************!*\
  !*** ./src/frontend/styles/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/frontend/styles/main.scss?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi @babel/polyfill ./src/backend/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/backend/index.js */\"./src/backend/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/backend/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });