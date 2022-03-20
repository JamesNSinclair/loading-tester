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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\n\n\n\nvar _this = undefined;\nvar SpeakerDetail = function(param) {\n    var id = param.id, firstName = param.firstName, lastName = param.lastName, favorite = param.favorite, bio = param.bio, onHeartFavoriteHandler = param.onHeartFavoriteHandler;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"card col-4 cardmin\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"card-img-top\",\n                bwImg: \"/static/speakers/bw/Speaker-\".concat(id, \".jpg\"),\n                colImg: \"/static/speakers/Speaker-\".concat(id, \".jpg\"),\n                alt: \"\".concat(firstName, \"  \").concat(lastName)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-body\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"card-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                \"data-sessionid\": id,\n                                className: favorite ? 'heartredbutton' : 'heartdarkbutton',\n                                onClick: function(e) {\n                                    onHeartFavoriteHandler(e, !favorite);\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    firstName,\n                                    \" \",\n                                    lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"nav-link\",\n                        onClick: function(e) {\n                            e.preventDefault(), toggleSignUp('showSignMeUp');\n                        },\n                        children: \"Hide/Display Speaker Days\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: bio\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDetail.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_c = SpeakerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDetail);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRldGFpbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQzhCOztBQUd2RCxHQUFLLENBQUNFLGFBQWEsR0FBRyxRQUNsQixRQU1FLENBQUM7UUFOTEMsRUFBRSxTQUFGQSxFQUFFLEVBQ0ZDLFNBQVMsU0FBVEEsU0FBUyxFQUNUQyxRQUFRLFNBQVJBLFFBQVEsRUFDUkMsUUFBUSxTQUFSQSxRQUFRLEVBQ1JDLEdBQUcsU0FBSEEsR0FBRyxFQUNIQyxzQkFBc0IsU0FBdEJBLHNCQUFzQjtJQUV0QixNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFvQjs7d0ZBQ2hDVCw0REFBbUI7Z0JBQ2xCUyxTQUFTLEVBQUMsQ0FBYztnQkFDeEJDLEtBQUssRUFBRyxDQUE0Qiw4QkFBSyxNQUFJLENBQVBSLEVBQUUsRUFBQyxDQUFJO2dCQUM3Q1MsTUFBTSxFQUFHLENBQXlCLDJCQUFLLE1BQUksQ0FBUFQsRUFBRSxFQUFDLENBQUk7Z0JBQzNDVSxHQUFHLEVBQUcsR0FBZ0JSLE1BQVEsQ0FBdEJELFNBQVMsRUFBQyxDQUFFLEtBQVcsT0FBVEMsUUFBUTs7Ozs7O3dGQUUvQkksQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7O2dHQUN2QkksQ0FBRTt3QkFBQ0osU0FBUyxFQUFDLENBQVk7O3dHQUN2QkssQ0FBTTtnQ0FDTEMsQ0FBYyxpQkFBRWIsRUFBRTtnQ0FDbEJPLFNBQVMsRUFBRUosUUFBUSxHQUFHLENBQWdCLGtCQUFHLENBQWlCO2dDQUMxRFcsT0FBTyxFQUFFLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7b0NBQ2ZWLHNCQUFzQixDQUFDVSxDQUFDLEdBQUdaLFFBQVE7Z0NBQ3JDLENBQUM7Ozs7Ozt3R0FFRmEsQ0FBSTs7b0NBQ0ZmLFNBQVM7b0NBQUMsQ0FBQztvQ0FBQ0MsUUFBUTs7Ozs7Ozs7Ozs7OztnR0FJbEJlLENBQUM7d0JBQUNWLFNBQVMsRUFBQyxDQUFVO3dCQUFDTyxPQUFPLEVBQUUsUUFBUUMsQ0FBUEEsQ0FBQyxFQUFLLENBQUNBOzRCQUFBQSxDQUFDLENBQUNHLGNBQWMsSUFBSUMsWUFBWSxDQUFDLENBQWM7d0JBQUUsQ0FBQztrQ0FBRSxDQUF5Qjs7Ozs7O2dHQUUzSEgsQ0FBSTtrQ0FBRVosR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCLENBQUM7S0FwQ0tMLGFBQWE7QUFzQ25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEZXRhaWwuanM/M2Y3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2VUb2dnbGVPblNjcm9sbCBmcm9tICcuL0ltYWdlVG9nZ2xlT25TY3JvbGwnO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJEZXRhaWwgPSAoe1xyXG4gIGlkLFxyXG4gIGZpcnN0TmFtZSxcclxuICBsYXN0TmFtZSxcclxuICBmYXZvcml0ZSxcclxuICBiaW8sXHJcbiAgb25IZWFydEZhdm9yaXRlSGFuZGxlcixcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY29sLTQgY2FyZG1pblwiPlxyXG4gICAgICA8SW1hZ2VUb2dnbGVPblNjcm9sbFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgYndJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICBjb2xJbWc9e2Avc3RhdGljL3NwZWFrZXJzL1NwZWFrZXItJHtpZH0uanBnYH1cclxuICAgICAgICBhbHQ9e2Ake2ZpcnN0TmFtZX0gICR7bGFzdE5hbWV9YH1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBkYXRhLXNlc3Npb25pZD17aWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZmF2b3JpdGUgPyAnaGVhcnRyZWRidXR0b24nIDogJ2hlYXJ0ZGFya2J1dHRvbid9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcihlLCAhZmF2b3JpdGUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Zmlyc3ROYW1lfSB7bGFzdE5hbWV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgIFxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgb25DbGljaz17KGUpID0+IHtlLnByZXZlbnREZWZhdWx0KCksIHRvZ2dsZVNpZ25VcCgnc2hvd1NpZ25NZVVwJyk7fX0+SGlkZS9EaXNwbGF5IFNwZWFrZXIgRGF5czwvYT5cclxuICAgICAgICAgXHJcbiAgICAgICAgPHNwYW4+e2Jpb308L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlVG9nZ2xlT25TY3JvbGwiLCJTcGVha2VyRGV0YWlsIiwiaWQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZhdm9yaXRlIiwiYmlvIiwib25IZWFydEZhdm9yaXRlSGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSIsImJ3SW1nIiwiY29sSW1nIiwiYWx0IiwiaDQiLCJidXR0b24iLCJkYXRhLXNlc3Npb25pZCIsIm9uQ2xpY2siLCJlIiwic3BhbiIsImEiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZVNpZ25VcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SpeakerDetail.js\n");

/***/ })

});