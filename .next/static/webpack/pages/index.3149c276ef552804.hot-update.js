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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemeContext */ \"./src/ThemeContext.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Speakers = function(param1) {\n    var param1 = param1 !== null ? param1 : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), speakingSaturday = ref[0], setSpeakingSaturday = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), speakingSunday = ref1[0], setSpeakingSunday = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), speakerList = ref2[0], setSpeakerList = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref3[0], setIsLoading = ref3[1];\n    var context = (0,_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useConfigContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setIsLoading(true);\n        var fetchData = function() {\n            var _ref = _asyncToGenerator(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return setTimeout(function() {\n                                setIsLoading(false);\n                                setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n                            }, 5000);\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n        return function() {\n            console.log('cleanup');\n        };\n    }, []);\n    var handleChangeSaturday = function() {\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    var handleChangeSunday = function() {\n        setSpeakingSunday(!speakingSunday);\n    };\n    var speakerListFiltered = isLoading ? [] : speakerList.filter(function(param) {\n        var sat = param.sat, sun = param.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function(a, b) {\n        if (a.firstName < b.firstName) {\n            return -1;\n        }\n        if (a.firstName > b.firstName) {\n            return 1;\n        }\n        return 0;\n    });\n    var heartFavoriteHandler = function(e, favoriteValue) {\n        e.preventDefault();\n        var sessionId = parseInt(e.target.attributes['data-sessionid'].value);\n        setSpeakerList(speakerList.map(function(item) {\n            if (item.id === sessionId) {\n                return _objectSpread({}, item, {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        }));\n    };\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 73,\n        columnNumber: 27\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 76,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_5__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 77,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checkbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 23\n                                            }, _this),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            className: \"form-check-label\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                    type: \"checkbox\",\n                                                    className: \"form-check-input\",\n                                                    onChange: handleChangeSunday,\n                                                    checked: speakingSunday\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 23\n                                                }, _this),\n                                                \"Sunday Speakers\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            className: \"nav-link\",\n                                            onClick: function(e) {\n                                                e.preventDefault(), toggleSignUp('showSignMeUp');\n                                            },\n                                            children: \"Hide/Display Speaker Days\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                            lineNumber: 81,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map(function(param) {\n                                var id = param.id, firstName = param.firstName, lastName = param.lastName, bio = param.bio, favorite = param.favorite;\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    onHeartFavoriteHandler: heartFavoriteHandler,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 23\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                            lineNumber: 110,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 78,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, _this));\n};\n_s(Speakers, \"Xz+TwCgpG1pNUXfAEdRD+yXPR2k=\", false, function() {\n    return [\n        _ThemeContext__WEBPACK_IMPORTED_MODULE_3__.useConfigContext\n    ];\n});\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLEVBQUMsQ0FBVTs0Q0FBQ08sT0FBTyxFQUFFLFFBQVFwQixDQUFQQSxDQUFDLEVBQUssQ0FBQ0E7Z0RBQUFBLENBQUMsQ0FBQ0UsY0FBYyxJQUFJbUIsWUFBWSxDQUFDLENBQWM7NENBQUUsQ0FBQztzREFBRSxDQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBTTdIVCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBSzs4R0FDakJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFXO3NDQUN2QnRCLG1CQUFtQixDQUFDaUIsR0FBRyxDQUN0QixRQUFRLFFBQXdDLENBQUM7b0NBQTlDRSxFQUFFLFNBQUZBLEVBQUUsRUFBRVosU0FBUyxTQUFUQSxTQUFTLEVBQUV3QixRQUFRLFNBQVJBLFFBQVEsRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVaLFFBQVEsU0FBUkEsUUFBUTtnQ0FDdkMsTUFBTSw2RUFDSHRDLHNEQUFhO29DQUVacUMsRUFBRSxFQUFFQSxFQUFFO29DQUNOQyxRQUFRLEVBQUVBLFFBQVE7b0NBQ2xCYSxzQkFBc0IsRUFBRXpCLG9CQUFvQjtvQ0FDNUNELFNBQVMsRUFBRUEsU0FBUztvQ0FDcEJ3QixRQUFRLEVBQUVBLFFBQVE7b0NBQ2xCQyxHQUFHLEVBQUVBLEdBQUc7bUNBTkhiLEVBQUU7Ozs7OzRCQVNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0gsQ0FBQztHQXpIWG5DLFFBQVE7O1FBUU1ELDJEQUFnQjs7O0tBUjlCQyxRQUFRO0FBMkhkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NwZWFrZXJzLmpzPzJmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ29udGV4dH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7dXNlVXBkYXRlQ29uZmlnQ29udGV4dH0gZnJvbSBcIi4vVGhlbWVDb250ZXh0XCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tIFwiLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tIFwiLi9TcGVha2VyRGV0YWlsXCI7XHJcbmltcG9ydCB7IHVzZUNvbmZpZ0NvbnRleHQgfSBmcm9tIFwiLi9UaGVtZUNvbnRleHRcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJzID0gKHt9KSA9PiB7XHJcbiAgXHJcbiAgICBjb25zdCBbc3BlYWtpbmdTYXR1cmRheSwgc2V0U3BlYWtpbmdTYXR1cmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbc3BlYWtpbmdTdW5kYXksIHNldFNwZWFraW5nU3VuZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBbc3BlYWtlckxpc3QsIHNldFNwZWFrZXJMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbmZpZ0NvbnRleHQoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYygpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3BlYWtlckxpc3QoU3BlYWtlckRhdGEpO1xyXG4gICAgICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICByZXR1cm4oKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcclxuICAgICAgICA/IFtdXHJcbiAgICAgICAgOiBzcGVha2VyTGlzdFxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICh7IHNhdCwgc3VuIH0pID0+XHJcbiAgICAgICAgICAgICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSAoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcclxuICAgICAgICBzZXRTcGVha2VyTGlzdChcclxuICAgICAgICAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi10b29sYmFyICBtYXJnaW50b3Bib3R0b201IGNoZWNrYm94LWJpZ2dlclwiPlxyXG4gICAgICAgICAgICAgIHtjb250ZXh0LnNob3dTcGVha2VyU3BlYWtpbmdEYXlzID09PSBmYWxzZSA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTYXR1cmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXR1cmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVN1bmRheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c3BlYWtpbmdTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU3VuZGF5IFNwZWFrZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpLCB0b2dnbGVTaWduVXAoJ3Nob3dTaWduTWVVcCcpO319PkhpZGUvRGlzcGxheSBTcGVha2VyIERheXM8L2E+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWNrXCI+XHJcbiAgICAgICAgICAgICAgICB7c3BlYWtlckxpc3RGaWx0ZXJlZC5tYXAoXHJcbiAgICAgICAgICAgICAgICAgICh7IGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lLCBiaW8sIGZhdm9yaXRlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJEZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSGVhcnRGYXZvcml0ZUhhbmRsZXI9e2hlYXJ0RmF2b3JpdGVIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiaW89e2Jpb31cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwidXNlVXBkYXRlQ29uZmlnQ29udGV4dCIsIkhlYWRlciIsIk1lbnUiLCJTcGVha2VyRGF0YSIsIlNwZWFrZXJEZXRhaWwiLCJ1c2VDb25maWdDb250ZXh0IiwiU3BlYWtlcnMiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyTGlzdCIsInNldFNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiY29udGV4dCIsImZldGNoRGF0YSIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlU2F0dXJkYXkiLCJoYW5kbGVDaGFuZ2VTdW5kYXkiLCJzcGVha2VyTGlzdEZpbHRlcmVkIiwiZmlsdGVyIiwic3VuIiwic2F0Iiwic29ydCIsImEiLCJiIiwiZmlyc3ROYW1lIiwiaGVhcnRGYXZvcml0ZUhhbmRsZXIiLCJlIiwiZmF2b3JpdGVWYWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2Vzc2lvbklkIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVzIiwidmFsdWUiLCJtYXAiLCJpdGVtIiwiaWQiLCJmYXZvcml0ZSIsImRpdiIsImNsYXNzTmFtZSIsInNob3dTcGVha2VyU3BlYWtpbmdEYXlzIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJvbkNsaWNrIiwidG9nZ2xlU2lnblVwIiwibGFzdE5hbWUiLCJiaW8iLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});