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

/***/ "./components/MyCamera.js":
/*!********************************!*\
  !*** ./components/MyCamera.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MyOrthographicCamera = ()=>{\n    _s();\n    const cameraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const { set  } = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cameraRef.current) {\n            set({\n                camera: cameraRef.current\n            });\n        }\n    }, [\n        set\n    ]);\n    const aspect = window.innerWidth / window.innerHeight;\n    const width = 200 * aspect;\n    const height = 200;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"orthographicCamera\", {\n        ref: cameraRef,\n        args: [\n            -width,\n            width,\n            height,\n            -height,\n            0.1,\n            1000\n        ],\n        position: [\n            200,\n            130,\n            200\n        ],\n        onUpdate: (camera)=>camera.lookAt(0, 0, 0)\n    }, void 0, false, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/components/MyCamera.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MyOrthographicCamera, \"Mls+0pCqumN3lisdJ5CAx4QQBeU=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree\n    ];\n});\n_c = MyOrthographicCamera;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyOrthographicCamera);\nvar _c;\n$RefreshReg$(_c, \"MyOrthographicCamera\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL015Q2FtZXJhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBQ1c7QUFDSTtBQUU5QyxNQUFNSSx1QkFBdUIsSUFBTTs7SUFDakMsTUFBTUMsWUFBWUgsNkNBQU1BO0lBQ3hCLE1BQU0sRUFBRUksSUFBRyxFQUFFLEdBQUdILDREQUFRQTtJQUV4QkYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlJLFVBQVVFLE9BQU8sRUFBRTtZQUNyQkQsSUFBSTtnQkFBRUUsUUFBUUgsVUFBVUUsT0FBTztZQUFDO1FBQ2xDLENBQUM7SUFDSCxHQUFHO1FBQUNEO0tBQUk7SUFFUixNQUFNRyxTQUFTQyxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVc7SUFDckQsTUFBTUMsUUFBUSxNQUFNSjtJQUNwQixNQUFNSyxTQUFTO0lBRWYscUJBQ0UsOERBQUNDO1FBQ0NDLEtBQUtYO1FBQ0xZLE1BQU07WUFBQyxDQUFDSjtZQUFPQTtZQUFPQztZQUFRLENBQUNBO1lBQVE7WUFBSztTQUFLO1FBQ2pESSxVQUFVO1lBQUM7WUFBSztZQUFLO1NBQUk7UUFDekJDLFVBQVUsQ0FBQ1gsU0FBV0EsT0FBT1ksTUFBTSxDQUFDLEdBQUcsR0FBRzs7Ozs7O0FBR2hEO0dBdEJNaEI7O1FBRVlELHdEQUFRQTs7O0tBRnBCQztBQXdCTiwrREFBZUEsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXlDYW1lcmEuanM/ZjVmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRocmVlIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcblxuY29uc3QgTXlPcnRob2dyYXBoaWNDYW1lcmEgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbWVyYVJlZiA9IHVzZVJlZigpO1xuICBjb25zdCB7IHNldCB9ID0gdXNlVGhyZWUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChjYW1lcmFSZWYuY3VycmVudCkge1xuICAgICAgc2V0KHsgY2FtZXJhOiBjYW1lcmFSZWYuY3VycmVudCB9KTtcbiAgICB9XG4gIH0sIFtzZXRdKTtcblxuICBjb25zdCBhc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3Qgd2lkdGggPSAyMDAgKiBhc3BlY3Q7XG4gIGNvbnN0IGhlaWdodCA9IDIwMDtcblxuICByZXR1cm4gKFxuICAgIDxvcnRob2dyYXBoaWNDYW1lcmFcbiAgICAgIHJlZj17Y2FtZXJhUmVmfVxuICAgICAgYXJncz17Wy13aWR0aCwgd2lkdGgsIGhlaWdodCwgLWhlaWdodCwgMC4xLCAxMDAwXX1cbiAgICAgIHBvc2l0aW9uPXtbMjAwLCAxMzAsIDIwMF19XG4gICAgICBvblVwZGF0ZT17KGNhbWVyYSkgPT4gY2FtZXJhLmxvb2tBdCgwLCAwLCAwKX1cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlPcnRob2dyYXBoaWNDYW1lcmE7XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVRocmVlIiwiTXlPcnRob2dyYXBoaWNDYW1lcmEiLCJjYW1lcmFSZWYiLCJzZXQiLCJjdXJyZW50IiwiY2FtZXJhIiwiYXNwZWN0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJvcnRob2dyYXBoaWNDYW1lcmEiLCJyZWYiLCJhcmdzIiwicG9zaXRpb24iLCJvblVwZGF0ZSIsImxvb2tBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MyCamera.js\n"));

/***/ })

});