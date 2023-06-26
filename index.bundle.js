/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
}

#container {
    margin-top: 100px;
}

#gameboard {
    margin: auto;
    height: 800px;
    width: 800px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.block {
    height: 100px;
    width: 100px;
    background-color: gray;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 1px solid black;

}

#controls {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

div.button {
    background-color: blueviolet;
    height: 20px;
    width: 100px;
}

/* https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes */
/* Target using data attributes */

`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,uBAAuB;;AAE3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,YAAY;AAChB;;AAEA,kFAAkF;AAClF,iCAAiC","sourcesContent":["* {\n    margin: 0;\n}\n\n#container {\n    margin-top: 100px;\n}\n\n#gameboard {\n    margin: auto;\n    height: 800px;\n    width: 800px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n}\n\n.block {\n    height: 100px;\n    width: 100px;\n    background-color: gray;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    border: 1px solid black;\n\n}\n\n#controls {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\ndiv.button {\n    background-color: blueviolet;\n    height: 20px;\n    width: 100px;\n}\n\n/* https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes */\n/* Target using data attributes */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/knight-icon.jpg":
/*!*****************************!*\
  !*** ./src/knight-icon.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "knight-icon.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _knight_icon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight-icon.jpg */ "./src/knight-icon.jpg");


//import { chessBoardSquares } from './gameboard'

const resetBtn = document.querySelector('#reset');
const knightBtn = document.querySelector("#knight");
const travailBtn = document.querySelector("#travail");
const display = document.querySelector("#display");
const msg = document.querySelector("#message");
const gameBoardCtn = document.querySelector("#gameboard");
const gameBoardBlocks = document.querySelectorAll(".block");
knightBtn.addEventListener("click", knight);
travailBtn.addEventListener("click", traverse);
gameBoardCtn.addEventListener("click", gameBoardOff);
resetBtn.addEventListener("click", reset);
let moves = [];
function reset() {
  location.reload();
}
function traverse() {
  if (moves.length == 0) {
    message("First place starting Knight");
  } else if (moves.length == 1) {
    message("Place where you want your knight to go");
  } else if (moves.length == 2) {
    console.log(moves[0] + moves[1]);
    let results = chessGraph.breadthFirstTraversal(moves[0], moves[1]);
    message("");
    displayMoves("Congrats! The shortest path is: " + results.reverse());
    results.forEach(el => {
      highlight(el);
    });
  }
}
function highlight(shortestPathString) {
  gameBoardBlocks.forEach(block => {
    if (shortestPathString == block.dataset.array) {
      block.style.borderColor = "red";
      block.style.borderWidth = "thick";
    }
  });
}

// clicking on Knight button turns on gameBoard()
const gameBoard = () => {
  // placing this inside so that we can turn it on/off   
  const squares = document.querySelectorAll(".block");
  squares.forEach(el => {
    el.addEventListener("click", getTile);
    el.addEventListener("click", knightIcon);
  });
};

// display knight icon
function knightIcon(e) {
  e.target.style.backgroundColor = "red";
  e.target.style.backgroundImage = "url('knight-icon.jpg')";
  e.target.style.backgroundSize = 'contain';
}

// remove all event listeners to prevent more than 2 knights
function gameBoardOff() {
  if (moves.length == 2) {
    const squares = document.querySelectorAll(".block");
    squares.forEach(el => {
      el.removeEventListener("click", getTile);
    });
  }
}

// on click, get tile's data-array e.g. div "a1"
function getTile(e) {
  console.log(e.target.getAttribute("data-array"));
  let chessSquare = stringToNode(e.target.dataset.array);
  moves.push(chessSquare);
  displayMoves(e.target.dataset.array);
  if (moves[1] == null) {
    message("Place where you want the knight to go");
  }
  if (moves[1] != null) {
    message("Click on Traverse!");
  }
}

// helper function for getTile() 
// why can't stringToNode return a value (don't use forEach to return values).
function stringToNode(datasetArray) {
  const temp = chessBoardSquares.find(el => el.value == datasetArray);
  return temp;
}

// click on knight btn (activates gameboard), then click on square 1, then square 2, sends coordinates to knight(). click on Traverse takes knight data.
function knight() {
  console.log("hello");
  message("Place your knight");
  gameBoard(); // activate game board
}
;
function message(message) {
  msg.innerText = message;
}
function displayMoves(tile) {
  display.innerText = tile.toString();
}
class Node {
  constructor(value) {
    this.value = value;
    this.edgesList = [];
  }
  connect(node) {
    // connects both directions, but since we are using the adjList{} above...
    this.edgesList.push(node);
    node.edgesList.push(this);
  }
  getAdjacentNodes() {
    return this.edgesList;
  }
  isConnected(node) {
    return !!this.edgesList.find(edge => edge.value === node.value);
  }
}
class Graph {
  constructor(nodes) {
    this.nodes = [...nodes]; // const graph = new Graph(["a1", "a2", "a3"])
  }

  addToGraph(node) {
    this.nodes.push(node);
  }
  reconstructPath(visitedNodes, startNode, endNode) {
    let currentNode = endNode;
    const shortestPath = [];
    while (currentNode != null) {
      shortestPath.push(currentNode.value);
      currentNode = visitedNodes[currentNode.value];
      console.log(currentNode);
    }
    console.log(`Congrats. The path from ${startNode.value} to ${endNode.value} is: ` + shortestPath.reverse());
    //console.log(shortestPath.reverse())
    return shortestPath.reverse();
  }

  // 15:07 add the end node to find something
  // bFT(startObject, endObject) - so use object.values in code
  breadthFirstTraversal(start, end) {
    const queue = [start];
    const visitedNodes = {};
    // for the while(currentNode != null) loop below. We add the start node to the visitedNodes property (to show it's been visited) with a value of null to say it has no parent/pointer to a parent.
    visitedNodes[start.value] = null; // eg   visitedNodes { a1: null, a2: b2}

    while (queue.length > 0) {
      const node = queue.shift();
      if (node.value === end.value) {
        return this.reconstructPath(visitedNodes, start, end);
      }
      for (const adjacency of node.edgesList) {
        if (!visitedNodes.hasOwnProperty(adjacency.value)) {
          visitedNodes[adjacency.value] = node; // keep track by setting a pointer from node on all all it's adjacencies
          queue.push(adjacency);
        }
      }
    }
  }
}
const a1 = new Node("a1");
const a2 = new Node("a2");
const a3 = new Node("a3");
const a4 = new Node("a4");
const a5 = new Node("a5");
const a6 = new Node("a6");
const a7 = new Node("a7");
const a8 = new Node("a8");
const b1 = new Node("b1");
const b2 = new Node("b2");
const b3 = new Node("b3");
const b4 = new Node("b4");
const b5 = new Node("b5");
const b6 = new Node("b6");
const b7 = new Node("b7");
const b8 = new Node("b8");
const c1 = new Node("c1");
const c2 = new Node("c2");
const c3 = new Node("c3");
const c4 = new Node("c4");
const c5 = new Node("c5");
const c6 = new Node("c6");
const c7 = new Node("c7");
const c8 = new Node("c8");
const d1 = new Node("d1");
const d2 = new Node("d2");
const d3 = new Node("d3");
const d4 = new Node("d4");
const d5 = new Node("d5");
const d6 = new Node("d6");
const d7 = new Node("d7");
const d8 = new Node("d8");
const e1 = new Node("e1");
const e2 = new Node("e2");
const e3 = new Node("e3");
const e4 = new Node("e4");
const e5 = new Node("e5");
const e6 = new Node("e6");
const e7 = new Node("e7");
const e8 = new Node("e8");
const f1 = new Node("f1");
const f2 = new Node("f2");
const f3 = new Node("f3");
const f4 = new Node("f4");
const f5 = new Node("f5");
const f6 = new Node("f6");
const f7 = new Node("f7");
const f8 = new Node("f8");
const g1 = new Node("g1");
const g2 = new Node("g2");
const g3 = new Node("g3");
const g4 = new Node("g4");
const g5 = new Node("g5");
const g6 = new Node("g6");
const g7 = new Node("g7");
const g8 = new Node("g8");
const h1 = new Node("h1");
const h2 = new Node("h2");
const h3 = new Node("h3");
const h4 = new Node("h4");
const h5 = new Node("h5");
const h6 = new Node("h6");
const h7 = new Node("h7");
const h8 = new Node("h8");
const adjList2 = {
  a1: [c2, b3],
  a2: [c1, c3, b4],
  a3: [b1, c2, c4, b5],
  a4: [b2, c3, c5, b6],
  a5: [b3, c4, c6, b7],
  a6: [b4, c5, c7, b8],
  a7: [b5, c6, c8],
  a8: [b6, c7],
  b1: [a3, c3, d2],
  b2: [a4, c4, d3, d1],
  b3: [a5, c5, d4, d2, c1, a1],
  b4: [a6, c6, d5, d3, c2, a2],
  b5: [a7, c7, d6, d4, c3, a3],
  b6: [a8, c8, d7, d5, c4, a4],
  b7: [d8, d6, c5, a5],
  b8: [d7, c6, a6],
  c1: [a2, b3, d3, e2],
  c2: [a1, a3, b4, d4, e3, e1],
  c3: [b1, a2, a4, b5, d5, e4, e2, d1],
  c4: [b2, a3, a5, b6, d6, e5, e3, d2],
  c5: [b3, a4, a6, b7, d7, e6, e4, d3],
  c6: [b4, a5, a7, b8, d8, e7, e5, d4],
  c7: [b5, a6, a8, e8, e6, d5],
  c8: [b6, a7, e7, d6],
  d1: [b2, c3, e3, f2],
  d2: [b1, b3, c4, e4, f3, f1],
  d3: [c1, b2, b4, c5, e5, f4, f2, e1],
  d4: [c2, b3, b5, c6, e6, f5, f3, e2],
  d5: [c3, b4, b6, c7, e7, f6, f4, e3],
  d6: [c4, b5, b7, c8, e8, f7, f5, e4],
  d7: [c5, b6, b8, f8, f6, e5],
  d8: [c6, b7, f7, e6],
  e1: [c2, d3, f3, g2],
  e2: [c1, c3, d4, f4, g3, g1],
  e3: [d1, c2, c4, d5, f5, g4, g2, f1],
  e4: [d2, c3, c5, d6, f6, g5, g3, f2],
  e5: [d3, c4, c6, d7, f7, g6, g4, f3],
  e6: [d4, c5, c7, d8, f8, g7, g5, f4],
  e7: [d5, c6, c8, g8, g6, f5],
  e8: [d6, c7, g7, f6],
  f1: [d2, e3, g3, h2],
  f2: [d1, d3, e4, g4, h3, h1],
  f3: [e1, d2, d4, e5, g5, h4, h2, g1],
  f4: [e2, d3, d5, e6, g6, h5, h3, g2],
  f5: [e3, d4, d6, e7, g7, h6, h4, g3],
  f6: [e4, d5, d7, e8, g8, h7, h5, g4],
  f7: [e5, d6, d8, h8, h6, g5],
  f8: [e6, d7, h7, g6],
  g1: [e2, f3, h3],
  g2: [e1, e3, f4, h4],
  g3: [f1, e2, e4, f5, h5, h1],
  g4: [f2, e3, e5, f6, h6, h2],
  g5: [f3, e4, e6, f7, h7, h3],
  g6: [f4, e5, e7, f8, h8, h4],
  g7: [f5, e6, e8, h5],
  g8: [f6, e7, h6],
  h1: [f2, g3],
  h2: [f1, f3, g4],
  h3: [g1, f2, f4, g5],
  h4: [g2, f3, f5, g6],
  h5: [g3, f4, f6, g7],
  h6: [g4, f5, f7, g8],
  h7: [g5, f6, f8],
  h8: [g6, f7]
};
a1.edgesList = adjList2["a1"];
a2.edgesList = adjList2["a2"];
a3.edgesList = adjList2["a3"];
a4.edgesList = adjList2["a4"];
a5.edgesList = adjList2["a5"];
a6.edgesList = adjList2["a6"];
a7.edgesList = adjList2["a7"];
a8.edgesList = adjList2["a8"];
b1.edgesList = adjList2["b1"];
b2.edgesList = adjList2["b2"];
b3.edgesList = adjList2["b3"];
b4.edgesList = adjList2["b4"];
b5.edgesList = adjList2["b5"];
b6.edgesList = adjList2["b6"];
b7.edgesList = adjList2["b7"];
b8.edgesList = adjList2["b8"];
c1.edgesList = adjList2["c1"];
c2.edgesList = adjList2["c2"];
c3.edgesList = adjList2["c3"];
c4.edgesList = adjList2["c4"];
c5.edgesList = adjList2["c5"];
c6.edgesList = adjList2["c6"];
c7.edgesList = adjList2["c7"];
c8.edgesList = adjList2["c8"];
d1.edgesList = adjList2["d1"];
d2.edgesList = adjList2["d2"];
d3.edgesList = adjList2["d3"];
d4.edgesList = adjList2["d4"];
d5.edgesList = adjList2["d5"];
d6.edgesList = adjList2["d6"];
d7.edgesList = adjList2["d7"];
d8.edgesList = adjList2["d8"];
e1.edgesList = adjList2["e1"];
e2.edgesList = adjList2["e2"];
e3.edgesList = adjList2["e3"];
e4.edgesList = adjList2["e4"];
e5.edgesList = adjList2["e5"];
e6.edgesList = adjList2["e6"];
e7.edgesList = adjList2["e7"];
e8.edgesList = adjList2["e8"];
f1.edgesList = adjList2["f1"];
f2.edgesList = adjList2["f2"];
f3.edgesList = adjList2["f3"];
f4.edgesList = adjList2["f4"];
f5.edgesList = adjList2["f5"];
f6.edgesList = adjList2["f6"];
f7.edgesList = adjList2["f7"];
f8.edgesList = adjList2["f8"];
g1.edgesList = adjList2["g1"];
g2.edgesList = adjList2["g2"];
g3.edgesList = adjList2["g3"];
g4.edgesList = adjList2["g4"];
g5.edgesList = adjList2["g5"];
g6.edgesList = adjList2["g6"];
g7.edgesList = adjList2["g7"];
g8.edgesList = adjList2["g8"];
h1.edgesList = adjList2["h1"];
h2.edgesList = adjList2["h2"];
h3.edgesList = adjList2["h3"];
h4.edgesList = adjList2["h4"];
h5.edgesList = adjList2["h5"];
h6.edgesList = adjList2["h6"];
h7.edgesList = adjList2["h7"];
h8.edgesList = adjList2["h8"];

//remember, below array elements are objects, not strings. Array is for stringToNode()src/index.js
const chessBoardSquares = [a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3, f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, h1, h2, h3, h4, h5, h6, h7, h8];
const chessGraph = new Graph([a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5, c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3, f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, h1, h2, h3, h4, h5, h6, h7, h8]);
// bst.breadthFirstTraversal(a1, a5)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPLHVGQUF1RixVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sWUFBWSxvQ0FBb0MsZ0JBQWdCLEdBQUcsZ0JBQWdCLHdCQUF3QixHQUFHLGdCQUFnQixtQkFBbUIsb0JBQW9CLG1CQUFtQixvQkFBb0IsNkJBQTZCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLG1CQUFtQiw2QkFBNkIsNkJBQTZCLGtDQUFrQyxxQ0FBcUMsOEJBQThCLEtBQUssZUFBZSxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGdCQUFnQixtQ0FBbUMsbUJBQW1CLG1CQUFtQixHQUFHLGtKQUFrSjtBQUNycUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNsRDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ2tCO0FBQzdDOztBQUVBLE1BQU1DLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQ2pELE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0FBQ25ELE1BQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU1HLE9BQU8sR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ2xELE1BQU1JLEdBQUcsR0FBR0wsUUFBUSxDQUFDQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQzlDLE1BQU1LLFlBQVksR0FBR04sUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ3pELE1BQU1NLGVBQWUsR0FBR1AsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7QUFDM0ROLFNBQVMsQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFFQyxNQUFNLENBQUM7QUFDM0NQLFVBQVUsQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFRSxRQUFRLENBQUM7QUFDOUNMLFlBQVksQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFRyxZQUFZLENBQUM7QUFDcERiLFFBQVEsQ0FBQ1UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFSSxLQUFLLENBQUM7QUFDekMsSUFBSUMsS0FBSyxHQUFHLEVBQUU7QUFFZCxTQUFTRCxLQUFLQSxDQUFBLEVBQUc7RUFDYkUsUUFBUSxDQUFDQyxNQUFNLENBQUMsQ0FBQztBQUNyQjtBQUVBLFNBQVNMLFFBQVFBLENBQUEsRUFBRztFQUNoQixJQUFHRyxLQUFLLENBQUNHLE1BQU0sSUFBSSxDQUFDLEVBQUU7SUFDbEJDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQztFQUMxQyxDQUFDLE1BQU0sSUFBSUosS0FBSyxDQUFDRyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQzFCQyxPQUFPLENBQUMsd0NBQXdDLENBQUM7RUFDckQsQ0FBQyxNQUFNLElBQUlKLEtBQUssQ0FBQ0csTUFBTSxJQUFJLENBQUMsRUFBRTtJQUMxQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBR0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLElBQUlPLE9BQU8sR0FBR0MsVUFBVSxDQUFDQyxxQkFBcUIsQ0FBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFQSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEVJLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDWE0sWUFBWSxDQUFDLGtDQUFrQyxHQUFHSCxPQUFPLENBQUNJLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEVKLE9BQU8sQ0FBQ0ssT0FBTyxDQUFDQyxFQUFFLElBQUk7TUFDbEJDLFNBQVMsQ0FBQ0QsRUFBRSxDQUFDO0lBQ2pCLENBQUMsQ0FBQztFQUNOO0FBRUo7QUFFQSxTQUFTQyxTQUFTQSxDQUFDQyxrQkFBa0IsRUFBRTtFQUNuQ3RCLGVBQWUsQ0FBQ21CLE9BQU8sQ0FBQ0ksS0FBSyxJQUFJO0lBQzdCLElBQUdELGtCQUFrQixJQUFJQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO01BQzFDRixLQUFLLENBQUNHLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEtBQUs7TUFDL0JKLEtBQUssQ0FBQ0csS0FBSyxDQUFDRSxXQUFXLEdBQUcsT0FBTztJQUNyQztFQUNKLENBQUMsQ0FBQztBQUNOOztBQUVBO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQU07RUFDcEI7RUFDQSxNQUFNQyxPQUFPLEdBQUdyQyxRQUFRLENBQUNRLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztFQUNuRDZCLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDQyxFQUFFLElBQUk7SUFDbEJBLEVBQUUsQ0FBQ2xCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTZCLE9BQU8sQ0FBQztJQUNyQ1gsRUFBRSxDQUFDbEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOEIsVUFBVSxDQUFDO0VBQzVDLENBQUMsQ0FBQztBQUNOLENBQUM7O0FBRUQ7QUFDQSxTQUFTQSxVQUFVQSxDQUFDQyxDQUFDLEVBQUU7RUFDbkJBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUixLQUFLLENBQUNTLGVBQWUsR0FBRyxLQUFLO0VBQ3RDRixDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDVSxlQUFlLEdBQUcsd0JBQXdCO0VBQ3pESCxDQUFDLENBQUNDLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDVyxjQUFjLEdBQUcsU0FBUztBQUU3Qzs7QUFFQTtBQUNBLFNBQVNoQyxZQUFZQSxDQUFBLEVBQUc7RUFDcEIsSUFBSUUsS0FBSyxDQUFDRyxNQUFNLElBQUksQ0FBQyxFQUFFO0lBQ25CLE1BQU1vQixPQUFPLEdBQUdyQyxRQUFRLENBQUNRLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUNuRDZCLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDQyxFQUFFLElBQUk7TUFDbEJBLEVBQUUsQ0FBQ2tCLG1CQUFtQixDQUFDLE9BQU8sRUFBRVAsT0FBTyxDQUFDO0lBQzVDLENBQUMsQ0FBQztFQUNOO0FBQ0o7O0FBRUE7QUFDQSxTQUFTQSxPQUFPQSxDQUFDRSxDQUFDLEVBQUU7RUFDaEJyQixPQUFPLENBQUNDLEdBQUcsQ0FBQ29CLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7RUFDaEQsSUFBSUMsV0FBVyxHQUFHQyxZQUFZLENBQUNSLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVixPQUFPLENBQUNDLEtBQUssQ0FBQztFQUN0RGxCLEtBQUssQ0FBQ21DLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3ZCdkIsWUFBWSxDQUFDZ0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNWLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0VBQ3BDLElBQUlsQixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ2xCSSxPQUFPLENBQUMsdUNBQXVDLENBQUM7RUFDcEQ7RUFDQSxJQUFJSixLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ2xCSSxPQUFPLENBQUMsb0JBQW9CLENBQUM7RUFDakM7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzhCLFlBQVlBLENBQUNFLFlBQVksRUFBRTtFQUNoQyxNQUFNQyxJQUFJLEdBQUdDLGlCQUFpQixDQUFDQyxJQUFJLENBQUMxQixFQUFFLElBQUlBLEVBQUUsQ0FBQzJCLEtBQUssSUFBSUosWUFBWSxDQUFDO0VBQ25FLE9BQU9DLElBQUk7QUFDZjs7QUFFQTtBQUNBLFNBQVN6QyxNQUFNQSxDQUFBLEVBQUc7RUFDZFMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3BCRixPQUFPLENBQUMsbUJBQW1CLENBQUM7RUFDNUJrQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakI7QUFBQztBQUVELFNBQVNsQixPQUFPQSxDQUFDQSxPQUFPLEVBQUU7RUFDdEJiLEdBQUcsQ0FBQ2tELFNBQVMsR0FBR3JDLE9BQU87QUFDM0I7QUFFQSxTQUFTTSxZQUFZQSxDQUFDZ0MsSUFBSSxFQUFFO0VBQ3hCcEQsT0FBTyxDQUFDbUQsU0FBUyxHQUFHQyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZDO0FBRUEsTUFBTUMsSUFBSSxDQUFDO0VBQ1BDLFdBQVdBLENBQUNMLEtBQUssRUFBRTtJQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ00sU0FBUyxHQUFHLEVBQUU7RUFDdkI7RUFFQUMsT0FBT0EsQ0FBQ0MsSUFBSSxFQUFFO0lBQUc7SUFDYixJQUFJLENBQUNGLFNBQVMsQ0FBQ1gsSUFBSSxDQUFDYSxJQUFJLENBQUM7SUFDekJBLElBQUksQ0FBQ0YsU0FBUyxDQUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQzdCO0VBRUFjLGdCQUFnQkEsQ0FBQSxFQUFHO0lBQ2YsT0FBTyxJQUFJLENBQUNILFNBQVM7RUFDekI7RUFFQUksV0FBV0EsQ0FBQ0YsSUFBSSxFQUFFO0lBQ2QsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDRixTQUFTLENBQUNQLElBQUksQ0FBQ1ksSUFBSSxJQUFJQSxJQUFJLENBQUNYLEtBQUssS0FBS1EsSUFBSSxDQUFDUixLQUFLLENBQUM7RUFDbkU7QUFDSjtBQUVBLE1BQU1ZLEtBQUssQ0FBQztFQUNSUCxXQUFXQSxDQUFDUSxLQUFLLEVBQUU7SUFDZixJQUFJLENBQUNBLEtBQUssR0FBRyxDQUFDLEdBQUdBLEtBQUssQ0FBQyxFQUFFO0VBQzdCOztFQUVBQyxVQUFVQSxDQUFDTixJQUFJLEVBQUU7SUFDYixJQUFJLENBQUNLLEtBQUssQ0FBQ2xCLElBQUksQ0FBQ2EsSUFBSSxDQUFDO0VBQ3pCO0VBRUFPLGVBQWVBLENBQUNDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7SUFDOUMsSUFBSUMsV0FBVyxHQUFHRCxPQUFPO0lBQ3pCLE1BQU1FLFlBQVksR0FBRyxFQUFFO0lBRXZCLE9BQU1ELFdBQVcsSUFBSSxJQUFJLEVBQUU7TUFDdkJDLFlBQVksQ0FBQ3pCLElBQUksQ0FBQ3dCLFdBQVcsQ0FBQ25CLEtBQUssQ0FBQztNQUNwQ21CLFdBQVcsR0FBR0gsWUFBWSxDQUFDRyxXQUFXLENBQUNuQixLQUFLLENBQUM7TUFDN0NuQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3FELFdBQVcsQ0FBQztJQUM1QjtJQUNBdEQsT0FBTyxDQUFDQyxHQUFHLENBQUUsMkJBQTBCbUQsU0FBUyxDQUFDakIsS0FBTSxPQUFNa0IsT0FBTyxDQUFDbEIsS0FBTSxPQUFNLEdBQUdvQixZQUFZLENBQUNqRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNHO0lBQ0EsT0FBT2lELFlBQVksQ0FBQ2pELE9BQU8sQ0FBQyxDQUFDO0VBQ2pDOztFQUVBO0VBQ0E7RUFDQUYscUJBQXFCQSxDQUFDb0QsS0FBSyxFQUFFQyxHQUFHLEVBQUU7SUFDOUIsTUFBTUMsS0FBSyxHQUFHLENBQUNGLEtBQUssQ0FBQztJQUVyQixNQUFNTCxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0FBLFlBQVksQ0FBQ0ssS0FBSyxDQUFDckIsS0FBSyxDQUFDLEdBQUcsSUFBSSxFQUFFOztJQUVsQyxPQUFNdUIsS0FBSyxDQUFDNUQsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUNwQixNQUFNNkMsSUFBSSxHQUFHZSxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUFDO01BRTFCLElBQUdoQixJQUFJLENBQUNSLEtBQUssS0FBS3NCLEdBQUcsQ0FBQ3RCLEtBQUssRUFBRTtRQUN6QixPQUFPLElBQUksQ0FBQ2UsZUFBZSxDQUFDQyxZQUFZLEVBQUVLLEtBQUssRUFBRUMsR0FBRyxDQUFDO01BQ3pEO01BRUEsS0FBSyxNQUFNRyxTQUFTLElBQUlqQixJQUFJLENBQUNGLFNBQVMsRUFBRTtRQUNwQyxJQUFHLENBQUNVLFlBQVksQ0FBQ1UsY0FBYyxDQUFDRCxTQUFTLENBQUN6QixLQUFLLENBQUMsRUFBRTtVQUM5Q2dCLFlBQVksQ0FBQ1MsU0FBUyxDQUFDekIsS0FBSyxDQUFDLEdBQUdRLElBQUksQ0FBQyxDQUFDO1VBQ3RDZSxLQUFLLENBQUM1QixJQUFJLENBQUM4QixTQUFTLENBQUM7UUFDekI7TUFDSjtJQUNKO0VBRUo7QUFDSjtBQUVBLE1BQU1FLEVBQUUsR0FBRyxJQUFJdkIsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNd0IsRUFBRSxHQUFHLElBQUl4QixJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU15QixFQUFFLEdBQUcsSUFBSXpCLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTBCLEVBQUUsR0FBRyxJQUFJMUIsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNMkIsRUFBRSxHQUFHLElBQUkzQixJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU00QixFQUFFLEdBQUcsSUFBSTVCLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTZCLEVBQUUsR0FBRyxJQUFJN0IsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNOEIsRUFBRSxHQUFHLElBQUk5QixJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU0rQixFQUFFLEdBQUcsSUFBSS9CLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTWdDLEVBQUUsR0FBRyxJQUFJaEMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNaUMsRUFBRSxHQUFHLElBQUlqQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1rQyxFQUFFLEdBQUcsSUFBSWxDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTW1DLEVBQUUsR0FBRyxJQUFJbkMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNb0MsRUFBRSxHQUFHLElBQUlwQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1xQyxFQUFFLEdBQUcsSUFBSXJDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXNDLEVBQUUsR0FBRyxJQUFJdEMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNdUMsRUFBRSxHQUFHLElBQUl2QyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU13QyxFQUFFLEdBQUcsSUFBSXhDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXlDLEVBQUUsR0FBRyxJQUFJekMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNMEMsRUFBRSxHQUFHLElBQUkxQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU0yQyxFQUFFLEdBQUcsSUFBSTNDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTRDLEVBQUUsR0FBRyxJQUFJNUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNNkMsRUFBRSxHQUFHLElBQUk3QyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU04QyxFQUFFLEdBQUcsSUFBSTlDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTStDLEVBQUUsR0FBRyxJQUFJL0MsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNZ0QsRUFBRSxHQUFHLElBQUloRCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1pRCxFQUFFLEdBQUcsSUFBSWpELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTWtELEVBQUUsR0FBRyxJQUFJbEQsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNbUQsRUFBRSxHQUFHLElBQUluRCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1vRCxFQUFFLEdBQUcsSUFBSXBELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXFELEVBQUUsR0FBRyxJQUFJckQsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNc0QsRUFBRSxHQUFHLElBQUl0RCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU11RCxFQUFFLEdBQUcsSUFBSXZELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXdELEVBQUUsR0FBRyxJQUFJeEQsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNeUQsRUFBRSxHQUFHLElBQUl6RCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU0wRCxFQUFFLEdBQUcsSUFBSTFELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTJELEVBQUUsR0FBRyxJQUFJM0QsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNNEQsRUFBRSxHQUFHLElBQUk1RCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU02RCxFQUFFLEdBQUcsSUFBSTdELElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTThELEVBQUUsR0FBRyxJQUFJOUQsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNK0QsRUFBRSxHQUFHLElBQUkvRCxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1nRSxFQUFFLEdBQUcsSUFBSWhFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTWlFLEVBQUUsR0FBRyxJQUFJakUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNa0UsRUFBRSxHQUFHLElBQUlsRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1tRSxFQUFFLEdBQUcsSUFBSW5FLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTW9FLEVBQUUsR0FBRyxJQUFJcEUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNcUUsRUFBRSxHQUFHLElBQUlyRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1zRSxFQUFFLEdBQUcsSUFBSXRFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXVFLEVBQUUsR0FBRyxJQUFJdkUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNd0UsRUFBRSxHQUFHLElBQUl4RSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU15RSxFQUFFLEdBQUcsSUFBSXpFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTBFLEVBQUUsR0FBRyxJQUFJMUUsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNMkUsRUFBRSxHQUFHLElBQUkzRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU00RSxFQUFFLEdBQUcsSUFBSTVFLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTTZFLEVBQUUsR0FBRyxJQUFJN0UsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNOEUsRUFBRSxHQUFHLElBQUk5RSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU0rRSxFQUFFLEdBQUcsSUFBSS9FLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTWdGLEVBQUUsR0FBRyxJQUFJaEYsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNaUYsRUFBRSxHQUFHLElBQUlqRixJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1rRixFQUFFLEdBQUcsSUFBSWxGLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTW1GLEVBQUUsR0FBRyxJQUFJbkYsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN6QixNQUFNb0YsRUFBRSxHQUFHLElBQUlwRixJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3pCLE1BQU1xRixFQUFFLEdBQUcsSUFBSXJGLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDekIsTUFBTXNGLEVBQUUsR0FBRyxJQUFJdEYsSUFBSSxDQUFDLElBQUksQ0FBQztBQUV6QixNQUFNdUYsUUFBUSxHQUFHO0VBQ2JoRSxFQUFFLEVBQUUsQ0FBQ2lCLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ1pULEVBQUUsRUFBRSxDQUFDZSxFQUFFLEVBQUVFLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ2hCVCxFQUFFLEVBQUUsQ0FBQ00sRUFBRSxFQUFFUyxFQUFFLEVBQUVFLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ3BCVCxFQUFFLEVBQUUsQ0FBQ00sRUFBRSxFQUFFUyxFQUFFLEVBQUVFLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ3BCVCxFQUFFLEVBQUUsQ0FBQ00sRUFBRSxFQUFFUyxFQUFFLEVBQUVFLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ3BCVCxFQUFFLEVBQUUsQ0FBQ00sRUFBRSxFQUFFUyxFQUFFLEVBQUVFLEVBQUUsRUFBRVAsRUFBRSxDQUFDO0VBQ3BCVCxFQUFFLEVBQUUsQ0FBQ00sRUFBRSxFQUFFUyxFQUFFLEVBQUVFLEVBQUUsQ0FBQztFQUNoQmhCLEVBQUUsRUFBRSxDQUFDTSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNaZCxFQUFFLEVBQUUsQ0FBQ04sRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLENBQUM7RUFDaEJoQixFQUFFLEVBQUUsQ0FBQ04sRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsQ0FBQztFQUNwQmQsRUFBRSxFQUFFLENBQUNOLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsRUFBRWhCLEVBQUUsQ0FBQztFQUM1QlcsRUFBRSxFQUFFLENBQUNOLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsRUFBRWhCLEVBQUUsQ0FBQztFQUM1QlcsRUFBRSxFQUFFLENBQUNOLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsRUFBRWhCLEVBQUUsQ0FBQztFQUM1QlcsRUFBRSxFQUFFLENBQUNOLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsRUFBRWhCLEVBQUUsQ0FBQztFQUM1QlcsRUFBRSxFQUFFLENBQUNpQixFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxFQUFFaEIsRUFBRSxDQUFDO0VBQ3BCVyxFQUFFLEVBQUUsQ0FBQ2UsRUFBRSxFQUFFVCxFQUFFLEVBQUVoQixFQUFFLENBQUM7RUFDaEJXLEVBQUUsRUFBRSxDQUFDZixFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxDQUFDO0VBQ3BCaEIsRUFBRSxFQUFFLENBQUNqQixFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsQ0FBQztFQUM1QmQsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVnQyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQzVCTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVnQyxFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQkwsRUFBRSxFQUFFLENBQUNmLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLENBQUM7RUFDcEJoQixFQUFFLEVBQUUsQ0FBQ2pCLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsRUFBRUYsRUFBRSxDQUFDO0VBQzVCZCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQ3BDTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQ3BDTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQ3BDTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQ3BDTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRWdDLEVBQUUsRUFBRUYsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDNUJMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRWdDLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQ3BCTCxFQUFFLEVBQUUsQ0FBQ2YsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsQ0FBQztFQUNwQmhCLEVBQUUsRUFBRSxDQUFDakIsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLENBQUM7RUFDNUJkLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsRUFBRUYsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDcENMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsRUFBRUYsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDcENMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsRUFBRUYsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDcENMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVPLEVBQUUsRUFBRUYsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDcENMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFZ0MsRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUM1QkwsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFZ0MsRUFBRSxFQUFFVCxFQUFFLENBQUM7RUFDcEJMLEVBQUUsRUFBRSxDQUFDZixFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxDQUFDO0VBQ3BCaEIsRUFBRSxFQUFFLENBQUNqQixFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFTyxFQUFFLEVBQUVGLEVBQUUsQ0FBQztFQUM1QmQsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRU8sRUFBRSxFQUFFRixFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQ0wsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVnQyxFQUFFLEVBQUVGLEVBQUUsRUFBRVQsRUFBRSxDQUFDO0VBQzVCTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVnQyxFQUFFLEVBQUVULEVBQUUsQ0FBQztFQUNwQkwsRUFBRSxFQUFFLENBQUNmLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxDQUFDO0VBQ2hCVCxFQUFFLEVBQUUsQ0FBQ2pCLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLENBQUM7RUFDcEJULEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVKLEVBQUUsQ0FBQztFQUM1QkwsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsRUFBRWdCLEVBQUUsRUFBRUosRUFBRSxDQUFDO0VBQzVCTCxFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFLEVBQUVFLEVBQUUsRUFBRVMsRUFBRSxFQUFFZ0IsRUFBRSxFQUFFSixFQUFFLENBQUM7RUFDNUJMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRUUsRUFBRSxFQUFFUyxFQUFFLEVBQUVnQixFQUFFLEVBQUVKLEVBQUUsQ0FBQztFQUM1QkwsRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVxQixFQUFFLENBQUM7RUFDcEJMLEVBQUUsRUFBRSxDQUFDVixFQUFFLEVBQUVQLEVBQUUsRUFBRXVCLEVBQUUsQ0FBQztFQUNoQkwsRUFBRSxFQUFFLENBQUNmLEVBQUUsRUFBRVMsRUFBRSxDQUFDO0VBQ1pPLEVBQUUsRUFBRSxDQUFDakIsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNoQk8sRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNwQk8sRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNwQk8sRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNwQk8sRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLEVBQUVTLEVBQUUsQ0FBQztFQUNwQk8sRUFBRSxFQUFFLENBQUNWLEVBQUUsRUFBRVAsRUFBRSxFQUFFRSxFQUFFLENBQUM7RUFDaEJnQixFQUFFLEVBQUUsQ0FBQ1YsRUFBRSxFQUFFUCxFQUFFO0FBQ2YsQ0FBQztBQUVEOUMsRUFBRSxDQUFDckIsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3Qi9ELEVBQUUsQ0FBQ3RCLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0I5RCxFQUFFLENBQUN2QixTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCN0QsRUFBRSxDQUFDeEIsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QjVELEVBQUUsQ0FBQ3pCLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0IzRCxFQUFFLENBQUMxQixTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCMUQsRUFBRSxDQUFDM0IsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnpELEVBQUUsQ0FBQzVCLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0J4RCxFQUFFLENBQUM3QixTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCdkQsRUFBRSxDQUFDOUIsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnRELEVBQUUsQ0FBQy9CLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JyRCxFQUFFLENBQUNoQyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCcEQsRUFBRSxDQUFDakMsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3Qm5ELEVBQUUsQ0FBQ2xDLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JsRCxFQUFFLENBQUNuQyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCakQsRUFBRSxDQUFDcEMsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmhELEVBQUUsQ0FBQ3JDLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0IvQyxFQUFFLENBQUN0QyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCOUMsRUFBRSxDQUFDdkMsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QjdDLEVBQUUsQ0FBQ3hDLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0I1QyxFQUFFLENBQUN6QyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCM0MsRUFBRSxDQUFDMUMsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QjFDLEVBQUUsQ0FBQzNDLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0J6QyxFQUFFLENBQUM1QyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCeEMsRUFBRSxDQUFDN0MsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnZDLEVBQUUsQ0FBQzlDLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0J0QyxFQUFFLENBQUMvQyxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCckMsRUFBRSxDQUFDaEQsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnBDLEVBQUUsQ0FBQ2pELFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JuQyxFQUFFLENBQUNsRCxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCbEMsRUFBRSxDQUFDbkQsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmpDLEVBQUUsQ0FBQ3BELFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JoQyxFQUFFLENBQUNyRCxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCL0IsRUFBRSxDQUFDdEQsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QjlCLEVBQUUsQ0FBQ3ZELFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0I3QixFQUFFLENBQUN4RCxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCNUIsRUFBRSxDQUFDekQsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QjNCLEVBQUUsQ0FBQzFELFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0IxQixFQUFFLENBQUMzRCxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCekIsRUFBRSxDQUFDNUQsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnhCLEVBQUUsQ0FBQzdELFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0J2QixFQUFFLENBQUM5RCxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCdEIsRUFBRSxDQUFDL0QsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QnJCLEVBQUUsQ0FBQ2hFLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JwQixFQUFFLENBQUNqRSxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCbkIsRUFBRSxDQUFDbEUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmxCLEVBQUUsQ0FBQ25FLFNBQVMsR0FBR3FGLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0JqQixFQUFFLENBQUNwRSxTQUFTLEdBQUdxRixRQUFRLENBQUMsSUFBSSxDQUFDO0FBQzdCaEIsRUFBRSxDQUFDckUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmYsRUFBRSxDQUFDdEUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmQsRUFBRSxDQUFDdkUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QmIsRUFBRSxDQUFDeEUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlosRUFBRSxDQUFDekUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlgsRUFBRSxDQUFDMUUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlYsRUFBRSxDQUFDM0UsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlQsRUFBRSxDQUFDNUUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlIsRUFBRSxDQUFDN0UsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QlAsRUFBRSxDQUFDOUUsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3Qk4sRUFBRSxDQUFDL0UsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QkwsRUFBRSxDQUFDaEYsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QkosRUFBRSxDQUFDakYsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QkgsRUFBRSxDQUFDbEYsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QkYsRUFBRSxDQUFDbkYsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQztBQUM3QkQsRUFBRSxDQUFDcEYsU0FBUyxHQUFHcUYsUUFBUSxDQUFDLElBQUksQ0FBQzs7QUFFN0I7QUFDQSxNQUFNN0YsaUJBQWlCLEdBQUcsQ0FBRTZCLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQzlCQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFDOUJDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQzlCQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFDOUJDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLENBQUU7QUFFNUQsTUFBTTFILFVBQVUsR0FBRyxJQUFJNEMsS0FBSyxDQUFDLENBQUNlLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQzlCQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFDOUJDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQzlCQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFDOUJDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUM5QkMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLEVBQUVDLEVBQUUsRUFBRUMsRUFBRSxFQUFFQyxFQUFFLENBQUMsQ0FBQztBQUM5RCxvQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4ta25pZ2h0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4ta25pZ2h0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4ta25pZ2h0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4ta25pZ2h0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1rbmlnaHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4ta25pZ2h0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4ta25pZ2h0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWtuaWdodC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuI2dhbWVib2FyZCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5ibG9jayB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbn1cblxuI2NvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG5kaXYuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi8qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSFRNTC9Ib3d0by9Vc2VfZGF0YV9hdHRyaWJ1dGVzICovXG4vKiBUYXJnZXQgdXNpbmcgZGF0YSBhdHRyaWJ1dGVzICovXG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsa0ZBQWtGO0FBQ2xGLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbiNnYW1lYm9hcmQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIHdpZHRoOiA4MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5kaXYuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi8qIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvTGVhcm4vSFRNTC9Ib3d0by9Vc2VfZGF0YV9hdHRyaWJ1dGVzICovXFxuLyogVGFyZ2V0IHVzaW5nIGRhdGEgYXR0cmlidXRlcyAqL1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IGtuaWdodEljb25KUEcgZnJvbSAnLi9rbmlnaHQtaWNvbi5qcGcnXG4vL2ltcG9ydCB7IGNoZXNzQm9hcmRTcXVhcmVzIH0gZnJvbSAnLi9nYW1lYm9hcmQnXG5cbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0JylcbmNvbnN0IGtuaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja25pZ2h0XCIpXG5jb25zdCB0cmF2YWlsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmF2YWlsXCIpXG5jb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5XCIpXG5jb25zdCBtc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lc3NhZ2VcIilcbmNvbnN0IGdhbWVCb2FyZEN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZWJvYXJkXCIpXG5jb25zdCBnYW1lQm9hcmRCbG9ja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2NrXCIpXG5rbmlnaHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGtuaWdodClcbnRyYXZhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRyYXZlcnNlKVxuZ2FtZUJvYXJkQ3RuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lQm9hcmRPZmYpXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXQpXG5sZXQgbW92ZXMgPSBbXTtcblxuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHRyYXZlcnNlKCkge1xuICAgIGlmKG1vdmVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIG1lc3NhZ2UoXCJGaXJzdCBwbGFjZSBzdGFydGluZyBLbmlnaHRcIilcbiAgICB9IGVsc2UgaWYgKG1vdmVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIG1lc3NhZ2UoXCJQbGFjZSB3aGVyZSB5b3Ugd2FudCB5b3VyIGtuaWdodCB0byBnb1wiKVxuICAgIH0gZWxzZSBpZiAobW92ZXMubGVuZ3RoID09IDIpIHtcbiAgICAgICAgY29uc29sZS5sb2cobW92ZXNbMF0gKyBtb3Zlc1sxXSlcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBjaGVzc0dyYXBoLmJyZWFkdGhGaXJzdFRyYXZlcnNhbChtb3Zlc1swXSwgbW92ZXNbMV0pXG4gICAgICAgIG1lc3NhZ2UoXCJcIilcbiAgICAgICAgZGlzcGxheU1vdmVzKFwiQ29uZ3JhdHMhIFRoZSBzaG9ydGVzdCBwYXRoIGlzOiBcIiArIHJlc3VsdHMucmV2ZXJzZSgpKVxuICAgICAgICByZXN1bHRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgaGlnaGxpZ2h0KGVsKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0KHNob3J0ZXN0UGF0aFN0cmluZykge1xuICAgIGdhbWVCb2FyZEJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcbiAgICAgICAgaWYoc2hvcnRlc3RQYXRoU3RyaW5nID09IGJsb2NrLmRhdGFzZXQuYXJyYXkpIHtcbiAgICAgICAgICAgIGJsb2NrLnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZWRcIlxuICAgICAgICAgICAgYmxvY2suc3R5bGUuYm9yZGVyV2lkdGggPSBcInRoaWNrXCJcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8vIGNsaWNraW5nIG9uIEtuaWdodCBidXR0b24gdHVybnMgb24gZ2FtZUJvYXJkKClcbmNvbnN0IGdhbWVCb2FyZCA9ICgpID0+IHtcbiAgICAvLyBwbGFjaW5nIHRoaXMgaW5zaWRlIHNvIHRoYXQgd2UgY2FuIHR1cm4gaXQgb24vb2ZmICAgXG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tcIilcbiAgICBzcXVhcmVzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VGlsZSkgIFxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwga25pZ2h0SWNvbikgICAgICAgICAgICBcbiAgICB9KVxufTtcblxuLy8gZGlzcGxheSBrbmlnaHQgaWNvblxuZnVuY3Rpb24ga25pZ2h0SWNvbihlKSB7IFxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCJcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgna25pZ2h0LWljb24uanBnJylcIlxuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvbnRhaW4nO1xuXG59XG5cbi8vIHJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzIHRvIHByZXZlbnQgbW9yZSB0aGFuIDIga25pZ2h0c1xuZnVuY3Rpb24gZ2FtZUJvYXJkT2ZmKCkge1xuICAgIGlmIChtb3Zlcy5sZW5ndGggPT0gMikge1xuICAgICAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja1wiKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRUaWxlKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gb24gY2xpY2ssIGdldCB0aWxlJ3MgZGF0YS1hcnJheSBlLmcuIGRpdiBcImExXCJcbmZ1bmN0aW9uIGdldFRpbGUoZSkge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtYXJyYXlcIikpXG4gICAgbGV0IGNoZXNzU3F1YXJlID0gc3RyaW5nVG9Ob2RlKGUudGFyZ2V0LmRhdGFzZXQuYXJyYXkpXG4gICAgbW92ZXMucHVzaChjaGVzc1NxdWFyZSlcbiAgICBkaXNwbGF5TW92ZXMoZS50YXJnZXQuZGF0YXNldC5hcnJheSlcbiAgICBpZiAobW92ZXNbMV0gPT0gbnVsbCkge1xuICAgICAgICBtZXNzYWdlKFwiUGxhY2Ugd2hlcmUgeW91IHdhbnQgdGhlIGtuaWdodCB0byBnb1wiKVxuICAgIH1cbiAgICBpZiAobW92ZXNbMV0gIT0gbnVsbCkge1xuICAgICAgICBtZXNzYWdlKFwiQ2xpY2sgb24gVHJhdmVyc2UhXCIpXG4gICAgfVxufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIGdldFRpbGUoKSBcbi8vIHdoeSBjYW4ndCBzdHJpbmdUb05vZGUgcmV0dXJuIGEgdmFsdWUgKGRvbid0IHVzZSBmb3JFYWNoIHRvIHJldHVybiB2YWx1ZXMpLlxuZnVuY3Rpb24gc3RyaW5nVG9Ob2RlKGRhdGFzZXRBcnJheSkge1xuICAgIGNvbnN0IHRlbXAgPSBjaGVzc0JvYXJkU3F1YXJlcy5maW5kKGVsID0+IGVsLnZhbHVlID09IGRhdGFzZXRBcnJheSk7XG4gICAgcmV0dXJuIHRlbXA7XG59XG5cbi8vIGNsaWNrIG9uIGtuaWdodCBidG4gKGFjdGl2YXRlcyBnYW1lYm9hcmQpLCB0aGVuIGNsaWNrIG9uIHNxdWFyZSAxLCB0aGVuIHNxdWFyZSAyLCBzZW5kcyBjb29yZGluYXRlcyB0byBrbmlnaHQoKS4gY2xpY2sgb24gVHJhdmVyc2UgdGFrZXMga25pZ2h0IGRhdGEuXG5mdW5jdGlvbiBrbmlnaHQoKSB7XG4gICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgIG1lc3NhZ2UoXCJQbGFjZSB5b3VyIGtuaWdodFwiKVxuICAgIGdhbWVCb2FyZCgpOyAvLyBhY3RpdmF0ZSBnYW1lIGJvYXJkXG59O1xuXG5mdW5jdGlvbiBtZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBtc2cuaW5uZXJUZXh0ID0gbWVzc2FnZVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5TW92ZXModGlsZSkge1xuICAgIGRpc3BsYXkuaW5uZXJUZXh0ID0gdGlsZS50b1N0cmluZygpXG59XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVxuICAgICAgICB0aGlzLmVkZ2VzTGlzdCA9IFtdXG4gICAgfVxuXG4gICAgY29ubmVjdChub2RlKSB7ICAvLyBjb25uZWN0cyBib3RoIGRpcmVjdGlvbnMsIGJ1dCBzaW5jZSB3ZSBhcmUgdXNpbmcgdGhlIGFkakxpc3R7fSBhYm92ZS4uLlxuICAgICAgICB0aGlzLmVkZ2VzTGlzdC5wdXNoKG5vZGUpXG4gICAgICAgIG5vZGUuZWRnZXNMaXN0LnB1c2godGhpcylcbiAgICB9XG5cbiAgICBnZXRBZGphY2VudE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlc0xpc3RcbiAgICB9XG5cbiAgICBpc0Nvbm5lY3RlZChub2RlKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZWRnZXNMaXN0LmZpbmQoZWRnZSA9PiBlZGdlLnZhbHVlID09PSBub2RlLnZhbHVlKVxuICAgIH1cbn1cblxuY2xhc3MgR3JhcGgge1xuICAgIGNvbnN0cnVjdG9yKG5vZGVzKSB7XG4gICAgICAgIHRoaXMubm9kZXMgPSBbLi4ubm9kZXNdICAvLyBjb25zdCBncmFwaCA9IG5ldyBHcmFwaChbXCJhMVwiLCBcImEyXCIsIFwiYTNcIl0pXG4gICAgfVxuXG4gICAgYWRkVG9HcmFwaChub2RlKSB7XG4gICAgICAgIHRoaXMubm9kZXMucHVzaChub2RlKVxuICAgIH1cblxuICAgIHJlY29uc3RydWN0UGF0aCh2aXNpdGVkTm9kZXMsIHN0YXJ0Tm9kZSwgZW5kTm9kZSkge1xuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBlbmROb2RlO1xuICAgICAgICBjb25zdCBzaG9ydGVzdFBhdGggPSBbXTtcblxuICAgICAgICB3aGlsZShjdXJyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzaG9ydGVzdFBhdGgucHVzaChjdXJyZW50Tm9kZS52YWx1ZSlcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gdmlzaXRlZE5vZGVzW2N1cnJlbnROb2RlLnZhbHVlXVxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudE5vZGUpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYENvbmdyYXRzLiBUaGUgcGF0aCBmcm9tICR7c3RhcnROb2RlLnZhbHVlfSB0byAke2VuZE5vZGUudmFsdWV9IGlzOiBgICsgc2hvcnRlc3RQYXRoLnJldmVyc2UoKSlcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzaG9ydGVzdFBhdGgucmV2ZXJzZSgpKVxuICAgICAgICByZXR1cm4gc2hvcnRlc3RQYXRoLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvLyAxNTowNyBhZGQgdGhlIGVuZCBub2RlIHRvIGZpbmQgc29tZXRoaW5nXG4gICAgLy8gYkZUKHN0YXJ0T2JqZWN0LCBlbmRPYmplY3QpIC0gc28gdXNlIG9iamVjdC52YWx1ZXMgaW4gY29kZVxuICAgIGJyZWFkdGhGaXJzdFRyYXZlcnNhbChzdGFydCwgZW5kKSB7XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW3N0YXJ0XTtcblxuICAgICAgICBjb25zdCB2aXNpdGVkTm9kZXMgPSB7fVxuICAgICAgICAvLyBmb3IgdGhlIHdoaWxlKGN1cnJlbnROb2RlICE9IG51bGwpIGxvb3AgYmVsb3cuIFdlIGFkZCB0aGUgc3RhcnQgbm9kZSB0byB0aGUgdmlzaXRlZE5vZGVzIHByb3BlcnR5ICh0byBzaG93IGl0J3MgYmVlbiB2aXNpdGVkKSB3aXRoIGEgdmFsdWUgb2YgbnVsbCB0byBzYXkgaXQgaGFzIG5vIHBhcmVudC9wb2ludGVyIHRvIGEgcGFyZW50LlxuICAgICAgICB2aXNpdGVkTm9kZXNbc3RhcnQudmFsdWVdID0gbnVsbCAgLy8gZWcgICB2aXNpdGVkTm9kZXMgeyBhMTogbnVsbCwgYTI6IGIyfVxuXG4gICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgICAgICBpZihub2RlLnZhbHVlID09PSBlbmQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWNvbnN0cnVjdFBhdGgodmlzaXRlZE5vZGVzLCBzdGFydCwgZW5kKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFkamFjZW5jeSBvZiBub2RlLmVkZ2VzTGlzdCkge1xuICAgICAgICAgICAgICAgIGlmKCF2aXNpdGVkTm9kZXMuaGFzT3duUHJvcGVydHkoYWRqYWNlbmN5LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2aXNpdGVkTm9kZXNbYWRqYWNlbmN5LnZhbHVlXSA9IG5vZGU7IC8vIGtlZXAgdHJhY2sgYnkgc2V0dGluZyBhIHBvaW50ZXIgZnJvbSBub2RlIG9uIGFsbCBhbGwgaXQncyBhZGphY2VuY2llc1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKGFkamFjZW5jeSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuY29uc3QgYTEgPSBuZXcgTm9kZShcImExXCIpXG5jb25zdCBhMiA9IG5ldyBOb2RlKFwiYTJcIilcbmNvbnN0IGEzID0gbmV3IE5vZGUoXCJhM1wiKVxuY29uc3QgYTQgPSBuZXcgTm9kZShcImE0XCIpXG5jb25zdCBhNSA9IG5ldyBOb2RlKFwiYTVcIilcbmNvbnN0IGE2ID0gbmV3IE5vZGUoXCJhNlwiKVxuY29uc3QgYTcgPSBuZXcgTm9kZShcImE3XCIpXG5jb25zdCBhOCA9IG5ldyBOb2RlKFwiYThcIilcbmNvbnN0IGIxID0gbmV3IE5vZGUoXCJiMVwiKVxuY29uc3QgYjIgPSBuZXcgTm9kZShcImIyXCIpXG5jb25zdCBiMyA9IG5ldyBOb2RlKFwiYjNcIilcbmNvbnN0IGI0ID0gbmV3IE5vZGUoXCJiNFwiKVxuY29uc3QgYjUgPSBuZXcgTm9kZShcImI1XCIpXG5jb25zdCBiNiA9IG5ldyBOb2RlKFwiYjZcIilcbmNvbnN0IGI3ID0gbmV3IE5vZGUoXCJiN1wiKVxuY29uc3QgYjggPSBuZXcgTm9kZShcImI4XCIpXG5jb25zdCBjMSA9IG5ldyBOb2RlKFwiYzFcIilcbmNvbnN0IGMyID0gbmV3IE5vZGUoXCJjMlwiKVxuY29uc3QgYzMgPSBuZXcgTm9kZShcImMzXCIpXG5jb25zdCBjNCA9IG5ldyBOb2RlKFwiYzRcIilcbmNvbnN0IGM1ID0gbmV3IE5vZGUoXCJjNVwiKVxuY29uc3QgYzYgPSBuZXcgTm9kZShcImM2XCIpXG5jb25zdCBjNyA9IG5ldyBOb2RlKFwiYzdcIilcbmNvbnN0IGM4ID0gbmV3IE5vZGUoXCJjOFwiKVxuY29uc3QgZDEgPSBuZXcgTm9kZShcImQxXCIpXG5jb25zdCBkMiA9IG5ldyBOb2RlKFwiZDJcIilcbmNvbnN0IGQzID0gbmV3IE5vZGUoXCJkM1wiKVxuY29uc3QgZDQgPSBuZXcgTm9kZShcImQ0XCIpXG5jb25zdCBkNSA9IG5ldyBOb2RlKFwiZDVcIilcbmNvbnN0IGQ2ID0gbmV3IE5vZGUoXCJkNlwiKVxuY29uc3QgZDcgPSBuZXcgTm9kZShcImQ3XCIpXG5jb25zdCBkOCA9IG5ldyBOb2RlKFwiZDhcIilcbmNvbnN0IGUxID0gbmV3IE5vZGUoXCJlMVwiKVxuY29uc3QgZTIgPSBuZXcgTm9kZShcImUyXCIpXG5jb25zdCBlMyA9IG5ldyBOb2RlKFwiZTNcIilcbmNvbnN0IGU0ID0gbmV3IE5vZGUoXCJlNFwiKVxuY29uc3QgZTUgPSBuZXcgTm9kZShcImU1XCIpXG5jb25zdCBlNiA9IG5ldyBOb2RlKFwiZTZcIilcbmNvbnN0IGU3ID0gbmV3IE5vZGUoXCJlN1wiKVxuY29uc3QgZTggPSBuZXcgTm9kZShcImU4XCIpXG5jb25zdCBmMSA9IG5ldyBOb2RlKFwiZjFcIilcbmNvbnN0IGYyID0gbmV3IE5vZGUoXCJmMlwiKVxuY29uc3QgZjMgPSBuZXcgTm9kZShcImYzXCIpXG5jb25zdCBmNCA9IG5ldyBOb2RlKFwiZjRcIilcbmNvbnN0IGY1ID0gbmV3IE5vZGUoXCJmNVwiKVxuY29uc3QgZjYgPSBuZXcgTm9kZShcImY2XCIpXG5jb25zdCBmNyA9IG5ldyBOb2RlKFwiZjdcIilcbmNvbnN0IGY4ID0gbmV3IE5vZGUoXCJmOFwiKVxuY29uc3QgZzEgPSBuZXcgTm9kZShcImcxXCIpXG5jb25zdCBnMiA9IG5ldyBOb2RlKFwiZzJcIilcbmNvbnN0IGczID0gbmV3IE5vZGUoXCJnM1wiKVxuY29uc3QgZzQgPSBuZXcgTm9kZShcImc0XCIpXG5jb25zdCBnNSA9IG5ldyBOb2RlKFwiZzVcIilcbmNvbnN0IGc2ID0gbmV3IE5vZGUoXCJnNlwiKVxuY29uc3QgZzcgPSBuZXcgTm9kZShcImc3XCIpXG5jb25zdCBnOCA9IG5ldyBOb2RlKFwiZzhcIilcbmNvbnN0IGgxID0gbmV3IE5vZGUoXCJoMVwiKVxuY29uc3QgaDIgPSBuZXcgTm9kZShcImgyXCIpXG5jb25zdCBoMyA9IG5ldyBOb2RlKFwiaDNcIilcbmNvbnN0IGg0ID0gbmV3IE5vZGUoXCJoNFwiKVxuY29uc3QgaDUgPSBuZXcgTm9kZShcImg1XCIpXG5jb25zdCBoNiA9IG5ldyBOb2RlKFwiaDZcIilcbmNvbnN0IGg3ID0gbmV3IE5vZGUoXCJoN1wiKVxuY29uc3QgaDggPSBuZXcgTm9kZShcImg4XCIpXG5cbmNvbnN0IGFkakxpc3QyID0geyBcbiAgICBhMTogW2MyLCBiM10sIFxuICAgIGEyOiBbYzEsIGMzLCBiNF0sXG4gICAgYTM6IFtiMSwgYzIsIGM0LCBiNV0sIFxuICAgIGE0OiBbYjIsIGMzLCBjNSwgYjZdLCBcbiAgICBhNTogW2IzLCBjNCwgYzYsIGI3XSxcbiAgICBhNjogW2I0LCBjNSwgYzcsIGI4XSxcbiAgICBhNzogW2I1LCBjNiwgYzhdLFxuICAgIGE4OiBbYjYsIGM3XSxcbiAgICBiMTogW2EzLCBjMywgZDJdLFxuICAgIGIyOiBbYTQsIGM0LCBkMywgZDFdLFxuICAgIGIzOiBbYTUsIGM1LCBkNCwgZDIsIGMxLCBhMV0sXG4gICAgYjQ6IFthNiwgYzYsIGQ1LCBkMywgYzIsIGEyXSxcbiAgICBiNTogW2E3LCBjNywgZDYsIGQ0LCBjMywgYTNdLFxuICAgIGI2OiBbYTgsIGM4LCBkNywgZDUsIGM0LCBhNF0sXG4gICAgYjc6IFtkOCwgZDYsIGM1LCBhNV0sXG4gICAgYjg6IFtkNywgYzYsIGE2XSxcbiAgICBjMTogW2EyLCBiMywgZDMsIGUyXSxcbiAgICBjMjogW2ExLCBhMywgYjQsIGQ0LCBlMywgZTFdLFxuICAgIGMzOiBbYjEsIGEyLCBhNCwgYjUsIGQ1LCBlNCwgZTIsIGQxXSxcbiAgICBjNDogW2IyLCBhMywgYTUsIGI2LCBkNiwgZTUsIGUzLCBkMl0sXG4gICAgYzU6IFtiMywgYTQsIGE2LCBiNywgZDcsIGU2LCBlNCwgZDNdLFxuICAgIGM2OiBbYjQsIGE1LCBhNywgYjgsIGQ4LCBlNywgZTUsIGQ0XSxcbiAgICBjNzogW2I1LCBhNiwgYTgsIGU4LCBlNiwgZDVdLFxuICAgIGM4OiBbYjYsIGE3LCBlNywgZDZdLFxuICAgIGQxOiBbYjIsIGMzLCBlMywgZjJdLFxuICAgIGQyOiBbYjEsIGIzLCBjNCwgZTQsIGYzLCBmMV0sXG4gICAgZDM6IFtjMSwgYjIsIGI0LCBjNSwgZTUsIGY0LCBmMiwgZTFdLFxuICAgIGQ0OiBbYzIsIGIzLCBiNSwgYzYsIGU2LCBmNSwgZjMsIGUyXSxcbiAgICBkNTogW2MzLCBiNCwgYjYsIGM3LCBlNywgZjYsIGY0LCBlM10sXG4gICAgZDY6IFtjNCwgYjUsIGI3LCBjOCwgZTgsIGY3LCBmNSwgZTRdLFxuICAgIGQ3OiBbYzUsIGI2LCBiOCwgZjgsIGY2LCBlNV0sXG4gICAgZDg6IFtjNiwgYjcsIGY3LCBlNl0sXG4gICAgZTE6IFtjMiwgZDMsIGYzLCBnMl0sXG4gICAgZTI6IFtjMSwgYzMsIGQ0LCBmNCwgZzMsIGcxXSxcbiAgICBlMzogW2QxLCBjMiwgYzQsIGQ1LCBmNSwgZzQsIGcyLCBmMV0sXG4gICAgZTQ6IFtkMiwgYzMsIGM1LCBkNiwgZjYsIGc1LCBnMywgZjJdLFxuICAgIGU1OiBbZDMsIGM0LCBjNiwgZDcsIGY3LCBnNiwgZzQsIGYzXSxcbiAgICBlNjogW2Q0LCBjNSwgYzcsIGQ4LCBmOCwgZzcsIGc1LCBmNF0sXG4gICAgZTc6IFtkNSwgYzYsIGM4LCBnOCwgZzYsIGY1XSxcbiAgICBlODogW2Q2LCBjNywgZzcsIGY2XSxcbiAgICBmMTogW2QyLCBlMywgZzMsIGgyXSxcbiAgICBmMjogW2QxLCBkMywgZTQsIGc0LCBoMywgaDFdLFxuICAgIGYzOiBbZTEsIGQyLCBkNCwgZTUsIGc1LCBoNCwgaDIsIGcxXSxcbiAgICBmNDogW2UyLCBkMywgZDUsIGU2LCBnNiwgaDUsIGgzLCBnMl0sXG4gICAgZjU6IFtlMywgZDQsIGQ2LCBlNywgZzcsIGg2LCBoNCwgZzNdLFxuICAgIGY2OiBbZTQsIGQ1LCBkNywgZTgsIGc4LCBoNywgaDUsIGc0XSxcbiAgICBmNzogW2U1LCBkNiwgZDgsIGg4LCBoNiwgZzVdLFxuICAgIGY4OiBbZTYsIGQ3LCBoNywgZzZdLFxuICAgIGcxOiBbZTIsIGYzLCBoM10sXG4gICAgZzI6IFtlMSwgZTMsIGY0LCBoNF0sXG4gICAgZzM6IFtmMSwgZTIsIGU0LCBmNSwgaDUsIGgxXSxcbiAgICBnNDogW2YyLCBlMywgZTUsIGY2LCBoNiwgaDJdLFxuICAgIGc1OiBbZjMsIGU0LCBlNiwgZjcsIGg3LCBoM10sXG4gICAgZzY6IFtmNCwgZTUsIGU3LCBmOCwgaDgsIGg0XSxcbiAgICBnNzogW2Y1LCBlNiwgZTgsIGg1XSxcbiAgICBnODogW2Y2LCBlNywgaDZdLFxuICAgIGgxOiBbZjIsIGczXSxcbiAgICBoMjogW2YxLCBmMywgZzRdLFxuICAgIGgzOiBbZzEsIGYyLCBmNCwgZzVdLFxuICAgIGg0OiBbZzIsIGYzLCBmNSwgZzZdLFxuICAgIGg1OiBbZzMsIGY0LCBmNiwgZzddLFxuICAgIGg2OiBbZzQsIGY1LCBmNywgZzhdLFxuICAgIGg3OiBbZzUsIGY2LCBmOF0sXG4gICAgaDg6IFtnNiwgZjddXG59XG5cbmExLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYTFcIl07XG5hMi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImEyXCJdO1xuYTMuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJhM1wiXTtcbmE0LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYTRcIl07XG5hNS5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImE1XCJdO1xuYTYuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJhNlwiXTtcbmE3LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYTdcIl07XG5hOC5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImE4XCJdO1xuYjEuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJiMVwiXTtcbmIyLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYjJcIl07XG5iMy5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImIzXCJdO1xuYjQuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJiNFwiXTtcbmI1LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYjVcIl07XG5iNi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImI2XCJdO1xuYjcuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJiN1wiXTtcbmI4LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYjhcIl07XG5jMS5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImMxXCJdO1xuYzIuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJjMlwiXTtcbmMzLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYzNcIl07XG5jNC5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImM0XCJdO1xuYzUuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJjNVwiXTtcbmM2LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiYzZcIl07XG5jNy5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImM3XCJdO1xuYzguZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJjOFwiXTtcbmQxLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZDFcIl07XG5kMi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImQyXCJdO1xuZDMuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJkM1wiXTtcbmQ0LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZDRcIl07XG5kNS5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImQ1XCJdO1xuZDYuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJkNlwiXTtcbmQ3LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZDdcIl07XG5kOC5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImQ4XCJdO1xuZTEuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJlMVwiXTtcbmUyLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZTJcIl07XG5lMy5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImUzXCJdO1xuZTQuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJlNFwiXTtcbmU1LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZTVcIl07XG5lNi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImU2XCJdO1xuZTcuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJlN1wiXTtcbmU4LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZThcIl07XG5mMS5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImYxXCJdO1xuZjIuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJmMlwiXTtcbmYzLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZjNcIl07XG5mNC5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImY0XCJdO1xuZjUuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJmNVwiXTtcbmY2LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZjZcIl07XG5mNy5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImY3XCJdO1xuZjguZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJmOFwiXTtcbmcxLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZzFcIl07XG5nMi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImcyXCJdO1xuZzMuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJnM1wiXTtcbmc0LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZzRcIl07XG5nNS5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImc1XCJdO1xuZzYuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJnNlwiXTtcbmc3LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiZzdcIl07XG5nOC5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImc4XCJdO1xuaDEuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJoMVwiXTtcbmgyLmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiaDJcIl07XG5oMy5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImgzXCJdO1xuaDQuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJoNFwiXTtcbmg1LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiaDVcIl07XG5oNi5lZGdlc0xpc3QgPSBhZGpMaXN0MltcImg2XCJdO1xuaDcuZWRnZXNMaXN0ID0gYWRqTGlzdDJbXCJoN1wiXTtcbmg4LmVkZ2VzTGlzdCA9IGFkakxpc3QyW1wiaDhcIl07XG5cbi8vcmVtZW1iZXIsIGJlbG93IGFycmF5IGVsZW1lbnRzIGFyZSBvYmplY3RzLCBub3Qgc3RyaW5ncy4gQXJyYXkgaXMgZm9yIHN0cmluZ1RvTm9kZSgpc3JjL2luZGV4LmpzXG5jb25zdCBjaGVzc0JvYXJkU3F1YXJlcyA9IFsgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIxLCBiMiwgYjMsIGI0LCBiNSwgYjYsIGI3LCBiOCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlMSwgZTIsIGUzLCBlNCwgZTUsIGU2LCBlNywgZTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZjEsIGYyLCBmMywgZjQsIGY1LCBmNiwgZjcsIGY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGcxLCBnMiwgZzMsIGc0LCBnNSwgZzYsIGc3LCBnOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBoNywgaDggXVxuXG5jb25zdCBjaGVzc0dyYXBoID0gbmV3IEdyYXBoKFthMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiMSwgYjIsIGIzLCBiNCwgYjUsIGI2LCBiNywgYjgsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYzEsIGMyLCBjMywgYzQsIGM1LCBjNiwgYzcsIGM4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDcsIGQ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZTEsIGUyLCBlMywgZTQsIGU1LCBlNiwgZTcsIGU4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZjEsIGYyLCBmMywgZjQsIGY1LCBmNiwgZjcsIGY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzEsIGcyLCBnMywgZzQsIGc1LCBnNiwgZzcsIGc4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaDcsIGg4XSk7XG4vLyBic3QuYnJlYWR0aEZpcnN0VHJhdmVyc2FsKGExLCBhNSlcblxuXG4iXSwibmFtZXMiOlsia25pZ2h0SWNvbkpQRyIsInJlc2V0QnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwia25pZ2h0QnRuIiwidHJhdmFpbEJ0biIsImRpc3BsYXkiLCJtc2ciLCJnYW1lQm9hcmRDdG4iLCJnYW1lQm9hcmRCbG9ja3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImtuaWdodCIsInRyYXZlcnNlIiwiZ2FtZUJvYXJkT2ZmIiwicmVzZXQiLCJtb3ZlcyIsImxvY2F0aW9uIiwicmVsb2FkIiwibGVuZ3RoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiY2hlc3NHcmFwaCIsImJyZWFkdGhGaXJzdFRyYXZlcnNhbCIsImRpc3BsYXlNb3ZlcyIsInJldmVyc2UiLCJmb3JFYWNoIiwiZWwiLCJoaWdobGlnaHQiLCJzaG9ydGVzdFBhdGhTdHJpbmciLCJibG9jayIsImRhdGFzZXQiLCJhcnJheSIsInN0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImdhbWVCb2FyZCIsInNxdWFyZXMiLCJnZXRUaWxlIiwia25pZ2h0SWNvbiIsImUiLCJ0YXJnZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJnZXRBdHRyaWJ1dGUiLCJjaGVzc1NxdWFyZSIsInN0cmluZ1RvTm9kZSIsInB1c2giLCJkYXRhc2V0QXJyYXkiLCJ0ZW1wIiwiY2hlc3NCb2FyZFNxdWFyZXMiLCJmaW5kIiwidmFsdWUiLCJpbm5lclRleHQiLCJ0aWxlIiwidG9TdHJpbmciLCJOb2RlIiwiY29uc3RydWN0b3IiLCJlZGdlc0xpc3QiLCJjb25uZWN0Iiwibm9kZSIsImdldEFkamFjZW50Tm9kZXMiLCJpc0Nvbm5lY3RlZCIsImVkZ2UiLCJHcmFwaCIsIm5vZGVzIiwiYWRkVG9HcmFwaCIsInJlY29uc3RydWN0UGF0aCIsInZpc2l0ZWROb2RlcyIsInN0YXJ0Tm9kZSIsImVuZE5vZGUiLCJjdXJyZW50Tm9kZSIsInNob3J0ZXN0UGF0aCIsInN0YXJ0IiwiZW5kIiwicXVldWUiLCJzaGlmdCIsImFkamFjZW5jeSIsImhhc093blByb3BlcnR5IiwiYTEiLCJhMiIsImEzIiwiYTQiLCJhNSIsImE2IiwiYTciLCJhOCIsImIxIiwiYjIiLCJiMyIsImI0IiwiYjUiLCJiNiIsImI3IiwiYjgiLCJjMSIsImMyIiwiYzMiLCJjNCIsImM1IiwiYzYiLCJjNyIsImM4IiwiZDEiLCJkMiIsImQzIiwiZDQiLCJkNSIsImQ2IiwiZDciLCJkOCIsImUxIiwiZTIiLCJlMyIsImU0IiwiZTUiLCJlNiIsImU3IiwiZTgiLCJmMSIsImYyIiwiZjMiLCJmNCIsImY1IiwiZjYiLCJmNyIsImY4IiwiZzEiLCJnMiIsImczIiwiZzQiLCJnNSIsImc2IiwiZzciLCJnOCIsImgxIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImg3IiwiaDgiLCJhZGpMaXN0MiJdLCJzb3VyY2VSb290IjoiIn0=