"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/container/AppContainer/WebSocketContainer/index.tsx":
/*!****************************************************************************!*\
  !*** ./src/components/container/AppContainer/WebSocketContainer/index.tsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use_websocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-use-websocket */ \"./node_modules/react-use-websocket/dist/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/data */ \"./src/data/index.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar WebSocketContainer = function WebSocketContainer() {\n  _s();\n\n  var _useGameLog = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useGameLog)(),\n      _useGameLog2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useGameLog, 2),\n      gameLog = _useGameLog2[0],\n      setGameLog = _useGameLog2[1];\n\n  var _useGameState = (0,_data__WEBPACK_IMPORTED_MODULE_4__.useGameState)(),\n      _useGameState2 = (0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useGameState, 2),\n      setGameState = _useGameState2[1];\n\n  var socketUrl = \"ws://127.0.0.1:8765/\";\n\n  var _useWebSocket = (0,react_use_websocket__WEBPACK_IMPORTED_MODULE_3__.default)(socketUrl, {\n    reconnectAttempts: Infinity,\n    reconnectInterval: 1000 * 10\n  }),\n      lastMessage = _useWebSocket.lastMessage,\n      readyState = _useWebSocket.readyState;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (readyState === react_use_websocket__WEBPACK_IMPORTED_MODULE_3__.ReadyState.OPEN) {\n      fetch('/getState').then(function (res) {\n        console.log(res);\n      });\n    }\n  }, [readyState]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (lastMessage) {\n      var reader = new FileReader();\n\n      reader.onload = function (e) {\n        if (e.target && e.target.readyState === 2) {\n          var enc = new TextDecoder('utf-8');\n          var res = JSON.parse(enc.decode(new Uint8Array(e.target.result)));\n\n          if (res.type === 'update-state') {\n            setGameState(res.data);\n          }\n\n          if (res.type === 'push-log-message') {\n            setGameLog([[res.time, res.data]].concat((0,_Users_snyssss_WFHelper_UI_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(gameLog || [])));\n          }\n        }\n      };\n\n      reader.readAsArrayBuffer(lastMessage.data);\n    }\n  }, [lastMessage]);\n  return null;\n};\n\n_s(WebSocketContainer, \"BQ/KZb1OQiwIzjNUWhFWAPZvRzA=\", false, function () {\n  return [_data__WEBPACK_IMPORTED_MODULE_4__.useGameLog, _data__WEBPACK_IMPORTED_MODULE_4__.useGameState, react_use_websocket__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = WebSocketContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebSocketContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"WebSocketContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250YWluZXIvQXBwQ29udGFpbmVyL1dlYlNvY2tldENvbnRhaW5lci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFDL0Isb0JBQThCRixpREFBVSxFQUF4QztBQUFBO0FBQUEsTUFBT0csT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFDQSxzQkFBeUJILG1EQUFZLEVBQXJDO0FBQUE7QUFBQSxNQUFTSSxZQUFUOztBQUVBLE1BQU1DLFNBQVMseUJBQWY7O0FBRUEsc0JBQW9DUiw0REFBWSxDQUFDUSxTQUFELEVBQVk7QUFDMURDLElBQUFBLGlCQUFpQixFQUFFQyxRQUR1QztBQUUxREMsSUFBQUEsaUJBQWlCLEVBQUUsT0FBTztBQUZnQyxHQUFaLENBQWhEO0FBQUEsTUFBUUMsV0FBUixpQkFBUUEsV0FBUjtBQUFBLE1BQXFCQyxVQUFyQixpQkFBcUJBLFVBQXJCOztBQUtBZCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYyxVQUFVLEtBQUtaLGdFQUFuQixFQUFvQztBQUNsQ2MsTUFBQUEsS0FBSyxDQUFDLFdBQUQsQ0FBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBTlEsRUFNTixDQUFDSixVQUFELENBTk0sQ0FBVDtBQVFBZCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJYSxXQUFKLEVBQWlCO0FBQ2YsVUFBTVEsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBZjs7QUFFQUQsTUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQUNDLENBQUQsRUFBTztBQUNyQixZQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNYLFVBQVQsS0FBd0IsQ0FBeEMsRUFBMkM7QUFDekMsY0FBTVksR0FBRyxHQUFHLElBQUlDLFdBQUosQ0FBZ0IsT0FBaEIsQ0FBWjtBQUVBLGNBQU1ULEdBQUcsR0FBR1UsSUFBSSxDQUFDQyxLQUFMLENBQ1ZILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLElBQUlDLFVBQUosQ0FBZVAsQ0FBQyxDQUFDQyxNQUFGLENBQVNPLE1BQXhCLENBQVgsQ0FEVSxDQUFaOztBQUlBLGNBQUlkLEdBQUcsQ0FBQ2UsSUFBSixLQUFhLGNBQWpCLEVBQWlDO0FBQy9CekIsWUFBQUEsWUFBWSxDQUFDVSxHQUFHLENBQUNnQixJQUFMLENBQVo7QUFDRDs7QUFFRCxjQUFJaEIsR0FBRyxDQUFDZSxJQUFKLEtBQWEsa0JBQWpCLEVBQXFDO0FBQ25DMUIsWUFBQUEsVUFBVSxFQUFFLENBQUNXLEdBQUcsQ0FBQ2lCLElBQUwsRUFBV2pCLEdBQUcsQ0FBQ2dCLElBQWYsQ0FBRix3SkFBNEI1QixPQUFPLElBQUksRUFBdkMsR0FBVjtBQUNEO0FBQ0Y7QUFDRixPQWhCRDs7QUFrQkFlLE1BQUFBLE1BQU0sQ0FBQ2UsaUJBQVAsQ0FBeUJ2QixXQUFXLENBQUNxQixJQUFyQztBQUNEO0FBQ0YsR0F4QlEsRUF3Qk4sQ0FBQ3JCLFdBQUQsQ0F4Qk0sQ0FBVDtBQTBCQSxTQUFPLElBQVA7QUFDRCxDQTlDRDs7R0FBTVI7VUFDMEJGLCtDQUNMQyxpREFJV0g7OztLQU5oQ0k7QUFnRE4sK0RBQWVBLGtCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lci9BcHBDb250YWluZXIvV2ViU29ja2V0Q29udGFpbmVyL2luZGV4LnRzeD9mNjU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VXZWJTb2NrZXQsIHsgUmVhZHlTdGF0ZSB9IGZyb20gJ3JlYWN0LXVzZS13ZWJzb2NrZXQnO1xuXG5pbXBvcnQgeyB1c2VHYW1lTG9nLCB1c2VHYW1lU3RhdGUgfSBmcm9tICd+L2RhdGEnO1xuXG5jb25zdCBXZWJTb2NrZXRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtnYW1lTG9nLCBzZXRHYW1lTG9nXSA9IHVzZUdhbWVMb2coKTtcbiAgY29uc3QgWywgc2V0R2FtZVN0YXRlXSA9IHVzZUdhbWVTdGF0ZSgpO1xuXG4gIGNvbnN0IHNvY2tldFVybCA9IGB3czovLzEyNy4wLjAuMTo4NzY1L2A7XG5cbiAgY29uc3QgeyBsYXN0TWVzc2FnZSwgcmVhZHlTdGF0ZSB9ID0gdXNlV2ViU29ja2V0KHNvY2tldFVybCwge1xuICAgIHJlY29ubmVjdEF0dGVtcHRzOiBJbmZpbml0eSxcbiAgICByZWNvbm5lY3RJbnRlcnZhbDogMTAwMCAqIDEwLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZWFkeVN0YXRlID09PSBSZWFkeVN0YXRlLk9QRU4pIHtcbiAgICAgIGZldGNoKCcvZ2V0U3RhdGUnKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3JlYWR5U3RhdGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChsYXN0TWVzc2FnZSkge1xuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgcmVhZGVyLm9ubG9hZCA9IChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgY29uc3QgZW5jID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcpO1xuXG4gICAgICAgICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIGVuYy5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoZS50YXJnZXQucmVzdWx0IGFzIEFycmF5QnVmZmVyKSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlcy50eXBlID09PSAndXBkYXRlLXN0YXRlJykge1xuICAgICAgICAgICAgc2V0R2FtZVN0YXRlKHJlcy5kYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdwdXNoLWxvZy1tZXNzYWdlJykge1xuICAgICAgICAgICAgc2V0R2FtZUxvZyhbW3Jlcy50aW1lLCByZXMuZGF0YV0sIC4uLihnYW1lTG9nIHx8IFtdKV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGxhc3RNZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfSwgW2xhc3RNZXNzYWdlXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJTb2NrZXRDb250YWluZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlV2ViU29ja2V0IiwiUmVhZHlTdGF0ZSIsInVzZUdhbWVMb2ciLCJ1c2VHYW1lU3RhdGUiLCJXZWJTb2NrZXRDb250YWluZXIiLCJnYW1lTG9nIiwic2V0R2FtZUxvZyIsInNldEdhbWVTdGF0ZSIsInNvY2tldFVybCIsInJlY29ubmVjdEF0dGVtcHRzIiwiSW5maW5pdHkiLCJyZWNvbm5lY3RJbnRlcnZhbCIsImxhc3RNZXNzYWdlIiwicmVhZHlTdGF0ZSIsIk9QRU4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImUiLCJ0YXJnZXQiLCJlbmMiLCJUZXh0RGVjb2RlciIsIkpTT04iLCJwYXJzZSIsImRlY29kZSIsIlVpbnQ4QXJyYXkiLCJyZXN1bHQiLCJ0eXBlIiwiZGF0YSIsInRpbWUiLCJyZWFkQXNBcnJheUJ1ZmZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/container/AppContainer/WebSocketContainer/index.tsx\n");

/***/ })

});