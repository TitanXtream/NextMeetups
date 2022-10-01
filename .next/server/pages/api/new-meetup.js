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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://titanOcean:titanb24@nextcluster.bka5mnj.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollections = db.collection(\"meetups\");\n        const result = await meetupsCollections.insertOne(data);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFbkMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUUvQixJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFFdkIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsTUFBTSxFQUFDQyxLQUFLLEdBQUNDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxXQUFXLEdBQUMsR0FBR0wsSUFBSTtRQUVoRCxNQUFNTSxNQUFNLEdBQUcsTUFBTVgsd0RBQW1CLENBQUMsdUdBQXVHLENBQUM7UUFDakosTUFBTWEsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUV0QixNQUFNQyxrQkFBa0IsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRW5ELE1BQU1DLE1BQU0sR0FBRyxNQUFNRixrQkFBa0IsQ0FBQ0csU0FBUyxDQUFDWixJQUFJLENBQUM7UUFFdkRNLE1BQU0sQ0FBQ08sS0FBSyxFQUFFLENBQUM7UUFFZmYsR0FBRyxDQUFDZ0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFFLGlCQUFpQjtTQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0FBQ0gsQ0FBQztBQUVELGlFQUFlcEIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSAnbW9uZ29kYidcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuXHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHlcclxuXHJcbiAgICBjb25zdCB7dGl0bGUsaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9ufSA9IGRhdGE7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly90aXRhbk9jZWFuOnRpdGFuYjI0QG5leHRjbHVzdGVyLmJrYTVtbmoubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9ucy5pbnNlcnRPbmUoZGF0YSk7IFxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiAnTWVldHVwIGluc2VydGVkJ30pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();