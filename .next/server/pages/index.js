"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-three/fiber */ \"@react-three/fiber\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/drei */ \"@react-three/drei\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"three\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_4__]);\nthree__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Globe() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"sphereBufferGeometry\", {\n                args: [\n                    5,\n                    64,\n                    64\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                color: \"blue\"\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nfunction House() {\n    const houseRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const gltf = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useGLTF)(\"/models/cartoon_house/scene.gltf\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n        ref: houseRef,\n        object: gltf.scene,\n        scale: 0.3,\n        position: [\n            0,\n            4.75,\n            -0.5\n        ],\n        rotation: [\n            0,\n            Math.PI / 4,\n            0\n        ]\n    }, void 0, false, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {\n        style: {\n            width: \"100%\",\n            height: \"85vh\"\n        },\n        gl: {\n            antialias: true\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {\n                makeDefault: true,\n                position: [\n                    15,\n                    15,\n                    15\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Stars, {}, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.OrbitControls, {}, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                intensity: 0.5\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                intensity: 1,\n                position: [\n                    5,\n                    5,\n                    5\n                ]\n            }, void 0, false, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {\n                fallback: null,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Globe, {}, void 0, false, {\n                        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(House, {}, void 0, false, {\n                        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUN5QztBQUM1QztBQUNWO0FBRS9CLFNBQVNRLFFBQVE7SUFDZixxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBcUJDLE1BQU07b0JBQUM7b0JBQUc7b0JBQUk7aUJBQUc7Ozs7OzswQkFDdkMsOERBQUNDO2dCQUFxQkMsT0FBTTs7Ozs7Ozs7Ozs7O0FBR2xDO0FBRUEsU0FBU0MsUUFBUTtJQUNmLE1BQU1DLFdBQVdULDZDQUFNQTtJQUN2QixNQUFNVSxPQUFPWiwwREFBT0EsQ0FBQztJQUVyQixxQkFDRSw4REFBQ2E7UUFDQ0MsS0FBS0g7UUFDTEksUUFBUUgsS0FBS0ksS0FBSztRQUNsQkMsT0FBTztRQUNQQyxVQUFVO1lBQUM7WUFBRztZQUFNLENBQUM7U0FBSTtRQUN6QkMsVUFBVTtZQUFDO1lBQUdDLEtBQUtDLEVBQUUsR0FBRztZQUFHO1NBQUU7Ozs7OztBQUduQztBQUVBLFNBQVNDLE9BQU87SUFDZCxxQkFDRSw4REFBQzFCLHNEQUFNQTtRQUNQMkIsT0FBTztZQUFFQyxPQUFPO1lBQVFDLFFBQVE7UUFBTztRQUN2Q0MsSUFBSTtZQUFFQyxXQUFXLElBQUk7UUFBQzs7MEJBQ3BCLDhEQUFDNUIsZ0VBQWlCQTtnQkFBQzZCLFdBQVc7Z0JBQUNWLFVBQVU7b0JBQUM7b0JBQUk7b0JBQUk7aUJBQUc7Ozs7OzswQkFDckQsOERBQUNwQixvREFBS0E7Ozs7OzBCQUNOLDhEQUFDRCw0REFBYUE7Ozs7OzBCQUNkLDhEQUFDZ0M7Z0JBQWFDLFdBQVc7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFpQkQsV0FBVztnQkFBR1osVUFBVTtvQkFBQztvQkFBRztvQkFBRztpQkFBRTs7Ozs7OzBCQUNuRCw4REFBQ2pCLDJDQUFRQTtnQkFBQytCLFVBQVUsSUFBSTs7a0NBQ3RCLDhEQUFDNUI7Ozs7O2tDQUNELDhEQUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDtBQUVBLGlFQUFlWSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHl1LXBvcnRmb2xpby8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMsIFN0YXJzLCBQZXJzcGVjdGl2ZUNhbWVyYSwgdXNlR0xURiB9IGZyb20gJ0ByZWFjdC10aHJlZS9kcmVpJztcbmltcG9ydCB7IFN1c3BlbnNlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmZ1bmN0aW9uIEdsb2JlKCkge1xuICByZXR1cm4gKFxuICAgIDxtZXNoPlxuICAgICAgPHNwaGVyZUJ1ZmZlckdlb21ldHJ5IGFyZ3M9e1s1LCA2NCwgNjRdfSAvPlxuICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPVwiYmx1ZVwiIC8+XG4gICAgPC9tZXNoPlxuICApO1xufVxuXG5mdW5jdGlvbiBIb3VzZSgpIHtcbiAgY29uc3QgaG91c2VSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgZ2x0ZiA9IHVzZUdMVEYoJy9tb2RlbHMvY2FydG9vbl9ob3VzZS9zY2VuZS5nbHRmJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8cHJpbWl0aXZlXG4gICAgICByZWY9e2hvdXNlUmVmfVxuICAgICAgb2JqZWN0PXtnbHRmLnNjZW5lfVxuICAgICAgc2NhbGU9ezAuM31cbiAgICAgIHBvc2l0aW9uPXtbMCwgNC43NSwgLTAuNV19XG4gICAgICByb3RhdGlvbj17WzAsIE1hdGguUEkgLyA0LCAwXX1cbiAgICAvPlxuICApO1xufVxuXG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxDYW52YXNcbiAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICc4NXZoJyB9fVxuICAgIGdsPXt7IGFudGlhbGlhczogdHJ1ZSB9fT5cbiAgICAgIDxQZXJzcGVjdGl2ZUNhbWVyYSBtYWtlRGVmYXVsdCBwb3NpdGlvbj17WzE1LCAxNSwgMTVdfSAvPlxuICAgICAgPFN0YXJzIC8+XG4gICAgICA8T3JiaXRDb250cm9scyAvPlxuICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNX0gLz5cbiAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGludGVuc2l0eT17MX0gcG9zaXRpb249e1s1LCA1LCA1XX0gLz5cbiAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17bnVsbH0+XG4gICAgICAgIDxHbG9iZSAvPlxuICAgICAgICA8SG91c2UgLz5cbiAgICAgIDwvU3VzcGVuc2U+XG4gICAgPC9DYW52YXM+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIkNhbnZhcyIsIk9yYml0Q29udHJvbHMiLCJTdGFycyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidXNlR0xURiIsIlN1c3BlbnNlIiwidXNlUmVmIiwiVEhSRUUiLCJHbG9iZSIsIm1lc2giLCJzcGhlcmVCdWZmZXJHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwiSG91c2UiLCJob3VzZVJlZiIsImdsdGYiLCJwcmltaXRpdmUiLCJyZWYiLCJvYmplY3QiLCJzY2VuZSIsInNjYWxlIiwicG9zaXRpb24iLCJyb3RhdGlvbiIsIk1hdGgiLCJQSSIsIkhvbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZ2wiLCJhbnRpYWxpYXMiLCJtYWtlRGVmYXVsdCIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsImRpcmVjdGlvbmFsTGlnaHQiLCJmYWxsYmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@react-three/drei":
/*!************************************!*\
  !*** external "@react-three/drei" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ "@react-three/fiber":
/*!*************************************!*\
  !*** external "@react-three/fiber" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "three":
/*!************************!*\
  !*** external "three" ***!
  \************************/
/***/ ((module) => {

module.exports = import("three");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();