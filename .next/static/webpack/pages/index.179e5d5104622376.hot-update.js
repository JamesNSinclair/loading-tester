"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeContext */ \"./src/ThemeContext.js\");\n\n\n\n\nvar _this = undefined;\nvar toggleSignUp = (0,_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useUpdateConfigContext)();\nvar SpeakerDetail = function(param) {\n    var id = param.id, firstName = param.firstName, lastName = param.lastName, favorite = param.favorite, bio = param.bio, onHeartFavoriteHandler = param.onHeartFavoriteHandler;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card col-4 cardmin\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"card-img-top\",\n                bwImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n                colImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n                alt: \"\".concat(firstName, \"  \").concat(lastName)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"card-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-sessionid\": id,\n                                className: favorite ? 'heartredbutton' : 'heartdarkbutton',\n                                onClick: function(e) {\n                                    onHeartFavoriteHandler(e, !favorite);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    firstName,\n                                    \" \",\n                                    lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"nav-link\",\n                        onClick: function(e) {\n                            e.preventDefault(), toggleSignUp('showSignMeUp');\n                        },\n                        children: \"Hide/Display Speaker Days\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_c = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRldGFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUM4QjtBQUNGOztBQUdyRCxHQUFLLENBQUNHLFlBQVksR0FBR0QscUVBQXNCO0FBQzNDLEdBQUssQ0FBQ0UsYUFBYSxHQUFHLFFBQ2xCLFFBTUUsQ0FBQztRQU5MQyxFQUFFLFNBQUZBLEVBQUUsRUFDRkMsU0FBUyxTQUFUQSxTQUFTLEVBQ1RDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsR0FBRyxTQUFIQSxHQUFHLEVBQ0hDLHNCQUFzQixTQUF0QkEsc0JBQXNCO0lBRXRCLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQW9COzt3RkFDaENYLDREQUFtQjtnQkFDbEJXLFNBQVMsRUFBQyxDQUFjO2dCQUN4QkMsS0FBSyxFQUFHLENBQTRCLDhCQUFLLE1BQUksQ0FBUFIsRUFBRSxFQUFDLENBQUk7Z0JBQzdDUyxNQUFNLEVBQUcsQ0FBeUIsMkJBQUssTUFBSSxDQUFQVCxFQUFFLEVBQUMsQ0FBSTtnQkFDM0NVLEdBQUcsRUFBRyxHQUFnQlIsTUFBUSxDQUF0QkQsU0FBUyxFQUFDLENBQUUsS0FBVyxPQUFUQyxRQUFROzs7Ozs7d0ZBRS9CSSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBVzs7Z0dBQ3ZCSSxDQUFFO3dCQUFDSixTQUFTLEVBQUMsQ0FBWTs7d0dBQ3ZCSyxDQUFNO2dDQUNMQyxDQUFjLGlCQUFFYixFQUFFO2dDQUNsQk8sU0FBUyxFQUFFSixRQUFRLEdBQUcsQ0FBZ0Isa0JBQUcsQ0FBaUI7Z0NBQzFEVyxPQUFPLEVBQUUsUUFBUSxDQUFQQyxDQUFDLEVBQUssQ0FBQztvQ0FDZlYsc0JBQXNCLENBQUNVLENBQUMsR0FBR1osUUFBUTtnQ0FDckMsQ0FBQzs7Ozs7O3dHQUVGYSxDQUFJOztvQ0FDRmYsU0FBUztvQ0FBQyxDQUFDO29DQUFDQyxRQUFROzs7Ozs7Ozs7Ozs7O2dHQUlsQmUsQ0FBQzt3QkFBQ1YsU0FBUyxFQUFDLENBQVU7d0JBQUNPLE9BQU8sRUFBRSxRQUFRQyxDQUFQQSxDQUFDLEVBQUssQ0FBQ0E7NEJBQUFBLENBQUMsQ0FBQ0csY0FBYyxJQUFJcEIsWUFBWSxDQUFDLENBQWM7d0JBQUUsQ0FBQztrQ0FBRSxDQUF5Qjs7Ozs7O2dHQUUzSGtCLENBQUk7a0NBQUVaLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO0tBcENLTCxhQUFhO0FBc0NuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2VyRGV0YWlsLmpzPzNmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlVG9nZ2xlT25TY3JvbGwgZnJvbSAnLi9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcclxuaW1wb3J0IHt1c2VVcGRhdGVDb25maWdDb250ZXh0fSBmcm9tIFwiLi9UaGVtZUNvbnRleHRcIjtcclxuXHJcblxyXG5jb25zdCB0b2dnbGVTaWduVXAgPSB1c2VVcGRhdGVDb25maWdDb250ZXh0KClcclxuY29uc3QgU3BlYWtlckRldGFpbCA9ICh7XHJcbiAgaWQsXHJcbiAgZmlyc3ROYW1lLFxyXG4gIGxhc3ROYW1lLFxyXG4gIGZhdm9yaXRlLFxyXG4gIGJpbyxcclxuICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjb2wtNCBjYXJkbWluXCI+XHJcbiAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcclxuICAgICAgICBid0ltZz17YC9zdGF0aWMvc3BlYWtlcnMvYncvU3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgIGNvbEltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgIGFsdD17YCR7Zmlyc3ROYW1lfSAgJHtsYXN0TmFtZX1gfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGRhdGEtc2Vzc2lvbmlkPXtpZH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtmYXZvcml0ZSA/ICdoZWFydHJlZGJ1dHRvbicgOiAnaGVhcnRkYXJrYnV0dG9uJ31cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICBvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyKGUsICFmYXZvcml0ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtmaXJzdE5hbWV9IHtsYXN0TmFtZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2g0PlxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBvbkNsaWNrPXsoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKSwgdG9nZ2xlU2lnblVwKCdzaG93U2lnbk1lVXAnKTt9fT5IaWRlL0Rpc3BsYXkgU3BlYWtlciBEYXlzPC9hPlxyXG4gICAgICAgICBcclxuICAgICAgICA8c3Bhbj57YmlvfTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2VUb2dnbGVPblNjcm9sbCIsInVzZVVwZGF0ZUNvbmZpZ0NvbnRleHQiLCJ0b2dnbGVTaWduVXAiLCJTcGVha2VyRGV0YWlsIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZhdm9yaXRlIiwiYmlvIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsImJ3SW1nIiwiY29sSW1nIiwiYWx0IiwiaDQiLCJidXR0b24iLCJkYXRhLXNlc3Npb25pZCIsIm9uQ2xpY2siLCJlIiwic3BhbiIsImEiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n");

/***/ })

});