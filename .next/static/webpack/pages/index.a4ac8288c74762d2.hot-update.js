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

/***/ "./components/SpeechBubble.js":
/*!************************************!*\
  !*** ./components/SpeechBubble.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-spring/three */ \"./node_modules/@react-spring/three/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction SpeechBubble(param) {\n    let { msg  } = param;\n    _s();\n    const bubbleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const texture = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = 800;\n        canvas.height = 178;\n        const ctx = canvas.getContext(\"2d\");\n        ctx.shadowColor = \"black\";\n        ctx.shadowBlur = 10;\n        ctx.shadowOffsetX = 2;\n        ctx.shadowOffsetY = 2;\n        ctx.fillStyle = \"white\";\n        ctx.strokeStyle = \"black\";\n        ctx.lineWidth = 5;\n        ctx.beginPath();\n        ctx.moveTo(20, 15);\n        ctx.lineTo(780, 15);\n        ctx.quadraticCurveTo(800, 15, 800, 35);\n        ctx.lineTo(800, 133);\n        ctx.quadraticCurveTo(800, 153, 780, 153);\n        ctx.lineTo(20, 153);\n        ctx.quadraticCurveTo(0, 153, 0, 133);\n        ctx.lineTo(0, 35);\n        ctx.quadraticCurveTo(0, 15, 20, 15);\n        ctx.closePath();\n        ctx.fill();\n        ctx.stroke();\n        ctx.shadowColor = \"black\";\n        ctx.shadowBlur = 5;\n        ctx.shadowOffsetX = 1;\n        ctx.shadowOffsetY = 1;\n        ctx.fillStyle = \"black\";\n        ctx.font = \"36pt Comic Sans MS\";\n        ctx.textBaseline = \"top\";\n        ctx.fillText(msg, 120, 65);\n        const texture = new three__WEBPACK_IMPORTED_MODULE_3__.CanvasTexture(canvas);\n        texture.needsUpdate = true;\n        return texture;\n    }, [\n        msg\n    ]);\n    const material = new three__WEBPACK_IMPORTED_MODULE_3__.SpriteMaterial({\n        map: texture,\n        color: 0xffffff\n    });\n    const [{ y  }] = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring)(()=>({\n            from: {\n                y: 0\n            },\n            to: async (next)=>{\n                while(1){\n                    await next({\n                        y: 0.4,\n                        delay: 700\n                    });\n                    await next({\n                        y: -0.1,\n                        delay: 700\n                    });\n                }\n            },\n            config: {\n                tension: 150,\n                friction: 20\n            }\n        }));\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame)(()=>{\n        if (bubbleRef.current) {\n            bubbleRef.current.position.y = 10 + y.get();\n            bubbleRef.current.position.x = 0;\n            bubbleRef.current.position.z = 0;\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_three__WEBPACK_IMPORTED_MODULE_2__.animated.sprite, {\n        ref: bubbleRef,\n        scale: [\n            8,\n            2,\n            1\n        ],\n        material: material\n    }, void 0, false, {\n        fileName: \"/Users/tiramisu/sei/personal/dyu-portfolio/components/SpeechBubble.js\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, this);\n}\n_s(SpeechBubble, \"1B43FnYc8gdswr4T3Xx9Cg+GLgU=\", false, function() {\n    return [\n        _react_spring_three__WEBPACK_IMPORTED_MODULE_2__.useSpring,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.useFrame\n    ];\n});\n_c = SpeechBubble;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeechBubble);\nvar _c;\n$RefreshReg$(_c, \"SpeechBubble\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1FBQ2hCbEIsVUFBVUE7Ozs7OztBQUdsQjtHQXZFUzdCOztRQTZDU0YsMERBQVNBO1FBV3pCRCx3REFBUUE7OztLQXhEREc7QUF5RVQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TcGVlY2hCdWJibGUuanM/ZWMzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTcHJpdGVNYXRlcmlhbCwgQ2FudmFzVGV4dHVyZSB9IGZyb20gJ3RocmVlJztcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdAcmVhY3Qtc3ByaW5nL3RocmVlJztcblxuZnVuY3Rpb24gU3BlZWNoQnViYmxlKHsgbXNnIH0pIHtcbiAgY29uc3QgYnViYmxlUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgdGV4dHVyZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMTc4O1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5zaGFkb3dDb2xvciA9ICdibGFjayc7XG4gICAgY3R4LnNoYWRvd0JsdXIgPSAxMDtcbiAgICBjdHguc2hhZG93T2Zmc2V0WCA9IDI7XG4gICAgY3R4LnNoYWRvd09mZnNldFkgPSAyO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDU7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oMjAsIDE1KTtcbiAgICBjdHgubGluZVRvKDc4MCwgMTUpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKDgwMCwgMTUsIDgwMCwgMzUpO1xuICAgIGN0eC5saW5lVG8oODAwLCAxMzMpO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKDgwMCwgMTUzLCA3ODAsIDE1Myk7XG4gICAgY3R4LmxpbmVUbygyMCwgMTUzKTtcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbygwLCAxNTMsIDAsIDEzMyk7XG4gICAgY3R4LmxpbmVUbygwLCAzNSk7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oMCwgMTUsIDIwLCAxNSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LnNoYWRvd0NvbG9yID0gJ2JsYWNrJztcbiAgICBjdHguc2hhZG93Qmx1ciA9IDU7XG4gICAgY3R4LnNoYWRvd09mZnNldFggPSAxO1xuICAgIGN0eC5zaGFkb3dPZmZzZXRZID0gMTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguZm9udCA9IFwiMzZwdCBDb21pYyBTYW5zIE1TXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgY3R4LmZpbGxUZXh0KG1zZywgMTIwLCA2NSk7XG5cbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICByZXR1cm4gdGV4dHVyZTtcbiAgfSwgW21zZ10pO1xuXG4gIGNvbnN0IG1hdGVyaWFsID0gbmV3IFNwcml0ZU1hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlLCBjb2xvcjogMHhmZmZmZmYgfSk7XG5cbiAgY29uc3QgW3sgeSB9XSA9IHVzZVNwcmluZygoKSA9PiAoe1xuICAgIGZyb206IHsgeTogMCB9LFxuICAgIHRvOiBhc3luYyAobmV4dCkgPT4ge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgYXdhaXQgbmV4dCh7IHk6IDAuNCwgZGVsYXk6IDcwMCB9KTtcbiAgICAgICAgYXdhaXQgbmV4dCh7IHk6IC0wLjEsIGRlbGF5OiA3MDAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjb25maWc6IHsgdGVuc2lvbjogMTUwLCBmcmljdGlvbjogMjAgfSxcbiAgfSkpO1xuXG4gIHVzZUZyYW1lKCgpID0+IHtcbiAgICBpZiAoYnViYmxlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGJ1YmJsZVJlZi5jdXJyZW50LnBvc2l0aW9uLnkgPSAxMCArIHkuZ2V0KCk7XG4gICAgICBidWJibGVSZWYuY3VycmVudC5wb3NpdGlvbi54ID0gMDtcbiAgICAgIGJ1YmJsZVJlZi5jdXJyZW50LnBvc2l0aW9uLnogPSAwO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICAgIDxhbmltYXRlZC5zcHJpdGVcbiAgICAgICAgcmVmPXtidWJibGVSZWZ9XG4gICAgICAgIHNjYWxlPXtbOCwgMiwgMV19XG4gICAgICAgIG1hdGVyaWFsPXttYXRlcmlhbH1cbiAgICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVjaEJ1YmJsZTtcblxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VNZW1vIiwiU3ByaXRlTWF0ZXJpYWwiLCJDYW52YXNUZXh0dXJlIiwidXNlRnJhbWUiLCJ1c2VTcHJpbmciLCJhbmltYXRlZCIsIlNwZWVjaEJ1YmJsZSIsIm1zZyIsImJ1YmJsZVJlZiIsInRleHR1cmUiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImdldENvbnRleHQiLCJzaGFkb3dDb2xvciIsInNoYWRvd0JsdXIiLCJzaGFkb3dPZmZzZXRYIiwic2hhZG93T2Zmc2V0WSIsImZpbGxTdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwicXVhZHJhdGljQ3VydmVUbyIsImNsb3NlUGF0aCIsImZpbGwiLCJzdHJva2UiLCJmb250IiwidGV4dEJhc2VsaW5lIiwiZmlsbFRleHQiLCJuZWVkc1VwZGF0ZSIsIm1hdGVyaWFsIiwibWFwIiwiY29sb3IiLCJ5IiwiZnJvbSIsInRvIiwibmV4dCIsImRlbGF5IiwiY29uZmlnIiwidGVuc2lvbiIsImZyaWN0aW9uIiwiY3VycmVudCIsInBvc2l0aW9uIiwiZ2V0IiwieCIsInoiLCJzcHJpdGUiLCJyZWYiLCJzY2FsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SpeechBubble.js\n"));

/***/ })

});