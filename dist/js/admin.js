/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_navbar__WEBPACK_IMPORTED_MODULE_0__);\n\nfeather.replace();\nvar ctx = document.getElementById(\"sales_chart\").getContext(\"2d\");\nvar myChart = new Chart(ctx, {\n  type: \"line\",\n  data: {\n    labels: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"],\n    datasets: [{\n      label: \"# of Sales\",\n      data: [12, 19, 3, 5, 2, 3, 15, 20, 10, 30, 11, 21],\n      backgroundColor: [\"rgba(255, 99, 132, 0.2)\", \"rgba(54, 162, 235, 0.2)\", \"rgba(255, 206, 86, 0.2)\", \"rgba(75, 192, 192, 0.2)\", \"rgba(153, 102, 255, 0.2)\", \"rgba(255, 159, 64, 0.2)\", \"rgba(255, 99, 132, 0.2)\", \"rgba(54, 162, 235, 0.2)\", \"rgba(255, 206, 86, 0.2)\", \"rgba(75, 192, 192, 0.2)\", \"rgba(153, 102, 255, 0.2)\", \"rgba(255, 159, 64, 0.2)\"],\n      borderColor: ['#1115'],\n      borderWidth: 1,\n      tension: 0.5\n    }]\n  },\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true,\n        ticks: {\n          callback: function callback(value) {\n            return value + 'K $';\n          }\n        }\n      }\n    }\n  }\n});\n/**\r\n * trigger all bootstrap tooltip\r\n */\n\nvar tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));\ntooltipTriggerList.map(function (tooltipTriggerEl) {\n  if (!tooltipTriggerEl.hasAttribute('data-bs-toggle')) {\n    tooltipTriggerEl.setAttribute('data-bs-toggle', 'tooltip');\n    tooltipTriggerEl.setAttribute('data-bs-placement', 'top');\n  }\n\n  return new bootstrap.Tooltip(tooltipTriggerEl);\n});\n\n//# sourceURL=webpack://dashboard/./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/***/ (() => {

eval("var sidebarTogglers = [].slice.call(document.querySelectorAll('[data-toggle=\"sidebar\"]'));\nsidebarTogglers.map(function (toggler) {\n  var targetSelector = toggler.getAttribute(\"href\") || toggler.getAttribute(\"data-target\");\n  var target = document.querySelector(targetSelector);\n  toggler.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    console.log('test');\n\n    if (!target) {\n      throw new TypeError(\"toggler selector is not a valid HTMLElement\");\n    }\n\n    if (target.classList.contains(\"sidebar-slide\")) {\n      target.classList.remove(\"sidebar-slide\");\n    } else {\n      target.classList.add(\"sidebar-slide\");\n    }\n  });\n});\n\n//# sourceURL=webpack://dashboard/./src/js/navbar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;