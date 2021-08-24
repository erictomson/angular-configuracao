/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./MaterialIcons-Regular.eot */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./MaterialIcons-Regular.woff2 */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./MaterialIcons-Regular.woff */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./MaterialIcons-Regular.ttf */ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Material Icons\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  /* For IE6-8 */\n  src: local(\"Material Icons\"), local(\"MaterialIcons-Regular\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff2\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n}\n\n.material-icons {\n  font-family: \"Material Icons\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n\tfont-size: 20px;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tpadding: 30px;\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\theight: 100%;\r\n\tbackground-color: #6a1b9a;\r\n\tcolor: #FFF;\r\n\tfont-family: 'Roboto',sans-serif;\r\n}\r\n\r\na, a:visited{\r\n\tcolor:yellowgreen;\r\n}\r\n\r\nmain {\r\n\tbackground-color: #9c4dcc;\r\n\tpadding: 20px;\r\n\twidth: 400px;;\r\n}\r\n\r\nform{\r\n\tdisplay: flex;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n\tdisplay: block;\r\n\twidth:calc(100% - 100px);\r\n\tfont-size: 1rem;\r\n\tpadding: 5px;\r\n\talign-items: stretch;\r\n}\r\n\r\nform button {\r\n\twidth:100px;\r\n\tdisplay: block;\r\n\tfont-size: .7rem;\r\n\tborder: none;\r\n}\r\n\r\ntable{\r\n\twidth: 100%;\r\n\ttable-layout:fixed;\r\n\tborder-collapse: collapse;\r\n}\r\n\r\ntd{\r\n\tborder-bottom: 1px solid rgba(255,255,255,.3);\r\n\tpadding: 10px 0;\r\n}\r\n\r\ntr:hover td{\r\n\tbackground-color: rgba(255,255,255,.1);\r\n}\r\n\r\n\r\ntd:nth-child(1){\r\n\twidth: 24px;\r\n}\r\n\r\ntd:nth-child(3){\r\n\twidth: 72px;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n}\r\n\r\ntd:nth-child(2){\r\n\tcursor: default;\r\n}\r\n\r\ntd:nth-child(4){\r\n\twidth: 36px;\r\n}\r\n\r\ntr.done td:nth-child(2){\r\n\ttext-decoration: line-through;\r\n}\r\n\r\ntable input[type=checkbox]{\r\n\tcursor: pointer;\r\n}\r\n\r\ntable i{\r\n\tcursor: pointer;\r\n\topacity: .8;\r\n}\r\n\r\ntable i:hover{\r\n\topacity: 1;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.eot ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.eot");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf":
/*!************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.ttf ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.ttf");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff":
/*!*************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.woff");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2":
/*!**************************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/MaterialIcons-Regular.woff2 ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fonts/MaterialIcons-Regular.woff2");

/***/ }),

/***/ "./node_modules/material-icons/iconfont/material-icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/material-icons.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./material-icons.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/material-icons/iconfont/material-icons.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* 
(The MIT License)
Copyright (c) 2014-2021 Halász Ádám <adam@aimform.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = typeof process !== 'undefined' && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, networkInterfaces, mac, os; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ "./node_modules/material-icons/iconfont/material-icons.css");
/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ListaDeTarefas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/ListaDeTarefas */ "./src/models/ListaDeTarefas.ts");
// Importando estilos



var tarefas = new _models_ListaDeTarefas__WEBPACK_IMPORTED_MODULE_2__["ListaDeTarefas"](document.querySelector("main"));
// let formulario:HTMLFormElement = document.querySelector("form");
// let tabela:HTMLTableElement = document.querySelector("table");
// let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
// adicionar tarefas de exemplo
// let t1 = new Tarefa("Pagar escola das crianças",Prioridade.Alta);
// let t2 = new Tarefa("Tomar café antes da aula",Prioridade.Alta);
// t1.imprimir();
// t1.feita=false;
// t1.descricao="Teste1";
// t1.prioridade=3;
// const tarefas:Tarefa[] = [];
// const tarefas:Tarefa[] = [
//     // criar tarefas de exemplo
//     {
//         feita: false,
//         descricao: "Molhas a plantas",
//         prioridade: Prioridade.Baixa
//     },
//     {
//         feita: true,
//         descricao: "Por as crianças para dormir",
//         prioridade: Prioridade.Alta
//     },
//     {
//         feita: true,
//         descricao: "Assitir aula",
//         prioridade: Prioridade.Alta
//     },
//     {
//         feita: false,
//         descricao: "Fazer o desafio",
//         prioridade: Prioridade.Alta
//     }
// ]
// criar array de novas Tarefas
// const tarefas = [];
// // função para adicionar nova tarefa ao array de Tarefas
// function adicionarTarefa(descricao:string,prioridade:Prioridade) {
//     var tarefa:Tarefa = {feita:false,descricao:descricao,prioridade:prioridade};
//     var insert = tarefas.push(tarefa);
//     exibirTarefas(tarefas);
// }
// adicionarTarefa("Molhas a plantas",1);
// adicionarTarefa("Por as crianças para dormir",3);
//  ***ADICIONAR TAREFA***
// selecionar o botão no HTML
// let botaoSalvar:HTMLButtonElement = document.querySelector("form button");
// console.log(botaoSalvar);
// sensor de eventos do botão (ouvir o click)
// botaoSalvar.addEventListener("click", (event_submit) => {
//     // pausar o envio do formulário
//     event_submit.preventDefault();
//     alert("Botão clicado");
//     // selecionar o campo tf_2do no HMTL (input)
//     // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
//     // console.log(inputNovaTarefa.value);
//     // chamar a função para adicionar a nova tarefa, 
//     // passando o texto do campo tf_2do do HTML
//     // verifica se o campo está vazio
//     // if(inputNovaTarefa.value != "") {
//     //     adicionarTarefa(inputNovaTarefa.value,2);
//     //     // console.log(tarefas);
//     //     inputNovaTarefa.value="";
//     }
// })
// ***OUTRA FORMA DE RESOLVER O BOTÃO DO FORMULÁRIO ***
// formulario.addEventListener("submit", (event) => {
//     // console.log(event);
//     // interrompendo o envio do formulário
//     event.preventDefault();
//     // alert("Evento submit do formulário")
//     // Criar nova tarefa com prioridade baixa e com texto digitado pelo usuário
//     // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
//     if(inputNovaTarefa.value != "") {
//         // Criar a nova tarefa
//         let novaTarefa = new Tarefa(inputNovaTarefa.value,Prioridade.Baixa);
//         // Adicionar a nova tarefa ao array de tarefas
//         tarefas.push(novaTarefa);
//         //Limpar o input após a inclusão da nova tarefa
//         inputNovaTarefa.value="";
//     }
// Executar a exibirTarefas
//     exibirTarefas(tarefas);
// });
// selecionar o botao Remover
// Função não retornará valor
// function exibirTarefas(tarefas:Tarefa[]):void {
//     // verificar no HTML o objeto pai
//     // let tabela:HTMLTableElement = document.querySelector("table");
//     //limpar a tabela
//     tabela.innerHTML="";
//     // percorrer todos os elementos do array de tarefas recebido na chamada do método
//     for (const tarefa of tarefas) {
//         // console.log(tarefa.descricao);
//         // criar o elemento que receberá a tarefa
//         // let tr:HTMLTableRowElement = document.createElement("tr");
//         // tr.className = tarefa.feita?"done":"";
//         // tr.innerHTML = `<td>
//         //                     <input type="checkbox">
//         //                 </td>
//         //                 <td>
//         //                     ${tarefa.descricao}
//         //                 </td>
//         //                 <td>
//         //                     <i class="material-icons" onclick="deleteRow(this.parentNode.parentNode.rowIndex)">delete</i>
//         //                 </td>`
//         // adicionar a tarefa à tabela
//         tabela.appendChild(tarefa.toRow());
//         // ***outra forma de adicionar
//         // document.getElementById("table").appendChild(tarefa.toRow());
//         // tarefas.pop();
//         // console.log(tarefas);
//     }
// }
// exibirTarefas(tarefas);
// console.log(tarefas);


