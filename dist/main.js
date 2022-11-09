/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-config/./src/style.css?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"deleteToDo\": () => (/* binding */ deleteToDo),\n/* harmony export */   \"updateTodo\": () => (/* binding */ updateTodo)\n/* harmony export */ });\nconst getListFromLocal = () => {\n  if (localStorage.getItem('todos')) {\n    return JSON.parse(localStorage.getItem('todos'));\n  }\n  return [];\n};\n\n// eslint-disable-next-line import/no-mutable-exports\nlet toDos = getListFromLocal();\n\nconst addTodo = (description, toDosArr = toDos) => {\n  const data = {\n    description,\n    completed: false,\n    index: toDosArr.length + 1,\n  };\n\n  toDos.push(data);\n\n  // Save to local\n  localStorage.setItem('todos', JSON.stringify(toDos));\n};\n\nconst deleteToDo = (index) => {\n  toDos = toDos.filter((todo) => todo.index !== index);\n  //   Sort\n  const newArr = toDos.sort((a, b) => a.index - b.index);\n  // Update index\n  newArr.forEach((obj, i) => {\n    obj.index = i + 1;\n  });\n\n  //   Save to local\n  localStorage.setItem('todos', JSON.stringify(newArr));\n};\n\nconst updateTodo = (index, message, status = false) => {\n  const itemToUpdate = toDos.find((item) => item.index === index);\n  const todoArrIndex = itemToUpdate.index - 1;\n\n  const initialDescription = itemToUpdate.description;\n\n  if (message === initialDescription) return;\n\n  itemToUpdate.description = message;\n  itemToUpdate.completed = status;\n\n  toDos[todoArrIndex] = itemToUpdate;\n\n  //   Save to local\n  localStorage.setItem('todos', JSON.stringify(toDos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getListFromLocal);\n\n\n//# sourceURL=webpack://webpack-config/./src/crud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemMarkupGen\": () => (/* binding */ itemMarkupGen),\n/* harmony export */   \"populateList\": () => (/* binding */ populateList)\n/* harmony export */ });\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _interactiveList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactiveList.js */ \"./src/interactiveList.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\nconst todoContainer = document.querySelector(\".todo-list\");\nconst clearListBtn = document.querySelector(\".btn-clear\");\n\nconst itemMarkupGen = (\n  data\n) => `<li class=\"todo\" data-index=\"${data.index}\" data-completed=\"${data.completed}\"> \n  <label for=\"${data.index}\"> <input type=\"checkbox\" class=\"checkbox\"></label>\n  <input type=\"text\" id=\"${data.index}\" class=\"item-description-input\" name=\"${data.index}\" value=\"${data.description}\">\n   <div class=\"fa-list-icon\"><i\n  class=\"fa-solid fa-ellipsis-vertical\"></i></div> \n  </li>`;\n\nconst populateList = (arr) => {\n  let listString = \"\";\n\n  const sortedArr = arr.sort((a, b) => a.index - b.index);\n\n  sortedArr.forEach((item) => {\n    listString += itemMarkupGen(item);\n  });\n\n  todoContainer.innerHTML = listString;\n};\n\npopulateList((0,_crud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n// Add to do\nwindow.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") {\n    const { value } = e.target;\n\n    if (!value?.trim()) return;\n\n    if (e.target.classList.contains(\"add-todo-input\")) {\n      (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)(value);\n      // Empty input\n      e.target.value = \"\";\n      populateList((0,_crud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n      return;\n    }\n\n    if (e.target.classList.contains(\"item-description-input\")) {\n      const parentEl = e.target.closest(\".todo\");\n\n      const { index } = parentEl.dataset;\n\n      (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.updateTodo)(+index, value);\n      populateList((0,_crud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    }\n  }\n});\n\n// Deleting\ntodoContainer.addEventListener(\"click\", (e) => {\n  const clickedItem = e.target.closest(\".fa-list-icon\");\n\n  if (!clickedItem) return;\n\n  clickedItem\n    .querySelector(\".fa-solid\")\n    .classList.remove(\"fa-ellipsis-vertical\");\n\n  clickedItem.querySelector(\".fa-solid\").classList.add(\"fa-trash-can\");\n\n  const trashIcon = clickedItem.querySelector(\".fa-trash-can\");\n\n  trashIcon?.addEventListener(\"click\", () => {\n    const parentEle = trashIcon.closest(\".todo\");\n    const { index } = parentEle.dataset;\n\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.deleteToDo)(+index);\n    populateList((0,_crud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  });\n});\n\nlet indexesToRemove = [];\n\ntodoContainer.addEventListener(\"click\", (e) => {\n  const activeEl = e.target.closest(\".checkbox\");\n  if (!activeEl) return;\n  const parentEl = activeEl.closest(\".todo\");\n\n  // eslint-disable-next-line no-undef\n  indexesToRemove = (0,_interactiveList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(parentEl);\n});\n\nclearListBtn.addEventListener(\"click\", () => {\n  indexesToRemove.forEach((i) => {\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.deleteToDo)(i);\n  });\n  populateList((0,_crud_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://webpack-config/./src/index.js?");

/***/ }),

/***/ "./src/interactiveList.js":
/*!********************************!*\
  !*** ./src/interactiveList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst checkoffItem = (todoListItem) => {\n  const todoListLi = todoListItem;\n  const checkbox = todoListItem.querySelector('.checkbox');\n  const input = todoListItem.querySelector('.item-description-input');\n\n  const todoContainer = todoListItem.closest('.todo-list');\n\n  if (checkbox.checked) {\n    todoListLi.dataset.completed = true;\n    input.classList.add('checked');\n  } else {\n    todoListLi.dataset.completed = false;\n    input.classList.remove('checked');\n  }\n\n  // Indexes to remove\n  const indexesToRemove = [];\n  todoContainer.querySelectorAll('.todo').forEach((todoNode) => {\n    if (todoNode.dataset.completed === 'true') {\n      indexesToRemove.push(+todoNode.dataset.index);\n    }\n  });\n\n  return indexesToRemove;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkoffItem);\n\n\n//# sourceURL=webpack://webpack-config/./src/interactiveList.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/style.css");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;