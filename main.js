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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --bg-color: #1c1c1e;\r\n  --text-color: #ffffff;\r\n  --container-color: #e0e0e0;\r\n  --btn-color: #2c2c2e;\r\n  --btn-hover: #3a3a3c;\r\n  --operator-color: #ff9500;\r\n  --operator-hover: #ffa733;\r\n  --accent: #34c759;\r\n}\r\n\r\nbody.light-theme {\r\n  --bg-color: #f7f7f7;\r\n  --text-color: #1c1c1e;\r\n  --container-color: #2c2c2e;\r\n  --btn-color: #e0e0e0;\r\n  --btn-hover: #d5d5d5;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Segoe UI', sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.theme-toggle {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 26px;\r\n}\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\r\n  border-radius: 34px;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n.slider:before {\r\n  content: '';\r\n  position: absolute;\r\n  height: 20px;\r\n  width: 20px;\r\n  left: 3px;\r\n  bottom: 3px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  transition: 0.4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: #66bb6a;\r\n}\r\ninput:checked + .slider:before {\r\n  transform: translateX(24px);\r\n}\r\n\r\n.calculator {\r\n  width: 320px;\r\n  background-color: var(--container-color);\r\n  border-radius: 16px;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.display {\r\n  background-color: var(--bg-color);\r\n  color: var(--text-color);\r\n  font-size: 2.8rem;\r\n  text-align: right;\r\n  padding: 10px;\r\n  min-height: 60px;\r\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\r\n  overflow-x: auto;\r\n  user-select: none;\r\n}\r\n\r\n.buttons {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 10px;\r\n}\r\n\r\n.btn {\r\n  background-color: var(--btn-color);\r\n  color: var(--text-color);\r\n  border: none;\r\n  padding: 18px;\r\n  border-radius: 10px;\r\n  font-size: 1.4rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease;\r\n}\r\n.btn:hover {\r\n  background-color: var(--btn-hover);\r\n}\r\n.btn:active {\r\n  transform: scale(0.98);\r\n}\r\n\r\n.btn-zero {\r\n  grid-column: span 2;\r\n}\r\n\r\n.btn-operator {\r\n  background-color: var(--operator-color);\r\n}\r\n.btn-operator:hover {\r\n  background-color: var(--operator-hover);\r\n}\r\n\r\n.btn-clear {\r\n  background-color: #ff3b30;\r\n}\r\n.btn-clear:hover {\r\n  background-color: #ff6659;\r\n}\r\n\r\n.btn-equal {\r\n  background-color: var(--accent);\r\n}\r\n.btn-equal:hover {\r\n  background-color: #5de68a;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .calculator {\r\n    width: 90vw;\r\n    padding: 12px;\r\n  }\r\n\r\n  .btn {\r\n    font-size: 1.2rem;\r\n    padding: 14px;\r\n  }\r\n\r\n  .display {\r\n    font-size: 2rem;\r\n    padding: 8px;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/calculation.js":
/*!*******************************!*\
  !*** ./src/js/calculation.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endsWithOperator: () => (/* binding */ endsWithOperator),\n/* harmony export */   formatBigIntResult: () => (/* binding */ formatBigIntResult),\n/* harmony export */   parseNumberToBigInt: () => (/* binding */ parseNumberToBigInt),\n/* harmony export */   prepareOperands: () => (/* binding */ prepareOperands)\n/* harmony export */ });\nfunction endsWithOperator(str) {\n  return /[+\\-*/]$/.test(str);\n}\nfunction parseNumberToBigInt(numStr, scale = 0) {\n  const parts = numStr.split('.');\n  const intStr = parts.join('') + '0'.repeat(scale);\n  return BigInt(intStr);\n}\nfunction formatBigIntResult(resultBigInt, scale) {\n  let resultStr = resultBigInt.toString();\n  const isNegative = resultStr.startsWith('-');\n  if (isNegative) resultStr = resultStr.slice(1);\n  if (scale === 0) {\n    return isNegative ? -Number(resultStr) : Number(resultStr);\n  }\n  if (resultStr.length <= scale) {\n    resultStr = '0'.repeat(scale - resultStr.length + 1) + resultStr;\n  }\n  const pointIndex = resultStr.length - scale;\n  const integerPart = resultStr.slice(0, pointIndex);\n  const fractionalPart = resultStr.slice(pointIndex);\n  const formattedNumber = Number((integerPart === '' ? '0' : integerPart) + '.' + fractionalPart);\n  return isNegative ? -formattedNumber : formattedNumber;\n}\nfunction prepareOperands(a, b, scaleFunc) {\n  const aStr = a.toString();\n  const bStr = b.toString();\n  const aDecimals = (aStr.split('.')[1] || '').length;\n  const bDecimals = (bStr.split('.')[1] || '').length;\n  const scale = scaleFunc(aDecimals, bDecimals);\n  const intA = parseNumberToBigInt(aStr, scale - aDecimals);\n  const intB = parseNumberToBigInt(bStr, scale - bDecimals);\n  return {\n    intA,\n    intB,\n    scale\n  };\n}\n\n//# sourceURL=webpack://project/./src/js/calculation.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   display: () => (/* binding */ display),\n/* harmony export */   updateDisplay: () => (/* binding */ updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n\n\nconst display = document.getElementById('display');\nfunction updateDisplay() {\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput !== '') {\n    display.textContent = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression + _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput;\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression !== '') {\n    display.textContent = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression;\n  } else {\n    display.textContent = '0';\n  }\n}\ndocument.querySelector('.buttons').addEventListener('click', e => {\n  const target = e.target;\n  if (!target.classList.contains('btn')) return;\n  if (target.dataset.value !== undefined) {\n    const val = target.dataset.value;\n    if (val === '.' && _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.includes('.')) return;\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput += val;\n    updateDisplay();\n  } else if (target.dataset.action !== undefined) {\n    const action = target.dataset.action;\n    switch (action) {\n      case 'clear':\n        _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '';\n        _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression = '';\n        updateDisplay();\n        break;\n      case 'toggle-sign':\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.toggleSign)();\n        break;\n      case 'percent':\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.percent)();\n        break;\n      case 'add':\n      case 'subtract':\n      case 'multiply':\n      case 'divide':\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.addOperator)(action);\n        break;\n      case 'equals':\n        (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.handleEquals)();\n        break;\n    }\n  }\n});\ndocument.addEventListener('keydown', event => {\n  const key = event.key;\n  if (key >= '0' && key <= '9' || key === '.') {\n    if (key === '.' && _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.includes('.')) return;\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput += key;\n    updateDisplay();\n  } else if (key === '+' || key === '-' || key === '*' || key === '/') {\n    let action = '';\n    switch (key) {\n      case '+':\n        action = 'add';\n        break;\n      case '-':\n        action = 'subtract';\n        break;\n      case '*':\n        action = 'multiply';\n        break;\n      case '/':\n        action = 'divide';\n        break;\n    }\n    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.addOperator)(action);\n  } else if (key === 'Enter' || key === '=') {\n    event.preventDefault();\n    (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.handleEquals)();\n  } else if (key === 'Backspace') {\n    if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.length > 0) {\n      _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.slice(0, -1);\n    } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression.length > 0) {\n      _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression.slice(0, -1);\n    }\n    updateDisplay();\n  } else if (key === 'Escape') {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '';\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression = '';\n    updateDisplay();\n  }\n});\n\n//# sourceURL=webpack://project/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addOperator: () => (/* binding */ addOperator),\n/* harmony export */   handleEquals: () => (/* binding */ handleEquals),\n/* harmony export */   percent: () => (/* reexport safe */ _math_js__WEBPACK_IMPORTED_MODULE_3__.percent),\n/* harmony export */   toggleSign: () => (/* reexport safe */ _math_js__WEBPACK_IMPORTED_MODULE_3__.toggleSign),\n/* harmony export */   updateDisplay: () => (/* reexport safe */ _dom_js__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _calculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculation.js */ \"./src/js/calculation.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math.js */ \"./src/js/math.js\");\n/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.js */ \"./src/js/theme.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nfunction addOperator(op) {\n  const symbolMap = {\n    add: '+',\n    subtract: '-',\n    multiply: '*',\n    divide: '/'\n  };\n  const symbol = symbolMap[op];\n  if (!symbol) return;\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput === '' && _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression.length > 0 && (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.endsWithOperator)(_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression)) {\n    return;\n  }\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput === '' && _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression === '' && symbol === '-') {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '-';\n    (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)();\n    return;\n  }\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput !== '') {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression += _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput + symbol;\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '';\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression !== '' && !(0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.endsWithOperator)(_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression)) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression += symbol;\n  }\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)();\n}\nfunction handleEquals() {\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput === '' && _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression === '') return;\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression === '') {\n    _dom_js__WEBPACK_IMPORTED_MODULE_2__.display.textContent = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput || '0';\n    return;\n  }\n  _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression += _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput;\n  if ((0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.endsWithOperator)(_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression)) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression.slice(0, -1);\n  }\n  _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '';\n  const result = evaluateExpression(_state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression);\n  _dom_js__WEBPACK_IMPORTED_MODULE_2__.display.textContent = isNaN(result) || result === 'Error' ? 'Error' : result.toString();\n  _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = isNaN(result) || result === 'Error' ? '' : result.toString();\n  _state_js__WEBPACK_IMPORTED_MODULE_0__.state.expression = '';\n}\nfunction evaluateExpression(expr) {\n  if (typeof expr !== 'string') return NaN;\n  expr = expr.replace(/\\s+/g, '');\n  if (expr.length === 0) return NaN;\n  if (/[^0-9+\\-*/.]/.test(expr)) return NaN;\n  const tokens = [];\n  let numberBuffer = '';\n  let lastTokenWasOperator = true;\n  for (let i = 0; i < expr.length; i++) {\n    const char = expr[i];\n    if (/\\d|\\./.test(char)) {\n      numberBuffer += char;\n      lastTokenWasOperator = false;\n    } else if ('+-*/'.includes(char)) {\n      if (char === '-' && lastTokenWasOperator) {\n        numberBuffer = '-';\n        lastTokenWasOperator = true;\n      } else {\n        if (numberBuffer !== '') {\n          tokens.push(numberBuffer);\n          numberBuffer = '';\n        }\n        tokens.push(char);\n        lastTokenWasOperator = true;\n      }\n    }\n  }\n  if (numberBuffer !== '') {\n    tokens.push(numberBuffer);\n  }\n  const precedence = {\n    '+': 1,\n    '-': 1,\n    '*': 2,\n    '/': 2\n  };\n  const outputQueue = [];\n  const operatorStack = [];\n  for (const token of tokens) {\n    if (!isNaN(token)) {\n      outputQueue.push(token);\n    } else if ('+-*/'.includes(token)) {\n      while (operatorStack.length > 0 && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {\n        outputQueue.push(operatorStack.pop());\n      }\n      operatorStack.push(token);\n    }\n  }\n  while (operatorStack.length > 0) {\n    outputQueue.push(operatorStack.pop());\n  }\n  const stack = [];\n  for (const token of outputQueue) {\n    if (!isNaN(token)) {\n      stack.push(parseFloat(token));\n    } else {\n      const b = stack.pop();\n      const a = stack.pop();\n      if (a === undefined || b === undefined) return 'Error';\n      let res;\n      switch (token) {\n        case '+':\n          res = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.add)(a, b);\n          break;\n        case '-':\n          res = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.subtract)(a, b);\n          break;\n        case '*':\n          res = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.multiply)(a, b);\n          break;\n        case '/':\n          if (b === 0) return 'Error';\n          res = (0,_math_js__WEBPACK_IMPORTED_MODULE_3__.divide)(a, b);\n          break;\n        default:\n          return 'Error';\n      }\n      if (typeof res !== 'number' || isNaN(res)) return 'Error';\n      stack.push(res);\n    }\n  }\n  if (stack.length !== 1) return 'Error';\n  return stack[0];\n}\n\n//# sourceURL=webpack://project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/math.js":