/***/ }),

/***/ "./src/models/ListaDeTarefas.ts":
/*!**************************************!*\
  !*** ./src/models/ListaDeTarefas.ts ***!
  \**************************************/
/*! exports provided: ListaDeTarefas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaDeTarefas", function() { return ListaDeTarefas; });
/* harmony import */ var _node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/uniqid/index.js */ "./node_modules/uniqid/index.js");
/* harmony import */ var _node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tarefa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tarefa */ "./src/models/Tarefa.ts");


var ListaDeTarefas = /** @class */ (function () {
    function ListaDeTarefas(main) {
        var _this = this;
        this.form = main.querySelector("form");
        this.tabela = main.querySelector("table");
        this.input = main.querySelector("form input");
        this.tarefas = [];
        // Quando o form for submetido, adicionar uma tarefa
        this.form.addEventListener("submit", function (event) {
            event.preventDefault();
            _this.adicionarTarefa();
        });
    }
    ListaDeTarefas.prototype.removerTarefa = function (tarefa) {
        var _this = this;
        var tr = tarefa.toRow();
        tr.querySelector("i").addEventListener("click", function () {
            console.log(_this.tarefas);
            // remove tarefa da tabela de tarefas (DOM)
            "document.getElementById(\"" + tarefa.id + "\").deleteRow(tr.rowIndex);";
            // remove tarefa do array de tarefas
            _this.tarefas.splice(_this.tarefas.indexOf(tarefa), 1);
            console.log(tarefa.id);
            // console.log(tarefa);
        });
        // console.log(tr);
        // let tr = tarefa.toRow();
        // tr.querySelector("i").addEventListener("click",()=>{
        //     tr.remove();
        //     console.log(this.tarefas);
        //     this.removerTarefa(tarefa);
        // })
        // let tarefaExcluir = document.getElementById(tarefa.id);
        // console.log(tarefaExcluir);
        //        tarefaExcluir.parentNode.removeChild
        // this.mostrarTarefas();
    };
    ListaDeTarefas.prototype.adicionarTarefa = function () {
        // interrompendo o envio do formulário
        // event.preventDefault();
        // Criar nova tarefa com prioridade baixa e com texto digitado pelo usuário
        // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
        // console.log(this.input);
        if (this.input.value == "")
            return;
        // Criar a nova tarefa
        var inputNew = new _Tarefa__WEBPACK_IMPORTED_MODULE_1__["Tarefa"](_node_modules_uniqid_index_js__WEBPACK_IMPORTED_MODULE_0___default()(), this.input.value, _Tarefa__WEBPACK_IMPORTED_MODULE_1__["Prioridade"].Baixa);
        // Adicionar a nova tarefa ao array de tarefas
        this.tarefas.push(inputNew);
        console.log(this.tarefas);
        // Criando a linha da tarefa
        var tr = inputNew.toRow();
        // tr.querySelector("i").addEventListener("click",()=>{
        //     tr.remove();
        //     console.log(this.tarefas);
        //     // this.removerTarefa(inputNew);
        //     this.removerTarefa(inputNew);
        // })
        // Executar a exibirTarefas(tarefas)
        this.tabela.appendChild(tr);
        //Limpar o input após a inclusão da nova tarefa
        this.input.value = "";
    };
    ListaDeTarefas.prototype.mostrarTarefas = function () {
        // limpar tabela
        this.tabela.innerHTML = "";
        // Mostrar tarefas no HTML
        for (var _i = 0, _a = this.tarefas; _i < _a.length; _i++) {
            var tarefa = _a[_i];
            this.tabela.appendChild(tarefa.toRow());
        }
    };
    return ListaDeTarefas;
}());



