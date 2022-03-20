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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/Header.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ \"./src/Menu.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SpeakerData */ \"./src/SpeakerData.js\");\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Speakers = function(param1) {\n    var param1 = param1 !== null ? param1 : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(useState(true), 2), speakingSaturday = ref[0], setSpeakingSaturday = ref[1];\n    var ref1 = _slicedToArray(useState(true), 2), speakingSunday = ref1[0], setSpeakingSunday = ref1[1];\n    var ref2 = _slicedToArray(useState([]), 2), speakerList = ref2[0], setSpeakerList = ref2[1];\n    var ref3 = _slicedToArray(useState(true), 2), isLoading = ref3[0], setIsLoading = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setIsLoading(true);\n        var fetchData = function() {\n            var _ref = _asyncToGenerator(C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_sinji_Desktop_using_hooks_next_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return setTimeout(function() {\n                                console.log(isLoading);\n                            }, 1000);\n                        case 2:\n                            setIsLoading(false);\n                        case 3:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function fetchData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchData();\n        setSpeakerList(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        return function() {\n            console.log('cleanup');\n        };\n    }, []);\n    var handleChangeSaturday = function() {\n        setSpeakingSaturday(!speakingSaturday);\n    };\n    var handleChangeSunday = function() {\n        setSpeakingSunday(!speakingSunday);\n    };\n    var speakerListFiltered = isLoading ? [] : speakerList.filter(function(param) {\n        var sat = param.sat, sun = param.sun;\n        return speakingSaturday && sat || speakingSunday && sun;\n    }).sort(function(a, b) {\n        if (a.firstName < b.firstName) {\n            return -1;\n        }\n        if (a.firstName > b.firstName) {\n            return 1;\n        }\n        return 0;\n    });\n    var heartFavoriteHandler = function(e, favoriteValue) {\n        e.preventDefault();\n        var sessionId = parseInt(e.target.attributes['data-sessionid'].value);\n        setSpeakerList(speakerList.map(function(item) {\n            if (item.id === sessionId) {\n                return _objectSpread({}, item, {\n                    favorite: favoriteValue\n                });\n            }\n            return item;\n        }));\n    };\n    if (isLoading) return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading....\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 69,\n        columnNumber: 27\n    }, _this));\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_4__.Menu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"card-deck\",\n                        children: [\n                            speakerListFiltered.map(function(param) {\n                                var id = param.id, firstName = param.firstName, lastName = param.lastName, bio = param.bio, favorite = param.favorite;\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_SpeakerData__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    id: id,\n                                    favorite: favorite,\n                                    firstName: firstName,\n                                    lastName: lastName,\n                                    bio: bio,\n                                    onHeartFavoriteHandler: heartFavoriteHandler\n                                }, id, false, {\n                                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, _this1));\n                            }),\n                            \";\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\Speakers.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, _this));\n};\n_s(Speakers, \"16TB+m9rx2P2E9e6i8F9APNAaDA=\");\n_c = Speakers;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speakers);\nvar _c;\n$RefreshReg$(_c, \"Speakers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU3BlYWtlcnMuanM/MmZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIFVzZXJTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge0hlYWRlcn0gZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQge01lbnV9IGZyb20gJy4vTWVudSc7XHJcbmltcG9ydCBTcGVha2VyRGF0YSBmcm9tIFwiLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgU3BlYWtlckRldGFpbCBmcm9tIFwiLi9TcGVha2VyRGF0YVwiO1xyXG5cclxuY29uc3QgU3BlYWtlcnMgPSAoe30pID0+IHtcclxuICAgIGNvbnN0IFtzcGVha2luZ1NhdHVyZGF5LCBzZXRTcGVha2luZ1NhdHVyZGF5XSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtzcGVha2luZ1N1bmRheSwgc2V0U3BlYWtpbmdTdW5kYXldID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFtzcGVha2VyTGlzdCwgc2V0U3BlYWtlckxpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMoKSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc0xvYWRpbmcpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIHNldFNwZWFrZXJMaXN0KFNwZWFrZXJEYXRhKTtcclxuICAgICAgICByZXR1cm4oKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhbnVwJyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVNhdHVyZGF5ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNwZWFraW5nU2F0dXJkYXkoIXNwZWFraW5nU2F0dXJkYXkpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZVN1bmRheSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTcGVha2luZ1N1bmRheSghc3BlYWtpbmdTdW5kYXkpO1xyXG4gICAgICB9O1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IHNwZWFrZXJMaXN0RmlsdGVyZWQgPSBpc0xvYWRpbmdcclxuICAgICAgICA/IFtdXHJcbiAgICAgICAgOiBzcGVha2VyTGlzdFxyXG4gICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICh7IHNhdCwgc3VuIH0pID0+XHJcbiAgICAgICAgICAgICAgICAoc3BlYWtpbmdTYXR1cmRheSAmJiBzYXQpIHx8IChzcGVha2luZ1N1bmRheSAmJiBzdW4pLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lIDwgYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGEuZmlyc3ROYW1lID4gYi5maXJzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgaGVhcnRGYXZvcml0ZUhhbmRsZXIgPSAoZSwgZmF2b3JpdGVWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSBwYXJzZUludChlLnRhcmdldC5hdHRyaWJ1dGVzWydkYXRhLXNlc3Npb25pZCddLnZhbHVlKTtcclxuICAgICAgICBzZXRTcGVha2VyTGlzdChcclxuICAgICAgICAgIHNwZWFrZXJMaXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgZmF2b3JpdGU6IGZhdm9yaXRlVmFsdWUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PjtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzcGVha2VyTGlzdEZpbHRlcmVkLm1hcChcclxuICAgICAgICAgICAgICAoeyBpZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYmlvLCBmYXZvcml0ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlPXtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgYmlvPXtiaW99XHJcbiAgICAgICAgICAgICAgICAgICAgb25IZWFydEZhdm9yaXRlSGFuZGxlcj17aGVhcnRGYXZvcml0ZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX07XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiVXNlclN0YXRlIiwiSGVhZGVyIiwiTWVudSIsIlNwZWFrZXJEYXRhIiwiU3BlYWtlckRldGFpbCIsIlNwZWFrZXJzIiwidXNlU3RhdGUiLCJzcGVha2luZ1NhdHVyZGF5Iiwic2V0U3BlYWtpbmdTYXR1cmRheSIsInNwZWFraW5nU3VuZGF5Iiwic2V0U3BlYWtpbmdTdW5kYXkiLCJzcGVha2VyTGlzdCIsInNldFNwZWFrZXJMaXN0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZmV0Y2hEYXRhIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VTYXR1cmRheSIsImhhbmRsZUNoYW5nZVN1bmRheSIsInNwZWFrZXJMaXN0RmlsdGVyZWQiLCJmaWx0ZXIiLCJzdW4iLCJzYXQiLCJzb3J0IiwiYSIsImIiLCJmaXJzdE5hbWUiLCJoZWFydEZhdm9yaXRlSGFuZGxlciIsImUiLCJmYXZvcml0ZVZhbHVlIiwicHJldmVudERlZmF1bHQiLCJzZXNzaW9uSWQiLCJwYXJzZUludCIsInRhcmdldCIsImF0dHJpYnV0ZXMiLCJ2YWx1ZSIsIm1hcCIsIml0ZW0iLCJpZCIsImZhdm9yaXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFzdE5hbWUiLCJiaW8iLCJvbkhlYXJ0RmF2b3JpdGVIYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Speakers.js\n");

/***/ })

});