/*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   divide: () => (/* binding */ divide),\n/* harmony export */   multiply: () => (/* binding */ multiply),\n/* harmony export */   percent: () => (/* binding */ percent),\n/* harmony export */   subtract: () => (/* binding */ subtract),\n/* harmony export */   toggleSign: () => (/* binding */ toggleSign)\n/* harmony export */ });\n/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ \"./src/js/state.js\");\n/* harmony import */ var _calculation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculation.js */ \"./src/js/calculation.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/js/dom.js\");\n\n\n\nconst SCALE_DIVIDE = 20;\nfunction max(a, b) {\n  return a > b ? a : b;\n}\nfunction toggleSign() {\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.startsWith('-')) {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput.slice(1);\n  } else if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput !== '') {\n    _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = '-' + _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput;\n  }\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)();\n}\nfunction add(a, b) {\n  const {\n    intA,\n    intB,\n    scale\n  } = (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.prepareOperands)(a, b, max);\n  const result = intA + intB;\n  return (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.formatBigIntResult)(result, scale);\n}\nfunction subtract(a, b) {\n  const {\n    intA,\n    intB,\n    scale\n  } = (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.prepareOperands)(a, b, max);\n  const result = intA - intB;\n  return (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.formatBigIntResult)(result, scale);\n}\nfunction multiply(a, b) {\n  const sumDecimals = (aDecimals, bDecimals) => aDecimals + bDecimals;\n  const aStr = a.toString();\n  const bStr = b.toString();\n  const aDecimals = (aStr.split('.')[1] || '').length;\n  const bDecimals = (bStr.split('.')[1] || '').length;\n  const intA = BigInt(aStr.replace('.', ''));\n  const intB = BigInt(bStr.replace('.', ''));\n  const scale = sumDecimals(aDecimals, bDecimals);\n  const result = intA * intB;\n  return (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.formatBigIntResult)(result, scale);\n}\nfunction divide(a, b) {\n  if (b === 0) return NaN;\n  const aStr = a.toString();\n  const bStr = b.toString();\n  const aDecimals = (aStr.split('.')[1] || '').length;\n  const bDecimals = (bStr.split('.')[1] || '').length;\n  const intA = BigInt(aStr.replace('.', ''));\n  const intB = BigInt(bStr.replace('.', ''));\n  const decimalShift = BigInt(10 ** (SCALE_DIVIDE + bDecimals - aDecimals));\n  const numerator = intA * decimalShift;\n  const result = numerator / intB;\n  return (0,_calculation_js__WEBPACK_IMPORTED_MODULE_1__.formatBigIntResult)(result, SCALE_DIVIDE);\n}\nfunction percent() {\n  if (_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput === '') return;\n  const num = parseFloat(_state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput);\n  if (isNaN(num)) return;\n  _state_js__WEBPACK_IMPORTED_MODULE_0__.state.currentInput = (num / 100).toString();\n  (0,_dom_js__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)();\n}\n\n//# sourceURL=webpack://project/./src/js/math.js?");

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   state: () => (/* binding */ state)\n/* harmony export */ });\nconst state = {\n  currentInput: '',\n  expression: ''\n};\n\n//# sourceURL=webpack://project/./src/js/state.js?");

/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst themeSwitcher = document.getElementById('themeSwitcher');\nthemeSwitcher.addEventListener('change', () => {\n  document.body.classList.toggle('light-theme');\n});\n\n//# sourceURL=webpack://project/./src/js/theme.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project/./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;