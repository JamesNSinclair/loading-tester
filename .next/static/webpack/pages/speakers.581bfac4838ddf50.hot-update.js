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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThemeContext */ \"./src/ThemeContext.js\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar handleChangeSaturday = function() {\n    setSpeakingSaturday(!speakingSaturday);\n};\nvar handleChangeSunday = function() {\n    setSpeakingSunday(!speakingSunday);\n};\nvar SpeakerDays = function() {\n    _s();\n    var ref = _slicedToArray(useState(true), 2), speakingSaturday = ref[0], setSpeakingSaturday = ref[1];\n    var ref1 = _slicedToArray(useState(true), 2), speakingSunday = ref1[0], setSpeakingSunday = ref1[1];\n    var context = (0,_ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useConfigContext)();\n    return context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hide\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-check-inline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"form-check-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"form-check-input\",\n                            onChange: handleChangeSaturday,\n                            checked: speakingSaturday\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, _this),\n                        \"Saturday Speakers\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-check-inline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"form-check-label\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            className: \"form-check-input\",\n                            onChange: handleChangeSunday,\n                            checked: speakingSunday\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this),\n                        \"Sunday Speakers\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\SpeakerDays.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s(SpeakerDays, \"ZG5PH5rINYta3LkqqRJwS1fpmKw=\", false, function() {\n    return [\n        _ThemeContext__WEBPACK_IMPORTED_MODULE_2__.useConfigContext\n    ];\n});\n_c = SpeakerDays;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakerDays);\nvar _c;\n$RefreshReg$(_c, \"SpeakerDays\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlckRheXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqRCxHQUFLLENBQUNFLG9CQUFvQixHQUFHLFFBQVEsR0FBRixDQUFDO0lBQ2hDQyxtQkFBbUIsRUFBRUMsZ0JBQWdCO0FBQ3ZDLENBQUM7QUFFRCxHQUFLLENBQUNDLGtCQUFrQixHQUFHLFFBQVEsR0FBRixDQUFDO0lBQ2hDQyxpQkFBaUIsRUFBRUMsY0FBYztBQUNuQyxDQUFDO0FBR0gsR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ3ZCLEdBQUssQ0FBMkNDLEdBQWMsa0JBQWRBLFFBQVEsQ0FBQyxJQUFJLE9BQXRETCxnQkFBZ0IsR0FBeUJLLEdBQWMsS0FBckNOLG1CQUFtQixHQUFJTSxHQUFjO0lBQ2hFLEdBQUssQ0FBdUNBLElBQWMsa0JBQWRBLFFBQVEsQ0FBQyxJQUFJLE9BQWxERixjQUFjLEdBQXVCRSxJQUFjLEtBQW5DSCxpQkFBaUIsR0FBSUcsSUFBYztJQUN4RCxHQUFLLENBQUNDLE9BQU8sR0FBR1QsK0RBQWdCO0lBRXBDLE1BQU0sQ0FDTlMsT0FBTyxDQUFDQyx1QkFBdUIsS0FBSyxLQUFLLEdBQUcsSUFBSSwrRUFDM0NDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQU07O3dGQUNsQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW1CO3NHQUMvQkMsQ0FBSztvQkFBQ0QsU0FBUyxFQUFDLENBQWtCOztvR0FDaENFLENBQUs7NEJBQ0pDLElBQUksRUFBQyxDQUFVOzRCQUNmSCxTQUFTLEVBQUMsQ0FBa0I7NEJBQzVCSSxRQUFRLEVBQUVmLG9CQUFvQjs0QkFDOUJnQixPQUFPLEVBQUVkLGdCQUFnQjs7Ozs7O3dCQUN6QixDQUVKOzs7Ozs7Ozs7Ozs7d0ZBRURRLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFtQjtzR0FDL0JDLENBQUs7b0JBQUNELFNBQVMsRUFBQyxDQUFrQjs7b0dBQ2hDRSxDQUFLOzRCQUNKQyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkgsU0FBUyxFQUFDLENBQWtCOzRCQUM1QkksUUFBUSxFQUFFWixrQkFBa0I7NEJBQzVCYSxPQUFPLEVBQUVYLGNBQWM7Ozs7Ozt3QkFDdkIsQ0FFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1IsQ0FBQztHQWpDS0MsV0FBVzs7UUFHR1AsMkRBQWdCOzs7S0FIOUJPLFdBQVc7QUFtQ2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJEYXlzLmpzPzRmYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vVGhlbWVDb250ZXh0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0U3BlYWtpbmdTYXR1cmRheSghc3BlYWtpbmdTYXR1cmRheSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlU3VuZGF5ID0gKCkgPT4ge1xyXG4gICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuICB9O1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJEYXlzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb25maWdDb250ZXh0KCk7XHJcblxyXG5yZXR1cm4gKFxyXG5jb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cclxuICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlckRheXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29uZmlnQ29udGV4dCIsImhhbmRsZUNoYW5nZVNhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU2F0dXJkYXkiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJzZXRTcGVha2luZ1N1bmRheSIsInNwZWFraW5nU3VuZGF5IiwiU3BlYWtlckRheXMiLCJ1c2VTdGF0ZSIsImNvbnRleHQiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SpeakerDays.js\n");

/***/ })

});