"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./src/ImageToggleOnScroll.js":
/*!************************************!*\
  !*** ./src/ImageToggleOnScroll.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ImageToToggleOnScroll = function(param) {\n    var bwImg = param.bwImg, colImg = param.colImg;\n    _s();\n    var imageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isLoading = ref[0], setIsLoading = ref[1];\n    var isInView = function() {\n        var rect = imageRef.current.getBoundingClientRect();\n        return rect.top >= 0 && rect.bottom <= window.innerHeight;\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inView = ref1[0], setInView = ref1[1];\n    var scrollHandler = function() {\n        setInView(isInView());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(false);\n        setInView(isInView());\n        window.addEventListener('scroll', scrollHandler);\n        return function() {\n            window.removeEventListener('scroll', scrollHandler);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: isLoading ? 'https://cdn.dribbble.com/users/28494/screenshots/10485911/media/cb3039bdcf16032e06fc6ca690fca8d7.gif' : inView ? colImg : bwImg,\n        alt: \"\",\n        ref: imageRef\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sinji\\\\Desktop\\\\using-hooks-next\\\\src\\\\ImageToggleOnScroll.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this));\n};\n_s(ImageToToggleOnScroll, \"2zfqQTOGHZHz7bbjjQDhXRDzFpQ=\");\n_c = ImageToToggleOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageToToggleOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageToToggleOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvSW1hZ2VUb2dnbGVPblNjcm9sbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7OztBQUV4RCxHQUFLLENBQUNJLHFCQUFxQixHQUFHLFFBQVEsUUFBYSxDQUFDO1FBQXBCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsTUFBTSxTQUFOQSxNQUFNOztJQUN6QyxHQUFLLENBQUNDLFFBQVEsR0FBR04sNkNBQU0sQ0FBQyxJQUFJO0lBRTVCLEdBQUssQ0FBNkJDLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXhDTSxTQUFTLEdBQWtCTixHQUFjLEtBQTlCTyxZQUFZLEdBQUlQLEdBQWM7SUFFaEQsR0FBSyxDQUFDUSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDcEIsR0FBSyxDQUFDQyxJQUFJLEdBQUVKLFFBQVEsQ0FBQ0ssT0FBTyxDQUFDQyxxQkFBcUI7UUFDbEQsTUFBTSxDQUFDRixJQUFJLENBQUNHLEdBQUcsSUFBSSxDQUFDLElBQUlILElBQUksQ0FBQ0ksTUFBTSxJQUFJQyxNQUFNLENBQUNDLFdBQVc7SUFDN0QsQ0FBQztJQUVELEdBQUssQ0FBdUJmLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQW5DZ0IsTUFBTSxHQUFlaEIsSUFBZSxLQUE1QmlCLFNBQVMsR0FBSWpCLElBQWU7SUFFM0MsR0FBSyxDQUFDa0IsYUFBYSxHQUFHLFFBQVEsR0FBRixDQUFDO1FBQ3pCRCxTQUFTLENBQUNULFFBQVE7SUFDdEIsQ0FBQztJQUVEUCxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2JNLFlBQVksQ0FBQyxLQUFLO1FBQ2xCVSxTQUFTLENBQUNULFFBQVE7UUFDbEJNLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBUSxTQUFFRCxhQUFhO1FBRW5ELE1BQU0sQ0FBQyxRQUFRLEdBQUYsQ0FBQztZQUNWSixNQUFNLENBQUNNLG1CQUFtQixDQUFDLENBQVEsU0FBRUYsYUFBYTtRQUN0RCxDQUFDO0lBQ0QsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0RHLENBQUc7UUFBQ0MsR0FBRyxFQUFFaEIsU0FBUyxHQUFHLENBQXNHLHdHQUFHVSxNQUFNLEdBQUdaLE1BQU0sR0FBR0QsS0FBSztRQUFFb0IsR0FBRyxFQUFDLENBQUU7UUFBQ0MsR0FBRyxFQUFFbkIsUUFBUTs7Ozs7O0FBRXBMLENBQUM7R0E3QktILHFCQUFxQjtLQUFyQkEscUJBQXFCO0FBK0IzQiwrREFBZUEscUJBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsLmpzP2NjNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEltYWdlVG9Ub2dnbGVPblNjcm9sbCA9ICh7YndJbWcsIGNvbEltZ30pID0+IHtcclxuICAgIGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVjdD0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIHNldEluVmlldyhpc0luVmlldygpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxIYW5kbGVyKVxyXG4gICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxpbWcgc3JjPXtpc0xvYWRpbmcgPyAnaHR0cHM6Ly9jZG4uZHJpYmJibGUuY29tL3VzZXJzLzI4NDk0L3NjcmVlbnNob3RzLzEwNDg1OTExL21lZGlhL2NiMzAzOWJkY2YxNjAzMmUwNmZjNmNhNjkwZmNhOGQ3LmdpZicgOiBpblZpZXcgPyBjb2xJbWcgOiBid0ltZ30gYWx0PVwiXCIgcmVmPXtpbWFnZVJlZn0gLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb1RvZ2dsZU9uU2Nyb2xsIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZVRvVG9nZ2xlT25TY3JvbGwiLCJid0ltZyIsImNvbEltZyIsImltYWdlUmVmIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaXNJblZpZXciLCJyZWN0IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiaW5WaWV3Iiwic2V0SW5WaWV3Iiwic2Nyb2xsSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1nIiwic3JjIiwiYWx0IiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ImageToggleOnScroll.js\n");

/***/ })

});