"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _components_MyCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyCamera */ \"./components/MyCamera.js\");\n/* harmony import */ var _components_Landscape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Landscape */ \"./components/Landscape.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const setCamera = ()=>{\n            const aspect = window.innerWidth / window.innerHeight;\n            const camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-200 * aspect, 200 * aspect, 200, -200, 0.1, 1000);\n            camera.position.set(200, 400, 200);\n            camera.lookAt(0, 0, 0);\n            return camera;\n        };\n        cameraRef.current = setCamera();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.Canvas, {\n        style: {\n            height: \"70vh\"\n        },\n        gl: {\n            antialias: true\n        },\n        shadowMap: {\n            enabled: true,\n            type: three__WEBPACK_IMPORTED_MODULE_4__.PCFSoftShadowMap\n        },\n        camera: {\n            position: [\n                200,\n                200,\n                200\n            ],\n            up: [\n                0,\n                1,\n                0\n            ],\n            far: 1000\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 0.5\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/project.js\",\n                lineNumber: 28,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                position: [\n                    10,\n                    10,\n                    10\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/project.js\",\n                lineNumber: 29,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Landscape__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/project.js\",\n                lineNumber: 30,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyCamera__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/project.js\",\n                lineNumber: 31,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/project.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"HXv3wxQbioe7vzfntxg8c7OL2kw=\");\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFDYjtBQUMyQjtBQUNWO0FBRWhELFNBQVNPLFVBQVU7O0lBQ2pCLE1BQU1DLFlBQVlQLDZDQUFNQTtJQUV4QkMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1PLFlBQVksSUFBTTtZQUN0QixNQUFNQyxTQUFTQyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVc7WUFDckQsTUFBTUMsU0FBUyxJQUFJVixxREFBd0IsQ0FBQyxDQUFDLE1BQU1NLFFBQVEsTUFBTUEsUUFBUSxLQUFLLENBQUMsS0FBSyxLQUFLO1lBQ3pGSSxPQUFPRSxRQUFRLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEtBQUs7WUFDOUJILE9BQU9JLE1BQU0sQ0FBQyxHQUFHLEdBQUc7WUFDcEIsT0FBT0o7UUFDVDtRQUNBTixVQUFVVyxPQUFPLEdBQUdWO0lBQ3RCLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTixzREFBTUE7UUFDTGlCLE9BQU87WUFBRUMsUUFBUTtRQUFPO1FBQzVCQyxJQUFJO1lBQUVDLFdBQVcsSUFBSTtRQUFDO1FBQ3RCQyxXQUFXO1lBQUVDLFNBQVMsSUFBSTtZQUFFQyxNQUFNdEIsbURBQXNCO1FBQUM7UUFDekRVLFFBQVE7WUFBRUUsVUFBVTtnQkFBQztnQkFBSztnQkFBSzthQUFJO1lBQUVZLElBQUk7Z0JBQUM7Z0JBQUc7Z0JBQUc7YUFBRTtZQUFFQyxLQUFLO1FBQUs7OzBCQUU5RCw4REFBQ0M7Z0JBQWFDLFdBQVc7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFXaEIsVUFBVTtvQkFBQztvQkFBSTtvQkFBSTtpQkFBRzs7Ozs7OzBCQUNsQyw4REFBQ1YsNkRBQVNBOzs7OzswQkFDViw4REFBQ0QsNERBQW9CQTs7Ozs7Ozs7Ozs7QUFHdkI7R0EzQlNFO0tBQUFBO0FBK0JULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3QuanM/NTE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYW52YXMgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuaW1wb3J0IE15T3J0aG9ncmFwaGljQ2FtZXJhIGZyb20gJy4uL2NvbXBvbmVudHMvTXlDYW1lcmEnO1xuaW1wb3J0IExhbmRzY2FwZSBmcm9tICcuLi9jb21wb25lbnRzL0xhbmRzY2FwZSc7XG5cbmZ1bmN0aW9uIFByb2plY3QoKSB7XG4gIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2V0Q2FtZXJhID0gKCkgPT4ge1xuICAgICAgY29uc3QgYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKC0yMDAgKiBhc3BlY3QsIDIwMCAqIGFzcGVjdCwgMjAwLCAtMjAwLCAwLjEsIDEwMDApO1xuICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCgyMDAsIDQwMCwgMjAwKTtcbiAgICAgIGNhbWVyYS5sb29rQXQoMCwgMCwgMCk7XG4gICAgICByZXR1cm4gY2FtZXJhO1xuICAgIH07XG4gICAgY2FtZXJhUmVmLmN1cnJlbnQgPSBzZXRDYW1lcmEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENhbnZhc1xuICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNzB2aCcgfX1cbiAgZ2w9e3sgYW50aWFsaWFzOiB0cnVlIH19XG4gIHNoYWRvd01hcD17eyBlbmFibGVkOiB0cnVlLCB0eXBlOiBUSFJFRS5QQ0ZTb2Z0U2hhZG93TWFwIH19XG4gIGNhbWVyYT17eyBwb3NpdGlvbjogWzIwMCwgMjAwLCAyMDBdLCB1cDogWzAsIDEsIDBdLCBmYXI6IDEwMDAgfX1cbj5cbiAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cbiAgPHBvaW50TGlnaHQgcG9zaXRpb249e1sxMCwgMTAsIDEwXX0gLz5cbiAgPExhbmRzY2FwZSAvPlxuICA8TXlPcnRob2dyYXBoaWNDYW1lcmEgLz5cbjwvQ2FudmFzPlxuICApO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJDYW52YXMiLCJUSFJFRSIsIk15T3J0aG9ncmFwaGljQ2FtZXJhIiwiTGFuZHNjYXBlIiwiUHJvamVjdCIsImNhbWVyYVJlZiIsInNldENhbWVyYSIsImFzcGVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwiY3VycmVudCIsInN0eWxlIiwiaGVpZ2h0IiwiZ2wiLCJhbnRpYWxpYXMiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwidHlwZSIsIlBDRlNvZnRTaGFkb3dNYXAiLCJ1cCIsImZhciIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsInBvaW50TGlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project.js\n"));

/***/ })

});