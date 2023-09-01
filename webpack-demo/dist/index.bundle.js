"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/hello-less.less":
/*!*****************************!*\
  !*** ./src/hello-less.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/hello-scss.scss":
/*!*****************************!*\
  !*** ./src/hello-scss.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ "./src/print.js");
/* harmony import */ var _hello_less_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello-less.less */ "./src/hello-less.less");
/* harmony import */ var _hello_scss_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-scss.scss */ "./src/hello-scss.scss");





function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());


/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe() {
  console.log("I get called from print.js!");
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ1U7QUFDTjtBQUNBOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGtEQUFNO0FBQzVCOztBQUVBO0FBQ0EsZ0JBQWdCLGlEQUFPOztBQUV2Qjs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQmU7QUFDZjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hlbGxvLWxlc3MubGVzcz9kYjY2Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9oZWxsby1zY3NzLnNjc3M/ZjU5ZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBwcmludE1lIGZyb20gXCIuL3ByaW50LmpzXCI7XG5pbXBvcnQgXCIuL2hlbGxvLWxlc3MubGVzc1wiO1xuaW1wb3J0IFwiLi9oZWxsby1zY3NzLnNjc3NcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcIndlYnBhY2tcIl0sIFwiIFwiKTtcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGVsbG9cIik7XG5cbiAgYnRuLmlubmVySFRNTCA9IFwiQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlIVwiO1xuICBidG4ub25jbGljayA9IHByaW50TWU7XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChidG4pO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIGNvbnNvbGUubG9nKFwiSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9