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

/***/ "./src/ThemeContext.js":
/*!*****************************!*\
  !*** ./src/ThemeContext.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useConfigContext\": function() { return /* binding */ useConfigContext; },\n/* harmony export */   \"useUpdateConfigContext\": function() { return /* binding */ useUpdateConfigContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nvar ConfigContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nvar ConfigContextUpdate = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\n_c = ConfigContextUpdate;\nfunction useConfigContext() {\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContext);\n}\n_s(useConfigContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nfunction useUpdateConfigContext() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ConfigContextUpdate);\n}\n_s1(useUpdateConfigContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar Themeprovider = function(param) {\n    var children = param.children;\n    _s2();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSignMeUp = ref[0], setShowSignMeUp = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSpeakerSpeakingDays = ref1[0], setShowSpeakerSpeakingDays = ref1[1];\n    var configValue = {\n        showSignMeUp: showSignMeUp,\n        showSpeakerSpeakingDays: showSpeakerSpeakingDays\n    };\n    var toggleSignUp = function(toggleTarget) {\n        switch(toggleTarget){\n            case 'showSignMeUp':\n                setShowSignMeUp(!showSignMeUp);\n                break;\n            case 'showSpeakerSpeakingDays':\n                setShowSpeakerSpeakingDays(!showSpeakerSpeakingDays);\n                break;\n            default:\n                null;\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContext.Provider, {\n        value: configValue,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ConfigContextUpdate, {\n            value: toggleSignUp,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\ThemeContext.js\",\n            lineNumber: 44,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\ThemeContext.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this));\n};\n_s2(Themeprovider, \"HnGarLJhUC1Ra6niu0LfaSDT4EA=\");\n_c1 = Themeprovider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Themeprovider);\nvar _c, _c1;\n$RefreshReg$(_c, \"ConfigContextUpdate\");\n$RefreshReg$(_c1, \"Themeprovider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVGhlbWVDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7OztBQUVqRCxHQUFLLENBQUNHLGFBQWEsaUJBQUdILDBEQUFtQjtBQUN6QyxHQUFLLENBQUNLLG1CQUFtQixpQkFBR0wsMERBQW1CO0tBQXpDSyxtQkFBbUI7QUFFbEIsU0FBU0MsZ0JBQWdCLEdBQUcsQ0FBQzs7SUFDaEMsTUFBTSxDQUFDTCxpREFBVSxDQUFDRSxhQUFhO0FBQ25DLENBQUM7R0FGZUcsZ0JBQWdCO0FBS3pCLFNBQVNDLHNCQUFzQixHQUFHLENBQUM7O0lBQ3RDLE1BQU0sQ0FBQ04saURBQVUsQ0FBQ0ksbUJBQW1CO0FBQ3pDLENBQUM7SUFGZUUsc0JBQXNCO0FBSXRDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQVEsUUFBUSxDQUFDO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFFaEMsR0FBSyxDQUFtQ1AsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBL0NRLFlBQVksR0FBcUJSLEdBQWUsS0FBbENTLGVBQWUsR0FBSVQsR0FBZTtJQUN2RCxHQUFLLENBQTBEQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFyRVUsdUJBQXVCLEdBQWdDVixJQUFlLEtBQTdDVywwQkFBMEIsR0FBSVgsSUFBZTtJQUk5RSxHQUFLLENBQUNZLFdBQVcsR0FBRyxDQUFDO1FBQ3BCSixZQUFZLEVBQVpBLFlBQVk7UUFDWkUsdUJBQXVCLEVBQXZCQSx1QkFBdUI7SUFDeEIsQ0FBQztJQUVELEdBQUssQ0FBQ0csWUFBWSxHQUFHLFFBQVEsQ0FBUEMsWUFBWSxFQUFLLENBQUM7UUFDcEMsTUFBTSxDQUFDQSxZQUFZO1lBQ2YsSUFBSSxDQUFDLENBQWM7Z0JBQ2ZMLGVBQWUsRUFBRUQsWUFBWTtnQkFDN0IsS0FBSztZQUNULElBQUksQ0FBQyxDQUF5QjtnQkFDMUJHLDBCQUEwQixFQUFFRCx1QkFBdUI7Z0JBQ25ELEtBQUs7O2dCQUNBLElBQUk7O0lBRXJCLENBQUM7SUFLRCxNQUFNLDZFQUNEVCxhQUFhLENBQUNjLFFBQVE7UUFBQ0MsS0FBSyxFQUFFSixXQUFXOzhGQUNyQ1QsbUJBQW1CO1lBQUNhLEtBQUssRUFBRUgsWUFBWTtzQkFDM0NOLFFBQVE7Ozs7Ozs7Ozs7O0FBSWIsQ0FBQztJQWxDS0QsYUFBYTtNQUFiQSxhQUFhO0FBb0NuQiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9UaGVtZUNvbnRleHQuanM/OTVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb25maWdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBDb25maWdDb250ZXh0VXBkYXRlID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbmZpZ0NvbnRleHQoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVDb25maWdDb250ZXh0KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoQ29uZmlnQ29udGV4dFVwZGF0ZSk7XHJcbn1cclxuXHJcbmNvbnN0IFRoZW1lcHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG5cclxuY29uc3QgW3Nob3dTaWduTWVVcCwgc2V0U2hvd1NpZ25NZVVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuY29uc3QgIFtzaG93U3BlYWtlclNwZWFraW5nRGF5cywgc2V0U2hvd1NwZWFrZXJTcGVha2luZ0RheXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG5jb25zdCBjb25maWdWYWx1ZSA9IHtcclxuIHNob3dTaWduTWVVcCxcclxuIHNob3dTcGVha2VyU3BlYWtpbmdEYXlzXHJcbn07XHJcblxyXG5jb25zdCB0b2dnbGVTaWduVXAgPSAodG9nZ2xlVGFyZ2V0KSA9PiB7XHJcbiAgICBzd2l0Y2godG9nZ2xlVGFyZ2V0KSB7XHJcbiAgICAgICAgY2FzZSAnc2hvd1NpZ25NZVVwJzpcclxuICAgICAgICAgICAgc2V0U2hvd1NpZ25NZVVwKCFzaG93U2lnbk1lVXApO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdzaG93U3BlYWtlclNwZWFraW5nRGF5cyc6XHJcbiAgICAgICAgICAgIHNldFNob3dTcGVha2VyU3BlYWtpbmdEYXlzKCFzaG93U3BlYWtlclNwZWFraW5nRGF5cyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGw7XHJcbiAgICB9ICBcclxufVxyXG5cclxuXHJcblxyXG5cclxucmV0dXJuIChcclxuICAgIDxDb25maWdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb25maWdWYWx1ZX0+XHJcbiAgICAgICAgPENvbmZpZ0NvbnRleHRVcGRhdGUgdmFsdWU9e3RvZ2dsZVNpZ25VcH0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbmZpZ0NvbnRleHRVcGRhdGU+XHJcbiAgICA8L0NvbmZpZ0NvbnRleHQuUHJvdmlkZXI+XHJcbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZXByb3ZpZGVyOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvbmZpZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ29uZmlnQ29udGV4dFVwZGF0ZSIsInVzZUNvbmZpZ0NvbnRleHQiLCJ1c2VVcGRhdGVDb25maWdDb250ZXh0IiwiVGhlbWVwcm92aWRlciIsImNoaWxkcmVuIiwic2hvd1NpZ25NZVVwIiwic2V0U2hvd1NpZ25NZVVwIiwic2hvd1NwZWFrZXJTcGVha2luZ0RheXMiLCJzZXRTaG93U3BlYWtlclNwZWFraW5nRGF5cyIsImNvbmZpZ1ZhbHVlIiwidG9nZ2xlU2lnblVwIiwidG9nZ2xlVGFyZ2V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ThemeContext.js\n");

/***/ })

});