/***/ }),

/***/ "./src/models/Tarefa.ts":
/*!******************************!*\
  !*** ./src/models/Tarefa.ts ***!
  \******************************/
/*! exports provided: Tarefa, Prioridade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tarefa", function() { return Tarefa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prioridade", function() { return Prioridade; });
// export interface Tarefa {
var Tarefa = /** @class */ (function () {
    function Tarefa(id, texto, prioridade) {
        this.id = id;
        this.descricao = texto;
        this.prioridade = prioridade;
        this.feita = false;
    }
    Tarefa.prototype.toRow = function () {
        var _this = this;
        // criar o elemento que receberá a tarefa
        var tr = document.createElement("tr");
        tr.setAttribute("id", this.id);
        // tr.classList.toggle("done");
        // tr.className = this.feita?"done":"";
        tr.innerHTML = "<td><input type=\"checkbox\"></td>\n                        <td>" + this.descricao + "</td>\n                        <td><i class=\"material-icons\">delete</i></td>";
        // this.addEvents(tr);
        // *** SELECIONAR A TERA COM CHECKBOX
        // selecionar o checkbox
        var checkbox = tr.querySelector("input");
        checkbox.addEventListener("click", function (evento_check) {
            // atributo feita recebe o estado do checkbox
            _this.feita = checkbox.checked;
            //     // if ternário para alterar a className da linha
            //     // seletor CSS irá traçar a linha
            tr.className = _this.feita ? "done" : "";
        });
        // *** EXCLUIR A TAREFA
        //selecionar o botão delete
        // let botaoDelete = tr.querySelector("i");
        // botaoDelete.addEventListener("click", (evento_excluir) => {
        //     // alert("Deseja excluir a tarefa?");
        //     tr.remove();
        // })
        return (tr);
    };
    //adiciona um evento para a nova linha
    // addEvents(tr:HTMLTableRowElement) {
    //     // seleciona os inputs da linha
    //     let checkbox = tr.querySelector("input");
    //     // configura um sensor de eventos para o input
    //     // verificar se é checkbox e com propriedade checked=true
    //     tr.querySelector("input").addEventListener("change", (event) => {
    //         if(checkbox.checked) 
    //             // alterar a className da linha
    //             // seletor CSS irá traçar a linha
    //             tr.className="done";
    //         else 
    //             tr.className="";
    //     });
    // }
    Tarefa.prototype.imprimir = function () {
        console.log("[" + (this.feita ? "x" : "") + "] " + this.descricao + " [ " + this.prioridade + "]");
    };
    return Tarefa;
}());

