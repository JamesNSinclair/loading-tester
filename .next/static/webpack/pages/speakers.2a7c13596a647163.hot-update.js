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

/***/ "./src/Speakers.js":
/*!*************************!*\
  !*** ./src/Speakers.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n/* harmony import */ var _SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SpeakerDetail */ \"./src/SpeakerDetail.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Speakers = function(param1) {\n    var param1 = param1 !== null ? param1 : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), speakingSaturday = ref[0], setSpeakingSaturday = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), speakingSunday = ref1[0], setSpeakingSunday = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), speakerList = ref2[0], setSpeakerList = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), isLoading = ref3[0], setIsLoading = ref3[1];\n    var context = (0,_App__WEBPACK_IMPORTED_MODULE_7__.useConfigContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setIsLoading(true);\n        var fetchData = function() {\n            var _ref = _asyncToGenerator(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return setTimeout(function() {\n                                setIsLoading(false);\n                                setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n                            }, 5000);\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n        return function() {\n            console.log('cleanup');\n        };\n    }, []);\n    var handleChangeSaturday = function() {\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    var handleChangeSunday = function() {\n        setSpeakingSunday(!speakingSunday);\n    };\n    var speakerListFiltered = isLoading ? [] : speakerList.filter(function(param) {\n        var sat = param.sat, sun = param.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function(a, b) {\n        if (a.firstName < b.firstName) {\n            return -1;\n        }\n        if (a.firstName > b.firstName) {\n            return 1;\n        }\n        return 0;\n    });\n    var heartFavoriteHandler = function(e, favoriteValue) {\n        e.preventDefault();\n        var sessionId = parseInt(e.target.attributes['data-sessionid'].value);\n        setSpeakerList(speakerList.map(function(item) {\n            if (item.id === sessionId) {\n                return _objectSpread({}, item, {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        }));\n    };\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 71,\n        columnNumber: 27\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 74,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"btn-toolbar margintopbottom5 checkbox-bigger\",\n                        children: context.showSpeakerSpeakingDays === false ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"hide\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSaturday,\n                                                checked: speakingSaturday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 23\n                                            }, _this),\n                                            \"Saturday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"form-check-inline\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                        className: \"form-check-label\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                                type: \"checkbox\",\n                                                className: \"form-check-input\",\n                                                onChange: handleChangeSunday,\n                                                checked: speakingSunday\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 23\n                                            }, _this),\n                                            \"Sunday Speakers\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 21\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 19\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                            lineNumber: 79,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-deck\",\n                            children: speakerListFiltered.map(function(param) {\n                                var id = param.id, firstName = param.firstName, lastName = param.lastName, bio = param.bio, favorite = param.favorite;\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SpeakerDetail__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    onHeartFavoriteHandler: heartFavoriteHandler,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 23\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                        lineNumber: 105,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 76,\n                columnNumber: 11\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, _this));\n};\n_s(Speakers, \"Xz+TwCgpG1pNUXfAEdRD+yXPR2k=\", false, function() {\n    return [\n        _App__WEBPACK_IMPORTED_MODULE_7__.useConfigContext\n    ];\n});\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU3BlYWtlcnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNEQ7QUFFN0I7QUFDSjtBQUNZO0FBQ0k7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQVEsVUFBQzs7OztJQUN0QixHQUFLLENBQTJDUCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0RFEsZ0JBQWdCLEdBQXlCUixHQUFjLEtBQXJDUyxtQkFBbUIsR0FBSVQsR0FBYztJQUNoRSxHQUFLLENBQXVDQSxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUFsRFUsY0FBYyxHQUF1QlYsSUFBYyxLQUFuQ1csaUJBQWlCLEdBQUlYLElBQWM7SUFFMUQsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUExQ1ksV0FBVyxHQUFvQlosSUFBWSxLQUE5QmEsY0FBYyxHQUFJYixJQUFZO0lBQ2xELEdBQUssQ0FBNkJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDYyxTQUFTLEdBQWtCZCxJQUFjLEtBQTlCZSxZQUFZLEdBQUlmLElBQWM7SUFFOUMsR0FBSyxDQUFDZ0IsT0FBTyxHQUFHVixzREFBZ0I7SUFFaENQLGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDYmdCLFlBQVksQ0FBQyxJQUFJO1FBQ2pCLEdBQUssQ0FBQ0UsU0FBUzsyTEFBRyxRQUFRLFdBQUcsQ0FBQzs7Ozs7bUNBQ3BCQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUM7Z0NBQ3hCSCxZQUFZLENBQUMsS0FBSztnQ0FDbkJGLGNBQWMsQ0FBQ1Qsb0RBQVc7NEJBQzlCLENBQUMsRUFBRSxJQUFJOzs7Ozs7WUFFWCxDQUFDOzRCQU5LYSxTQUFTOzs7O1FBT2ZBLFNBQVM7UUFDVCxNQUFNLFNBQVEsR0FBRixDQUFDO1lBQ1RFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVM7UUFDekIsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDTCxHQUFLLENBQUNDLG9CQUFvQixHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ2hDWixtQkFBbUIsRUFBRUQsZ0JBQWdCO0lBQ3ZDLENBQUM7SUFFRCxHQUFLLENBQUNjLGtCQUFrQixHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ2hDWCxpQkFBaUIsRUFBRUQsY0FBYztJQUNuQyxDQUFDO0lBRUQsR0FBSyxDQUFDYSxtQkFBbUIsR0FBR1QsU0FBUyxHQUNqQyxDQUFDLENBQUMsR0FDRkYsV0FBVyxDQUNSWSxNQUFNLENBQ0wsUUFBUUM7WUFBTEMsR0FBRyxTQUFIQSxHQUFHLEVBQUVELEdBQUcsU0FBSEEsR0FBRztRQUNULE1BQU0sQ0FBTGpCLGdCQUFnQixJQUFJa0IsR0FBRyxJQUFNaEIsY0FBYyxJQUFJZSxHQUFHO09BRXRERSxJQUFJLENBQUMsUUFBUSxDQUFFQyxDQUFDLEVBQUVDLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsRUFBRUQsQ0FBQyxDQUFDRSxTQUFTLEdBQUdELENBQUMsQ0FBQ0MsU0FBUyxFQUFFLENBQUM7WUFDOUIsTUFBTSxFQUFFLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxFQUFFRixDQUFDLENBQUNFLFNBQVMsR0FBR0QsQ0FBQyxDQUFDQyxTQUFTLEVBQUUsQ0FBQztZQUM5QixNQUFNLENBQUMsQ0FBQztRQUNWLENBQUM7UUFDRCxNQUFNLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFUCxHQUFLLENBQUNDLG9CQUFvQixHQUFHLFFBQVEsQ0FBUEMsQ0FBQyxFQUFFQyxhQUFhLEVBQUssQ0FBQztRQUNsREQsQ0FBQyxDQUFDRSxjQUFjO1FBQ2hCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHQyxRQUFRLENBQUNKLENBQUMsQ0FBQ0ssTUFBTSxDQUFDQyxVQUFVLENBQUMsQ0FBZ0IsaUJBQUVDLEtBQUs7UUFDdEUxQixjQUFjLENBQ1pELFdBQVcsQ0FBQzRCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQ3pCLEVBQUUsRUFBRUEsSUFBSSxDQUFDQyxFQUFFLEtBQUtQLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixNQUFNLG1CQUFNTSxJQUFJO29CQUFFRSxRQUFRLEVBQUVWLGFBQWE7O1lBQzNDLENBQUM7WUFDRCxNQUFNLENBQUNRLElBQUk7UUFDYixDQUFDO0lBRUwsQ0FBQztJQUdILEVBQUUsRUFBRTNCLFNBQVMsRUFBRSxNQUFNLDZFQUFFOEIsQ0FBRztrQkFBQyxDQUFXOzs7Ozs7SUFDdEMsTUFBTSw2RUFDREEsQ0FBRzs7d0ZBQ0QxQywyQ0FBTTs7Ozs7d0ZBQ05DLHVDQUFJOzs7Ozt3RkFDSnlDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOztnR0FDdkJELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUErQztrQ0FDM0Q3QixPQUFPLENBQUM4Qix1QkFBdUIsS0FBSyxLQUFLLEdBQUcsSUFBSSwrRUFDOUNGLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFNOzs0R0FDbEJELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFtQjswSEFDL0JFLENBQUs7d0NBQUNGLFNBQVMsRUFBQyxDQUFrQjs7d0hBQ2hDRyxDQUFLO2dEQUNKQyxJQUFJLEVBQUMsQ0FBVTtnREFDZkosU0FBUyxFQUFDLENBQWtCO2dEQUM1QkssUUFBUSxFQUFFN0Isb0JBQW9CO2dEQUM5QjhCLE9BQU8sRUFBRTNDLGdCQUFnQjs7Ozs7OzRDQUN6QixDQUVKOzs7Ozs7Ozs7Ozs7NEdBRURvQyxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBbUI7MEhBQy9CRSxDQUFLO3dDQUFDRixTQUFTLEVBQUMsQ0FBa0I7O3dIQUNoQ0csQ0FBSztnREFDSkMsSUFBSSxFQUFDLENBQVU7Z0RBQ2ZKLFNBQVMsRUFBQyxDQUFrQjtnREFDNUJLLFFBQVEsRUFBRTVCLGtCQUFrQjtnREFDNUI2QixPQUFPLEVBQUV6QyxjQUFjOzs7Ozs7NENBQ3ZCLENBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dHQUtQa0MsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQUs7OEdBQ2pCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVztzQ0FDdkJ0QixtQkFBbUIsQ0FBQ2lCLEdBQUcsQ0FDdEIsUUFBUSxRQUF3QyxDQUFDO29DQUE5Q0UsRUFBRSxTQUFGQSxFQUFFLEVBQUVaLFNBQVMsU0FBVEEsU0FBUyxFQUFFc0IsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEdBQUcsU0FBSEEsR0FBRyxFQUFFVixRQUFRLFNBQVJBLFFBQVE7Z0NBQ3ZDLE1BQU0sNkVBQ0h0QyxzREFBYTtvQ0FFWnFDLEVBQUUsRUFBRUEsRUFBRTtvQ0FDTkMsUUFBUSxFQUFFQSxRQUFRO29DQUNsQlcsc0JBQXNCLEVBQUV2QixvQkFBb0I7b0NBQzVDRCxTQUFTLEVBQUVBLFNBQVM7b0NBQ3BCc0IsUUFBUSxFQUFFQSxRQUFRO29DQUNsQkMsR0FBRyxFQUFFQSxHQUFHO21DQU5IWCxFQUFFOzs7Ozs0QkFTYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9ILENBQUM7R0F0SFhuQyxRQUFROztRQU9NRCxrREFBZ0I7OztLQVA5QkMsUUFBUTtBQXdIZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9TcGVha2Vycy5qcz8yZmJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IHtNZW51fSBmcm9tICcuL01lbnUnO1xyXG5pbXBvcnQgU3BlYWtlckRhdGEgZnJvbSBcIi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IFNwZWFrZXJEZXRhaWwgZnJvbSBcIi4vU3BlYWtlckRldGFpbFwiO1xyXG5pbXBvcnQgeyB1c2VDb25maWdDb250ZXh0IH0gZnJvbSBcIi4vQXBwXCI7XHJcblxyXG5jb25zdCBTcGVha2VycyA9ICh7fSkgPT4ge1xyXG4gICAgY29uc3QgW3NwZWFraW5nU2F0dXJkYXksIHNldFNwZWFraW5nU2F0dXJkYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NwZWFraW5nU3VuZGF5LCBzZXRTcGVha2luZ1N1bmRheV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgW3NwZWFrZXJMaXN0LCBzZXRTcGVha2VyTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRleHQgPSB1c2VDb25maWdDb250ZXh0KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldFNwZWFrZXJMaXN0KFNwZWFrZXJEYXRhKTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgcmV0dXJuKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2xlYW51cCcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VTYXR1cmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1NhdHVyZGF5KCFzcGVha2luZ1NhdHVyZGF5KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBoYW5kbGVDaGFuZ2VTdW5kYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U3BlYWtpbmdTdW5kYXkoIXNwZWFraW5nU3VuZGF5KTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBjb25zdCBzcGVha2VyTGlzdEZpbHRlcmVkID0gaXNMb2FkaW5nXHJcbiAgICAgICAgPyBbXVxyXG4gICAgICAgIDogc3BlYWtlckxpc3RcclxuICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAoeyBzYXQsIHN1biB9KSA9PlxyXG4gICAgICAgICAgICAgICAgKHNwZWFraW5nU2F0dXJkYXkgJiYgc2F0KSB8fCAoc3BlYWtpbmdTdW5kYXkgJiYgc3VuKSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA8IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChhLmZpcnN0TmFtZSA+IGIuZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhlYXJ0RmF2b3JpdGVIYW5kbGVyID0gKGUsIGZhdm9yaXRlVmFsdWUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gcGFyc2VJbnQoZS50YXJnZXQuYXR0cmlidXRlc1snZGF0YS1zZXNzaW9uaWQnXS52YWx1ZSk7XHJcbiAgICAgICAgc2V0U3BlYWtlckxpc3QoXHJcbiAgICAgICAgICBzcGVha2VyTGlzdC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IHNlc3Npb25JZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGZhdm9yaXRlOiBmYXZvcml0ZVZhbHVlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi48L2Rpdj47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tdG9vbGJhciAgbWFyZ2ludG9wYm90dG9tNSBjaGVja2JveC1iaWdnZXJcIj5cclxuICAgICAgICAgICAgICB7Y29udGV4dC5zaG93U3BlYWtlclNwZWFraW5nRGF5cyA9PT0gZmFsc2UgPyBudWxsIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU2F0dXJkYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgU2F0dXJkYXkgU3BlYWtlcnNcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VTdW5kYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NwZWFraW5nU3VuZGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIFN1bmRheSBTcGVha2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWRlY2tcIj5cclxuICAgICAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcclxuICAgICAgICAgICAgICAgICAgKHsgaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGJpbywgZmF2b3JpdGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbz17YmlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2VyczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJIZWFkZXIiLCJNZW51IiwiU3BlYWtlckRhdGEiLCJTcGVha2VyRGV0YWlsIiwidXNlQ29uZmlnQ29udGV4dCIsIlNwZWFrZXJzIiwic3BlYWtpbmdTYXR1cmRheSIsInNldFNwZWFraW5nU2F0dXJkYXkiLCJzcGVha2luZ1N1bmRheSIsInNldFNwZWFraW5nU3VuZGF5Iiwic3BlYWtlckxpc3QiLCJzZXRTcGVha2VyTGlzdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImNvbnRleHQiLCJmZXRjaERhdGEiLCJzZXRUaW1lb3V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZVNhdHVyZGF5IiwiaGFuZGxlQ2hhbmdlU3VuZGF5Iiwic3BlYWtlckxpc3RGaWx0ZXJlZCIsImZpbHRlciIsInN1biIsInNhdCIsInNvcnQiLCJhIiwiYiIsImZpcnN0TmFtZSIsImhlYXJ0RmF2b3JpdGVIYW5kbGVyIiwiZSIsImZhdm9yaXRlVmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlc3Npb25JZCIsInBhcnNlSW50IiwidGFyZ2V0IiwiYXR0cmlidXRlcyIsInZhbHVlIiwibWFwIiwiaXRlbSIsImlkIiwiZmF2b3JpdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJjaGVja2VkIiwibGFzdE5hbWUiLCJiaW8iLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});