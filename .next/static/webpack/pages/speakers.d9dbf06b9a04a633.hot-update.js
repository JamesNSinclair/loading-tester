"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/speakers",{

/***/ "./src/SpeakerDays.js":
/*!****************************!*\
  !*** ./src/SpeakerDays.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeContext */ \"./src/ThemeContext.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SpeakerDays = function() {\n    _s();\n    var handleChangeSaturday = function() {\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    var handleChangeSunday = function() {\n        setSpeakingSunday(!speakingSunday);\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakingSaturday = ref[0], setSpeakingSaturday = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), speakingSunday = ref1[0], setSpeakingSunday = ref1[1];\n    var context = (0,_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useConfigContext)();\n    return context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hide\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-check-inline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"form-check-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"form-check-input\",\n                            onChange: handleChangeSaturday,\n                            checked: speakingSaturday\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, _this),\n                        \"Saturday Speakers\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-check-inline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"form-check-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"form-check-input\",\n                            onChange: handleChangeSunday,\n                            checked: speakingSunday\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        \"Sunday Speakers\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerDays, \"8RHz+WpinYFF0yDdiH9eC4ldn0o=\", false, function() {\n    return [\n        _ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useConfigContext\n    ];\n});\n_c = SpeakerDays;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDays);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDays\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRheXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQUNZOzs7QUFNakQsR0FBSyxDQUFDRyxXQUFXLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ3ZCLEdBQUssQ0FBQ0Msb0JBQW9CLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDaENDLG1CQUFtQixFQUFFQyxnQkFBZ0I7SUFDdkMsQ0FBQztJQUVELEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDaENDLGlCQUFpQixFQUFFQyxjQUFjO0lBQ25DLENBQUM7SUFHSCxHQUFLLENBQTJDUixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0REssZ0JBQWdCLEdBQXlCTCxHQUFjLEtBQXJDSSxtQkFBbUIsR0FBSUosR0FBYztJQUNoRSxHQUFLLENBQXVDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFsRFEsY0FBYyxHQUF1QlIsSUFBYyxLQUFuQ08saUJBQWlCLEdBQUlQLElBQWM7SUFDeEQsR0FBSyxDQUFDUyxPQUFPLEdBQUdSLCtEQUFnQjtJQUVwQyxNQUFNLENBQ05RLE9BQU8sQ0FBQ0MsdUJBQXVCLEtBQUssS0FBSyxHQUFHLElBQUksK0VBQzNDQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFNOzt3RkFDbEJELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtzR0FDL0JDLENBQUs7b0JBQUNELFNBQVMsRUFBQyxDQUFrQjs7b0dBQ2hDRSxDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkgsU0FBUyxFQUFDLENBQWtCOzRCQUM1QkksUUFBUSxFQUFFYixvQkFBb0I7NEJBQzlCYyxPQUFPLEVBQUVaLGdCQUFnQjs7Ozs7O3dCQUN6QixDQUVKOzs7Ozs7Ozs7Ozs7d0ZBRURNLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtzR0FDL0JDLENBQUs7b0JBQUNELFNBQVMsRUFBQyxDQUFrQjs7b0dBQ2hDRSxDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkgsU0FBUyxFQUFDLENBQWtCOzRCQUM1QkksUUFBUSxFQUFFVixrQkFBa0I7NEJBQzVCVyxPQUFPLEVBQUVULGNBQWM7Ozs7Ozt3QkFDdkIsQ0FFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1IsQ0FBQztHQTFDS04sV0FBVzs7UUFZR0QsMkRBQWdCOzs7S0FaOUJDLFdBQVc7QUE0Q2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEYXlzLmpzPzRmYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlQ29uZmlnQ29udGV4dCB9IGZyb20gXCIuL1RoZW1lQ29udGV4dFwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJEYXlzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlU2F0dXJkYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuICAgICAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU3VuZGF5KCFzcGVha2luZ1N1bmRheSk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbmZpZ0NvbnRleHQoKTtcclxuXHJcbnJldHVybiAoXHJcbmNvbnRleHQuc2hvd1NwZWFrZXJTcGVha2luZ0RheXMgPT09IGZhbHNlID8gbnVsbCA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVNhdHVyZGF5fVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1NhdHVyZGF5fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFNhdHVyZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU3VuZGF5fVxyXG4gICAgICAgICAgICBjaGVja2VkPXtzcGVha2luZ1N1bmRheX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBTdW5kYXkgU3BlYWtlcnNcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4pXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJEYXlzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29uZmlnQ29udGV4dCIsIlNwZWFrZXJEYXlzIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJzZXRTcGVha2luZ1NhdHVyZGF5Iiwic3BlYWtpbmdTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsInNldFNwZWFraW5nU3VuZGF5Iiwic3BlYWtpbmdTdW5kYXkiLCJjb250ZXh0Iiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SpeakerDays.js\n");

/***/ })

});