var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Baixa"] = 1] = "Baixa";
    Prioridade[Prioridade["Media"] = 2] = "Media";
    Prioridade[Prioridade["Alta"] = 3] = "Alta";
})(Prioridade || (Prioridade = {}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWljb25zL2ljb25mb250L01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtaWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzPzdkYjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaXFpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9MaXN0YURlVGFyZWZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1RhcmVmYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkZBQXNDO0FBQ2hGLHNDQUFzQyxtQkFBTyxDQUFDLGlHQUF5QztBQUN2RixvQ0FBb0MsbUJBQU8sQ0FBQyxxR0FBNkI7QUFDekUsb0NBQW9DLG1CQUFPLENBQUMseUdBQStCO0FBQzNFLG9DQUFvQyxtQkFBTyxDQUFDLHVHQUE4QjtBQUMxRSxvQ0FBb0MsbUJBQU8sQ0FBQyxxR0FBNkI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsb0NBQW9DLHVCQUF1QixxQkFBcUIseURBQXlELG1TQUFtUyxHQUFHLHFCQUFxQixvQ0FBb0Msd0JBQXdCLHVC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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx6Qjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxD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VSxNQUFHLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBbUJMLGFBQUM7QUFBRCxDQUFDOztBQUVELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQiw2Q0FBTztJQUNQLDZDQUFPO0lBQ1AsMkNBQU07QUFDVixDQUFDLEVBSlcsVUFBVSxLQUFWLFVBQVUsUUFJckI7Ozs7Ozs7Ozs7OztBQ3pGRCxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIi4vTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IHJlcXVpcmUoXCIuL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gcmVxdWlyZShcIi4vTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1hdGVyaWFsIEljb25zXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAvKiBGb3IgSUU2LTggKi9cXG4gIHNyYzogbG9jYWwoXFxcIk1hdGVyaWFsIEljb25zXFxcIiksIGxvY2FsKFxcXCJNYXRlcmlhbEljb25zLVJlZ3VsYXJcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtaWNvbnMge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNYXRlcmlhbCBJY29uc1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICM2YTFiOWE7XFxyXFxuXFx0Y29sb3I6ICNGRkY7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmEsIGE6dmlzaXRlZHtcXHJcXG5cXHRjb2xvcjp5ZWxsb3dncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzljNGRjYztcXHJcXG5cXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdHdpZHRoOiA0MDBweDs7XFxyXFxufVxcclxcblxcclxcbmZvcm17XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGlucHV0IHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHR3aWR0aDpjYWxjKDEwMCUgLSAxMDBweCk7XFxyXFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdHBhZGRpbmc6IDVweDtcXHJcXG5cXHRhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcblxcdHdpZHRoOjEwMHB4O1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdGZvbnQtc2l6ZTogLjdyZW07XFxyXFxuXFx0Ym9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG50YWJsZXtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG5cXHR0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG59XFxyXFxuXFxyXFxudGR7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjMpO1xcclxcblxcdHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxudHI6aG92ZXIgdGR7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbnRkOm50aC1jaGlsZCgxKXtcXHJcXG5cXHR3aWR0aDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxudGQ6bnRoLWNoaWxkKDMpe1xcclxcblxcdHdpZHRoOiA3MnB4O1xcclxcblxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCgyKXtcXHJcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbnRkOm50aC1jaGlsZCg0KXtcXHJcXG5cXHR3aWR0aDogMzZweDtcXHJcXG59XFxyXFxuXFxyXFxudHIuZG9uZSB0ZDpudGgtY2hpbGQoMil7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIGlucHV0W3R5cGU9Y2hlY2tib3hde1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxudGFibGUgaXtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0b3BhY2l0eTogLjg7XFxyXFxufVxcclxcblxcclxcbnRhYmxlIGk6aG92ZXJ7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYXRlcmlhbC1pY29ucy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDIxIEhhbMOhc3ogw4Fkw6FtIDxhZGFtQGFpbWZvcm0uY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLnBpZCA/IHByb2Nlc3MucGlkLnRvU3RyaW5nKDM2KSA6ICcnIDtcbnZhciBhZGRyZXNzID0gJyc7XG5pZih0eXBlb2YgX193ZWJwYWNrX3JlcXVpcmVfXyAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciBtYWMgPSAnJywgb3MgPSByZXF1aXJlKCdvcycpOyBcbiAgICBpZihvcy5uZXR3b3JrSW50ZXJmYWNlcykgdmFyIG5ldHdvcmtJbnRlcmZhY2VzID0gb3MubmV0d29ya0ludGVyZmFjZXMoKTtcbiAgICBpZihuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgIGxvb3A6XG4gICAgICAgIGZvcihsZXQgaW50ZXJmYWNlX2tleSBpbiBuZXR3b3JrSW50ZXJmYWNlcyl7XG4gICAgICAgICAgICBjb25zdCBuZXR3b3JrSW50ZXJmYWNlID0gbmV0d29ya0ludGVyZmFjZXNbaW50ZXJmYWNlX2tleV07XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgaWYobmV0d29ya0ludGVyZmFjZVtpXSAhPT0gdW5kZWZpbmVkICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgICAgICBtYWMgPSBuZXR3b3JrSW50ZXJmYWNlW2ldLm1hYzsgYnJlYWsgbG9vcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYWRkcmVzcyA9IG1hYyA/IHBhcnNlSW50KG1hYy5yZXBsYWNlKC9cXDp8XFxEKy9naSwgJycpKS50b1N0cmluZygzNikgOiAnJyA7XG4gICAgfVxufSBcblxuLy8gIEV4cG9ydHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubW9kdWxlLmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIGFkZHJlc3MgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIHBpZCArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cbm1vZHVsZS5leHBvcnRzLnRpbWUgICAgPSBmdW5jdGlvbihwcmVmaXgsIHN1ZmZpeCl7IHJldHVybiAocHJlZml4ID8gcHJlZml4IDogJycpICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxuXG4vLyAgSGVscGVyc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5mdW5jdGlvbiBub3coKXtcbiAgICB2YXIgdGltZSA9IERhdGUubm93KCk7XG4gICAgdmFyIGxhc3QgPSBub3cubGFzdCB8fCB0aW1lO1xuICAgIHJldHVybiBub3cubGFzdCA9IHRpbWUgPiBsYXN0ID8gdGltZSA6IGxhc3QgKyAxO1xufVxuIiwiLy8gSW1wb3J0YW5kbyBlc3RpbG9zXHJcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBcIm1hdGVyaWFsLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzc1wiO1xyXG4vLyBJbXBvcnRhbmRvIG1vZGVsb3MgZGVmaW5pZG9zIG5hIHBhc3RhIG1vZGVsc1xyXG5pbXBvcnQgeyBUYXJlZmEsIFByaW9yaWRhZGUgfSBmcm9tIFwiLi9tb2RlbHMvVGFyZWZhXCI7XHJcbmltcG9ydCB7IExpc3RhRGVUYXJlZmFzIH0gZnJvbSBcIi4vbW9kZWxzL0xpc3RhRGVUYXJlZmFzXCI7XHJcblxyXG5sZXQgdGFyZWZhcyA9IG5ldyBMaXN0YURlVGFyZWZhcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSk7XHJcblxyXG4vLyBsZXQgZm9ybXVsYXJpbzpIVE1MRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuLy8gbGV0IHRhYmVsYTpIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4vLyBsZXQgaW5wdXROb3ZhVGFyZWZhOkhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybSBpbnB1dFwiKTtcclxuXHJcbi8vIGFkaWNpb25hciB0YXJlZmFzIGRlIGV4ZW1wbG9cclxuLy8gbGV0IHQxID0gbmV3IFRhcmVmYShcIlBhZ2FyIGVzY29sYSBkYXMgY3JpYW7Dp2FzXCIsUHJpb3JpZGFkZS5BbHRhKTtcclxuLy8gbGV0IHQyID0gbmV3IFRhcmVmYShcIlRvbWFyIGNhZsOpIGFudGVzIGRhIGF1bGFcIixQcmlvcmlkYWRlLkFsdGEpO1xyXG5cclxuLy8gdDEuaW1wcmltaXIoKTtcclxuXHJcbi8vIHQxLmZlaXRhPWZhbHNlO1xyXG4vLyB0MS5kZXNjcmljYW89XCJUZXN0ZTFcIjtcclxuLy8gdDEucHJpb3JpZGFkZT0zO1xyXG5cclxuLy8gY29uc3QgdGFyZWZhczpUYXJlZmFbXSA9IFtdO1xyXG5cclxuLy8gY29uc3QgdGFyZWZhczpUYXJlZmFbXSA9IFtcclxuLy8gICAgIC8vIGNyaWFyIHRhcmVmYXMgZGUgZXhlbXBsb1xyXG4vLyAgICAge1xyXG4vLyAgICAgICAgIGZlaXRhOiBmYWxzZSxcclxuLy8gICAgICAgICBkZXNjcmljYW86IFwiTW9saGFzIGEgcGxhbnRhc1wiLFxyXG4vLyAgICAgICAgIHByaW9yaWRhZGU6IFByaW9yaWRhZGUuQmFpeGFcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgZmVpdGE6IHRydWUsXHJcbi8vICAgICAgICAgZGVzY3JpY2FvOiBcIlBvciBhcyBjcmlhbsOnYXMgcGFyYSBkb3JtaXJcIixcclxuLy8gICAgICAgICBwcmlvcmlkYWRlOiBQcmlvcmlkYWRlLkFsdGFcclxuLy8gICAgIH0sXHJcbi8vICAgICB7XHJcbi8vICAgICAgICAgZmVpdGE6IHRydWUsXHJcbi8vICAgICAgICAgZGVzY3JpY2FvOiBcIkFzc2l0aXIgYXVsYVwiLFxyXG4vLyAgICAgICAgIHByaW9yaWRhZGU6IFByaW9yaWRhZGUuQWx0YVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHtcclxuLy8gICAgICAgICBmZWl0YTogZmFsc2UsXHJcbi8vICAgICAgICAgZGVzY3JpY2FvOiBcIkZhemVyIG8gZGVzYWZpb1wiLFxyXG4vLyAgICAgICAgIHByaW9yaWRhZGU6IFByaW9yaWRhZGUuQWx0YVxyXG4vLyAgICAgfVxyXG4vLyBdXHJcblxyXG4vLyBjcmlhciBhcnJheSBkZSBub3ZhcyBUYXJlZmFzXHJcbi8vIGNvbnN0IHRhcmVmYXMgPSBbXTtcclxuXHJcbi8vIC8vIGZ1bsOnw6NvIHBhcmEgYWRpY2lvbmFyIG5vdmEgdGFyZWZhIGFvIGFycmF5IGRlIFRhcmVmYXNcclxuLy8gZnVuY3Rpb24gYWRpY2lvbmFyVGFyZWZhKGRlc2NyaWNhbzpzdHJpbmcscHJpb3JpZGFkZTpQcmlvcmlkYWRlKSB7XHJcbi8vICAgICB2YXIgdGFyZWZhOlRhcmVmYSA9IHtmZWl0YTpmYWxzZSxkZXNjcmljYW86ZGVzY3JpY2FvLHByaW9yaWRhZGU6cHJpb3JpZGFkZX07XHJcbi8vICAgICB2YXIgaW5zZXJ0ID0gdGFyZWZhcy5wdXNoKHRhcmVmYSk7XHJcbi8vICAgICBleGliaXJUYXJlZmFzKHRhcmVmYXMpO1xyXG4vLyB9XHJcblxyXG4vLyBhZGljaW9uYXJUYXJlZmEoXCJNb2xoYXMgYSBwbGFudGFzXCIsMSk7XHJcbi8vIGFkaWNpb25hclRhcmVmYShcIlBvciBhcyBjcmlhbsOnYXMgcGFyYSBkb3JtaXJcIiwzKTtcclxuXHJcbi8vICAqKipBRElDSU9OQVIgVEFSRUZBKioqXHJcblxyXG4vLyBzZWxlY2lvbmFyIG8gYm90w6NvIG5vIEhUTUxcclxuLy8gbGV0IGJvdGFvU2FsdmFyOkhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gYnV0dG9uXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhib3Rhb1NhbHZhcik7XHJcblxyXG4vLyBzZW5zb3IgZGUgZXZlbnRvcyBkbyBib3TDo28gKG91dmlyIG8gY2xpY2spXHJcbi8vIGJvdGFvU2FsdmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnRfc3VibWl0KSA9PiB7XHJcbi8vICAgICAvLyBwYXVzYXIgbyBlbnZpbyBkbyBmb3JtdWzDoXJpb1xyXG4vLyAgICAgZXZlbnRfc3VibWl0LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBhbGVydChcIkJvdMOjbyBjbGljYWRvXCIpO1xyXG4vLyAgICAgLy8gc2VsZWNpb25hciBvIGNhbXBvIHRmXzJkbyBubyBITVRMIChpbnB1dClcclxuLy8gICAgIC8vIGxldCBpbnB1dE5vdmFUYXJlZmE6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0XCIpO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coaW5wdXROb3ZhVGFyZWZhLnZhbHVlKTtcclxuLy8gICAgIC8vIGNoYW1hciBhIGZ1bsOnw6NvIHBhcmEgYWRpY2lvbmFyIGEgbm92YSB0YXJlZmEsIFxyXG4vLyAgICAgLy8gcGFzc2FuZG8gbyB0ZXh0byBkbyBjYW1wbyB0Zl8yZG8gZG8gSFRNTFxyXG4vLyAgICAgLy8gdmVyaWZpY2Egc2UgbyBjYW1wbyBlc3TDoSB2YXppb1xyXG4vLyAgICAgLy8gaWYoaW5wdXROb3ZhVGFyZWZhLnZhbHVlICE9IFwiXCIpIHtcclxuLy8gICAgIC8vICAgICBhZGljaW9uYXJUYXJlZmEoaW5wdXROb3ZhVGFyZWZhLnZhbHVlLDIpO1xyXG4vLyAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRhcmVmYXMpO1xyXG4vLyAgICAgLy8gICAgIGlucHV0Tm92YVRhcmVmYS52YWx1ZT1cIlwiO1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG5cclxuXHJcblxyXG4vLyAqKipPVVRSQSBGT1JNQSBERSBSRVNPTFZFUiBPIEJPVMODTyBETyBGT1JNVUzDgVJJTyAqKipcclxuLy8gZm9ybXVsYXJpby5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4vLyAgICAgLy8gaW50ZXJyb21wZW5kbyBvIGVudmlvIGRvIGZvcm11bMOhcmlvXHJcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgLy8gYWxlcnQoXCJFdmVudG8gc3VibWl0IGRvIGZvcm11bMOhcmlvXCIpXHJcblxyXG4vLyAgICAgLy8gQ3JpYXIgbm92YSB0YXJlZmEgY29tIHByaW9yaWRhZGUgYmFpeGEgZSBjb20gdGV4dG8gZGlnaXRhZG8gcGVsbyB1c3XDoXJpb1xyXG4vLyAgICAgLy8gbGV0IGlucHV0Tm92YVRhcmVmYTpIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm0gaW5wdXRcIik7XHJcbi8vICAgICBpZihpbnB1dE5vdmFUYXJlZmEudmFsdWUgIT0gXCJcIikge1xyXG4vLyAgICAgICAgIC8vIENyaWFyIGEgbm92YSB0YXJlZmFcclxuLy8gICAgICAgICBsZXQgbm92YVRhcmVmYSA9IG5ldyBUYXJlZmEoaW5wdXROb3ZhVGFyZWZhLnZhbHVlLFByaW9yaWRhZGUuQmFpeGEpO1xyXG4vLyAgICAgICAgIC8vIEFkaWNpb25hciBhIG5vdmEgdGFyZWZhIGFvIGFycmF5IGRlIHRhcmVmYXNcclxuLy8gICAgICAgICB0YXJlZmFzLnB1c2gobm92YVRhcmVmYSk7XHJcbi8vICAgICAgICAgLy9MaW1wYXIgbyBpbnB1dCBhcMOzcyBhIGluY2x1c8OjbyBkYSBub3ZhIHRhcmVmYVxyXG4vLyAgICAgICAgIGlucHV0Tm92YVRhcmVmYS52YWx1ZT1cIlwiO1xyXG4vLyAgICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGFyIGEgZXhpYmlyVGFyZWZhc1xyXG4vLyAgICAgZXhpYmlyVGFyZWZhcyh0YXJlZmFzKTtcclxuXHJcbi8vIH0pO1xyXG5cclxuLy8gc2VsZWNpb25hciBvIGJvdGFvIFJlbW92ZXJcclxuXHJcblxyXG4vLyBGdW7Dp8OjbyBuw6NvIHJldG9ybmFyw6EgdmFsb3JcclxuLy8gZnVuY3Rpb24gZXhpYmlyVGFyZWZhcyh0YXJlZmFzOlRhcmVmYVtdKTp2b2lkIHtcclxuLy8gICAgIC8vIHZlcmlmaWNhciBubyBIVE1MIG8gb2JqZXRvIHBhaVxyXG4vLyAgICAgLy8gbGV0IHRhYmVsYTpIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4vLyAgICAgLy9saW1wYXIgYSB0YWJlbGFcclxuLy8gICAgIHRhYmVsYS5pbm5lckhUTUw9XCJcIjtcclxuLy8gICAgIC8vIHBlcmNvcnJlciB0b2RvcyBvcyBlbGVtZW50b3MgZG8gYXJyYXkgZGUgdGFyZWZhcyByZWNlYmlkbyBuYSBjaGFtYWRhIGRvIG3DqXRvZG9cclxuLy8gICAgIGZvciAoY29uc3QgdGFyZWZhIG9mIHRhcmVmYXMpIHtcclxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJlZmEuZGVzY3JpY2FvKTtcclxuLy8gICAgICAgICAvLyBjcmlhciBvIGVsZW1lbnRvIHF1ZSByZWNlYmVyw6EgYSB0YXJlZmFcclxuLy8gICAgICAgICAvLyBsZXQgdHI6SFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuLy8gICAgICAgICAvLyB0ci5jbGFzc05hbWUgPSB0YXJlZmEuZmVpdGE/XCJkb25lXCI6XCJcIjtcclxuLy8gICAgICAgICAvLyB0ci5pbm5lckhUTUwgPSBgPHRkPlxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3RkPlxyXG4vLyAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8dGQ+XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAke3RhcmVmYS5kZXNjcmljYW99XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBvbmNsaWNrPVwiZGVsZXRlUm93KHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJvd0luZGV4KVwiPmRlbGV0ZTwvaT5cclxuLy8gICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC90ZD5gXHJcbi8vICAgICAgICAgLy8gYWRpY2lvbmFyIGEgdGFyZWZhIMOgIHRhYmVsYVxyXG4vLyAgICAgICAgIHRhYmVsYS5hcHBlbmRDaGlsZCh0YXJlZmEudG9Sb3coKSk7XHJcbi8vICAgICAgICAgLy8gKioqb3V0cmEgZm9ybWEgZGUgYWRpY2lvbmFyXHJcbi8vICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZVwiKS5hcHBlbmRDaGlsZCh0YXJlZmEudG9Sb3coKSk7XHJcbi8vICAgICAgICAgLy8gdGFyZWZhcy5wb3AoKTtcclxuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXJlZmFzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhpYmlyVGFyZWZhcyh0YXJlZmFzKTtcclxuLy8gY29uc29sZS5sb2codGFyZWZhcyk7IiwiaW1wb3J0IHVuaXFpZCBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvdW5pcWlkL2luZGV4LmpzJztcclxuaW1wb3J0IHsgVGFyZWZhLCBQcmlvcmlkYWRlIH0gZnJvbSBcIi4vVGFyZWZhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdGFEZVRhcmVmYXMge1xyXG5cclxuICAgIHRhcmVmYXM6VGFyZWZhW107XHJcbiAgICBpbnB1dDpIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgZm9ybTpIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICB0YWJlbGE6SFRNTFRhYmxlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYWluOkhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gbWFpbi5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgICAgICB0aGlzLnRhYmVsYSA9IG1haW4ucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMudGFyZWZhcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBRdWFuZG8gbyBmb3JtIGZvciBzdWJtZXRpZG8sIGFkaWNpb25hciB1bWEgdGFyZWZhXHJcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KT0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5hZGljaW9uYXJUYXJlZmEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVyVGFyZWZhKHRhcmVmYTpUYXJlZmEpe1xyXG5cclxuICAgICAgICBsZXQgdHI9dGFyZWZhLnRvUm93KCk7XHJcblxyXG4gICAgICAgIHRyLnF1ZXJ5U2VsZWN0b3IoXCJpXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFyZWZhcyk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0YXJlZmEgZGEgdGFiZWxhIGRlIHRhcmVmYXMgKERPTSlcclxuICAgICAgICAgICAgYGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiJHt0YXJlZmEuaWR9XCIpLmRlbGV0ZVJvdyh0ci5yb3dJbmRleCk7YFxyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGFyZWZhIGRvIGFycmF5IGRlIHRhcmVmYXNcclxuICAgICAgICAgICAgdGhpcy50YXJlZmFzLnNwbGljZSh0aGlzLnRhcmVmYXMuaW5kZXhPZih0YXJlZmEpLDEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGFyZWZhLmlkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFyZWZhKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBsZXQgdHIgPSB0YXJlZmEudG9Sb3coKTtcclxuICAgICAgICAvLyB0ci5xdWVyeVNlbGVjdG9yKFwiaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgIC8vICAgICB0ci5yZW1vdmUoKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YXJlZmFzKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZW1vdmVyVGFyZWZhKHRhcmVmYSk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBsZXQgdGFyZWZhRXhjbHVpciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmVmYS5pZCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGFyZWZhRXhjbHVpcik7XHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgIHRhcmVmYUV4Y2x1aXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZFxyXG4gICAgICAgIC8vIHRoaXMubW9zdHJhclRhcmVmYXMoKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkaWNpb25hclRhcmVmYSgpe1xyXG4gICAgICAgIC8vIGludGVycm9tcGVuZG8gbyBlbnZpbyBkbyBmb3JtdWzDoXJpb1xyXG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gQ3JpYXIgbm92YSB0YXJlZmEgY29tIHByaW9yaWRhZGUgYmFpeGEgZSBjb20gdGV4dG8gZGlnaXRhZG8gcGVsbyB1c3XDoXJpb1xyXG4gICAgICAgIC8vIGxldCBpbnB1dE5vdmFUYXJlZmE6SFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtIGlucHV0XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5wdXQpO1xyXG4gICAgICAgIGlmKHRoaXMuaW5wdXQudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xyXG4gICAgICAgIC8vIENyaWFyIGEgbm92YSB0YXJlZmFcclxuICAgICAgICBsZXQgaW5wdXROZXcgPSBuZXcgVGFyZWZhKHVuaXFpZCgpLHRoaXMuaW5wdXQudmFsdWUsUHJpb3JpZGFkZS5CYWl4YSk7XHJcbiAgICAgICAgLy8gQWRpY2lvbmFyIGEgbm92YSB0YXJlZmEgYW8gYXJyYXkgZGUgdGFyZWZhc1xyXG4gICAgICAgIHRoaXMudGFyZWZhcy5wdXNoKGlucHV0TmV3KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRhcmVmYXMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENyaWFuZG8gYSBsaW5oYSBkYSB0YXJlZmFcclxuICAgICAgICBsZXQgdHIgPSBpbnB1dE5ldy50b1JvdygpO1xyXG5cclxuICAgICAgICAvLyB0ci5xdWVyeVNlbGVjdG9yKFwiaVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xyXG4gICAgICAgIC8vICAgICB0ci5yZW1vdmUoKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy50YXJlZmFzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMucmVtb3ZlclRhcmVmYShpbnB1dE5ldyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVtb3ZlclRhcmVmYShpbnB1dE5ldyk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0YXIgYSBleGliaXJUYXJlZmFzKHRhcmVmYXMpXHJcbiAgICAgICAgdGhpcy50YWJlbGEuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIC8vTGltcGFyIG8gaW5wdXQgYXDDs3MgYSBpbmNsdXPDo28gZGEgbm92YSB0YXJlZmFcclxuICAgICAgICB0aGlzLmlucHV0LnZhbHVlPVwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW9zdHJhclRhcmVmYXMoKTp2b2lkIHtcclxuICAgICAgICAvLyBsaW1wYXIgdGFiZWxhXHJcbiAgICAgICAgdGhpcy50YWJlbGEuaW5uZXJIVE1MPVwiXCI7XHJcblxyXG4gICAgICAgIC8vIE1vc3RyYXIgdGFyZWZhcyBubyBIVE1MXHJcbiAgICAgICAgZm9yKGxldCB0YXJlZmEgb2YgdGhpcy50YXJlZmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiZWxhLmFwcGVuZENoaWxkKHRhcmVmYS50b1JvdygpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBleHBvcnQgaW50ZXJmYWNlIFRhcmVmYSB7XHJcbmV4cG9ydCBjbGFzcyBUYXJlZmEge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZlaXRhOiBib29sZWFuO1xyXG4gICAgZGVzY3JpY2FvOiBzdHJpbmc7XHJcbiAgICBwcmlvcmlkYWRlOiBQcmlvcmlkYWRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRleHRvOnN0cmluZywgcHJpb3JpZGFkZTogUHJpb3JpZGFkZSkge1xyXG4gICAgICAgIHRoaXMuaWQ9aWQ7XHJcbiAgICAgICAgdGhpcy5kZXNjcmljYW8gPSB0ZXh0bztcclxuICAgICAgICB0aGlzLnByaW9yaWRhZGUgPSBwcmlvcmlkYWRlO1xyXG4gICAgICAgIHRoaXMuZmVpdGE9ZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdG9Sb3coKTpIVE1MVGFibGVSb3dFbGVtZW50IHtcclxuICAgICAgICAvLyBjcmlhciBvIGVsZW1lbnRvIHF1ZSByZWNlYmVyw6EgYSB0YXJlZmFcclxuICAgICAgICBsZXQgdHI6SFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICB0ci5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuaWQpO1xyXG4gICAgICAgIC8vIHRyLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpO1xyXG4gICAgICAgIC8vIHRyLmNsYXNzTmFtZSA9IHRoaXMuZmVpdGE/XCJkb25lXCI6XCJcIjtcclxuICAgICAgICB0ci5pbm5lckhUTUwgPSBgPHRkPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+JHt0aGlzLmRlc2NyaWNhb308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvaT48L3RkPmA7XHJcbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudHModHIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vICoqKiBTRUxFQ0lPTkFSIEEgVEVSQSBDT00gQ0hFQ0tCT1hcclxuICAgICAgICAvLyBzZWxlY2lvbmFyIG8gY2hlY2tib3hcclxuICAgICAgICBsZXQgY2hlY2tib3g6SFRNTElucHV0RWxlbWVudCA9IHRyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50b19jaGVjaykgPT4ge1xyXG4gICAgICAgICAgICAvLyBhdHJpYnV0byBmZWl0YSByZWNlYmUgbyBlc3RhZG8gZG8gY2hlY2tib3hcclxuICAgICAgICAgICAgdGhpcy5mZWl0YSA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBpZiB0ZXJuw6FyaW8gcGFyYSBhbHRlcmFyIGEgY2xhc3NOYW1lIGRhIGxpbmhhXHJcbiAgICAgICAgICAgIC8vICAgICAvLyBzZWxldG9yIENTUyBpcsOhIHRyYcOnYXIgYSBsaW5oYVxyXG4gICAgICAgICAgICB0ci5jbGFzc05hbWUgPSB0aGlzLmZlaXRhID8gXCJkb25lXCIgOiBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAqKiogRVhDTFVJUiBBIFRBUkVGQVxyXG4gICAgICAgIC8vc2VsZWNpb25hciBvIGJvdMOjbyBkZWxldGVcclxuICAgICAgICAvLyBsZXQgYm90YW9EZWxldGUgPSB0ci5xdWVyeVNlbGVjdG9yKFwiaVwiKTtcclxuICAgICAgICAvLyBib3Rhb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50b19leGNsdWlyKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIGFsZXJ0KFwiRGVzZWphIGV4Y2x1aXIgYSB0YXJlZmE/XCIpO1xyXG4gICAgICAgIC8vICAgICB0ci5yZW1vdmUoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHJldHVybih0cik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hZGljaW9uYSB1bSBldmVudG8gcGFyYSBhIG5vdmEgbGluaGFcclxuICAgIC8vIGFkZEV2ZW50cyh0cjpIVE1MVGFibGVSb3dFbGVtZW50KSB7XHJcbiAgICAvLyAgICAgLy8gc2VsZWNpb25hIG9zIGlucHV0cyBkYSBsaW5oYVxyXG4gICAgLy8gICAgIGxldCBjaGVja2JveCA9IHRyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIC8vICAgICAvLyBjb25maWd1cmEgdW0gc2Vuc29yIGRlIGV2ZW50b3MgcGFyYSBvIGlucHV0XHJcbiAgICAvLyAgICAgLy8gdmVyaWZpY2FyIHNlIMOpIGNoZWNrYm94IGUgY29tIHByb3ByaWVkYWRlIGNoZWNrZWQ9dHJ1ZVxyXG4gICAgLy8gICAgIHRyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZihjaGVja2JveC5jaGVja2VkKSBcclxuICAgIC8vICAgICAgICAgICAgIC8vIGFsdGVyYXIgYSBjbGFzc05hbWUgZGEgbGluaGFcclxuICAgIC8vICAgICAgICAgICAgIC8vIHNlbGV0b3IgQ1NTIGlyw6EgdHJhw6dhciBhIGxpbmhhXHJcbiAgICAvLyAgICAgICAgICAgICB0ci5jbGFzc05hbWU9XCJkb25lXCI7XHJcbiAgICAvLyAgICAgICAgIGVsc2UgXHJcbiAgICAvLyAgICAgICAgICAgICB0ci5jbGFzc05hbWU9XCJcIjtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBpbXByaW1pcigpOnZvaWR7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFske3RoaXMuZmVpdGE/XCJ4XCI6XCJcIn1dICR7dGhpcy5kZXNjcmljYW99IFsgJHt0aGlzLnByaW9yaWRhZGV9XWApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGltcHJpbWlyKCkgXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgLy8gc3RyaW5nIHBhcmEgZXhpYmlyIGEgbWVuc2FnZW1cclxuICAgIC8vICAgICBsZXQgbWVuc2FnZW06c3RyaW5nO1xyXG4gICAgLy8gICAgIC8vIHZlcmlmaWNhciBzZSBhIHRhcmVmYSBlc3TDoSBtYXJjYWRhIGNvbW8gZmVpdGFcclxuICAgIC8vICAgICBpZih0aGlzLmZlaXRhPT10cnVlKSB7XHJcbiAgICAvLyAgICAgICAgIG1lbnNhZ2VtICs9IFwiW3hdXCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgbWVuc2FnZW0gKz0gXCJbIF1cIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbWVuc2FnZW0gKz0gXCIgXCI7XHJcbiAgICAvLyAgICAgbWVuc2FnZW0gKz0gdGhpcy5kZXNjcmljYW87XHJcbiAgICAvLyAgICAgbWVuc2FnZW0gKz0gXCIgW1wiO1xyXG4gICAgLy8gICAgIG1lbnNhZ2VtICs9IHRoaXMucHJpb3JpZGFkZTtcclxuICAgIC8vICAgICBtZW5zYWdlbSArPSBcIl0gXCI7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2cobWVuc2FnZW0pO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQcmlvcmlkYWRlIHtcclxuICAgIEJhaXhhPTEsXHJcbiAgICBNZWRpYT0yLFxyXG4gICAgQWx0YT0zXHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9