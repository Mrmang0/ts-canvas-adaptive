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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Core/enums/Collision.ts":
/*!*************************************!*\
  !*** ./src/Core/enums/Collision.ts ***!
  \*************************************/
/*! exports provided: ColliderType, CollisionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColliderType", function() { return ColliderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionType", function() { return CollisionType; });
var ColliderType;
(function (ColliderType) {
    ColliderType[ColliderType["polygon"] = 0] = "polygon";
    ColliderType[ColliderType["vector"] = 1] = "vector";
    ColliderType[ColliderType["point"] = 2] = "point";
    ColliderType[ColliderType["circle"] = 3] = "circle";
    ColliderType[ColliderType["rectangle"] = 4] = "rectangle";
})(ColliderType || (ColliderType = {}));
var CollisionType;
(function (CollisionType) {
    CollisionType[CollisionType["pointToPoint"] = 0] = "pointToPoint";
    CollisionType[CollisionType["pointToVector"] = 1] = "pointToVector";
    CollisionType[CollisionType["pointToPolygon"] = 2] = "pointToPolygon";
    CollisionType[CollisionType["vectorToPoint"] = 3] = "vectorToPoint";
    CollisionType[CollisionType["vectorToVector"] = 4] = "vectorToVector";
    CollisionType[CollisionType["vectorToPolygon"] = 5] = "vectorToPolygon";
    CollisionType[CollisionType["PolygonToPoint"] = 6] = "PolygonToPoint";
    CollisionType[CollisionType["PolygonToVector"] = 7] = "PolygonToVector";
    CollisionType[CollisionType["PolygonToPolygon"] = 8] = "PolygonToPolygon";
})(CollisionType || (CollisionType = {}));


/***/ }),

/***/ "./src/Core/extensions/GeneralFunctions.ts":
/*!*************************************************!*\
  !*** ./src/Core/extensions/GeneralFunctions.ts ***!
  \*************************************************/
/*! exports provided: getDistance, hsl, rgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDistance", function() { return getDistance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
var getDistance = function (pointA, pointB) { return Math.sqrt(Math.pow((pointA.x - pointB.x), 2) + Math.pow((pointA.y - pointB.y), 2)); };
var hsl = function (h, s, l) { return "hsl(" + h % 360 + "," + s + "%," + l + "%)"; };
var rgba = function (r, g, b, a) { return "rgba(" + r % 255 + "," + g % 255 + "," + b % 255 + "," + a + ")"; };


/***/ }),

/***/ "./src/Core/extensions/RepeatebleFunction.ts":
/*!***************************************************!*\
  !*** ./src/Core/extensions/RepeatebleFunction.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var RepatableFunction = /** @class */ (function () {
    function RepatableFunction(args, functionBody, stopCondition) {
        this.args = args;
        this.funcToExecute = functionBody;
        this.checkStopCondition = stopCondition;
    }
    RepatableFunction.prototype.execute = function (serviceArgs) {
        var _this = this;
        var args = __assign(__assign({}, this.args), serviceArgs);
        this.funcToExecute(args);
        var stoped = this.checkStopCondition(args);
        Object.keys(args).forEach(function (key) {
            _this.args[key] = args[key];
        });
        return stoped;
    };
    RepatableFunction.prototype.setArgs = function (args) {
        this.args = args;
    };
    return RepatableFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (RepatableFunction);


/***/ }),

/***/ "./src/Core/objects/Point.ts":
/*!***********************************!*\
  !*** ./src/Core/objects/Point.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enums_Collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/Collision */ "./src/Core/enums/Collision.ts");

var Point = /** @class */ (function () {
    function Point(x, y) {
        var _this = this;
        this.withOffset = function (offset) {
            return new Point(_this.x - offset.x, _this.y - offset.y);
        };
        this.type = _enums_Collision__WEBPACK_IMPORTED_MODULE_0__["ColliderType"].point;
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/* harmony default export */ __webpack_exports__["default"] = (Point);


/***/ }),

/***/ "./src/Core/services/CollisionService.ts":
/*!***********************************************!*\
  !*** ./src/Core/services/CollisionService.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CollisionService = /** @class */ (function () {
    function CollisionService() {
        var _this = this;
        this.name = "Collision";
        this.checkPointToPoint = function (fp, sp) { return fp === sp; };
        this.checkPointToLine = function (point, line) {
            var sameXFloatY = point.x === line.endPoind.x;
            return;
        };
        this.pushCollider = function (colider) { return _this.colliders.push(colider); };
    }
    CollisionService.prototype.constuctor = function () { };
    CollisionService.prototype.CheckCollision = function () {
        var _this = this;
        this.colliders.forEach(function (currentCollider) {
            _this.colliders.forEach(function (collider) {
                _this.checkPointToPoint(currentCollider, collider);
            });
        });
    };
    return CollisionService;
}());
/* harmony default export */ __webpack_exports__["default"] = (CollisionService);


/***/ }),

/***/ "./src/Core/services/LiveService.ts":
/*!******************************************!*\
  !*** ./src/Core/services/LiveService.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceManager */ "./src/Core/services/ServiceManager.ts");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_1__);


var LiveService = /** @class */ (function () {
    function LiveService() {
        this.name = "Live";
    }
    LiveService.prototype.init = function (args) {
        this.args = args;
        this.argsElement = new Array();
        return this;
    };
    LiveService.prototype.createHTML = function () {
        var _this = this;
        var mainblock = document.createElement("div");
        mainblock.classList.add("live__container");
        mainblock.style.position = "fixed";
        mainblock.style.left = "1%";
        mainblock.style.height = "100px";
        mainblock.style.width = "200px";
        mainblock.style.padding = "10px";
        mainblock.style.color = "white";
        mainblock.style.backgroundColor = "#212121";
        mainblock.style.borderRadius = "4%";
        var toggler = document.createElement('button');
        var propBlock = document.createElement('div');
        toggler.toggled = true;
        toggler.style.height = "10px";
        toggler.style.width = "100%";
        toggler.addEventListener('click', function (evt) {
            if (toggler.toggled) {
                toggler.parentElement.style.height = toggler.style.height;
                toggler.toggled = false;
                propBlock.style.display = "none";
            }
            else {
                toggler.parentElement.style.height = 18 + 30 * _this.argsElement.length + "px";
                toggler.toggled = true;
                propBlock.style.display = "block";
            }
        });
        mainblock.appendChild(toggler);
        Object.keys(this.args).forEach(function (key) {
            var elem = document.createElement("div");
            elem.style.display = "flex";
            elem.style.width = "100%";
            var name = document.createElement("label");
            name.style.paddingRight = "10px";
            name.textContent = key;
            name.style.margin = "6px 0";
            var input = document.createElement("input");
            input.style.width = "100%";
            input.style.padding = "4px";
            input.style.margin = "2px 0";
            input.style.borderRadius = "5px";
            input.value = _this.args[key];
            input.addEventListener("input", _this.updateValue);
            input.propertyKey = key;
            _this.argsElement.push(input);
            elem.appendChild(name);
            elem.appendChild(input);
            propBlock.appendChild(elem);
        });
        mainblock.style.height = 18 + 30 * this.argsElement.length + "px";
        mainblock.appendChild(propBlock);
        document.body.appendChild(mainblock);
        this.valuesUpdater();
    };
    LiveService.prototype.updateValue = function (evt) {
        var args = _ServiceManager__WEBPACK_IMPORTED_MODULE_0__["default"].get(LiveService).args;
        args[this.propertyKey] = new Number(this.value);
    };
    LiveService.prototype.valuesUpdater = function () {
        var _this = this;
        Object(timers__WEBPACK_IMPORTED_MODULE_1__["setInterval"])(function () {
            var args = _ServiceManager__WEBPACK_IMPORTED_MODULE_0__["default"].get(LiveService).args;
            _this.argsElement.forEach(function (el) {
                if (document.activeElement !== el)
                    el.value = new Number(args[el.propertyKey]);
            });
        }, 100);
    };
    return LiveService;
}());
/* harmony default export */ __webpack_exports__["default"] = (LiveService);


/***/ }),

/***/ "./src/Core/services/MouseService.ts":
/*!*******************************************!*\
  !*** ./src/Core/services/MouseService.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _objects_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../objects/Point */ "./src/Core/objects/Point.ts");

var MouseService = /** @class */ (function () {
    function MouseService() {
        var _this = this;
        this.name = "Mouse";
        this.self = this;
        this.withOffset = function (offset) { return _this.point.withOffset(offset); };
    }
    MouseService.prototype.init = function () {
        this.setElement(document.body);
        this.point = new _objects_Point__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0);
        return this;
    };
    MouseService.prototype.setElement = function (element) {
        if (element == this.currentElement)
            return;
        else {
            if (this.currentElement)
                this.currentElement.removeEventListener("mousemove", this.mouseMove);
            this.currentElement = element;
            this.currentElement.addEventListener("mousemove", this.mouseMove.bind(this));
        }
        return this;
    };
    MouseService.prototype.mouseMove = function (evt) {
        this.point.x = evt.clientX;
        this.point.y = evt.clientY;
    };
    return MouseService;
}());
/* harmony default export */ __webpack_exports__["default"] = (MouseService);


/***/ }),

/***/ "./src/Core/services/RenderService.ts":
/*!********************************************!*\
  !*** ./src/Core/services/RenderService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var RenderService = /** @class */ (function () {
    function RenderService() {
        this.name = "render";
    }
    RenderService.prototype.init = function (width, height, parent) {
        if (parent === void 0) { parent = document.body; }
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        parent.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.renderLoop = [];
        return this;
    };
    RenderService.prototype.initial = function (initFunc) {
        initFunc(this.context, this.canvas);
        return this;
    };
    RenderService.prototype.render = function () {
        var _this = this;
        this.renderLoop.forEach(function (func) {
            _this.context.save();
            if (func.execute({ context: _this.context, canvas: _this.canvas }))
                _this.removeFromLoop(func);
            _this.context.restore();
        });
        requestAnimationFrame(this.render.bind(this));
        return this;
    };
    RenderService.prototype.pushToLoop = function (func) {
        this.renderLoop.push(func);
        return this;
    };
    RenderService.prototype.removeFromLoop = function (func) {
        this.renderLoop.splice(this.renderLoop.indexOf(func), 1);
        return this;
    };
    return RenderService;
}());
/* harmony default export */ __webpack_exports__["default"] = (RenderService);


/***/ }),

/***/ "./src/Core/services/ServiceManager.ts":
/*!*********************************************!*\
  !*** ./src/Core/services/ServiceManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MouseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MouseService */ "./src/Core/services/MouseService.ts");
/* harmony import */ var _RenderService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RenderService */ "./src/Core/services/RenderService.ts");
/* harmony import */ var _CollisionService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollisionService */ "./src/Core/services/CollisionService.ts");
/* harmony import */ var _LiveService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LiveService */ "./src/Core/services/LiveService.ts");




var ServiceArray = new Array(new _MouseService__WEBPACK_IMPORTED_MODULE_0__["default"](), new _RenderService__WEBPACK_IMPORTED_MODULE_1__["default"](), new _CollisionService__WEBPACK_IMPORTED_MODULE_2__["default"](), new _LiveService__WEBPACK_IMPORTED_MODULE_3__["default"]());
var ServiceManager = /** @class */ (function () {
    function ServiceManager() {
    }
    ServiceManager.services = ServiceArray;
    ServiceManager.push = function (service) { return ServiceManager.services.push(service); };
    ServiceManager.remove = function (service) {
        return ServiceManager.services.splice(ServiceManager.services.indexOf(service), 1);
    };
    ServiceManager.get = function (typeT) {
        return ServiceManager.services.filter(function (service) { return service instanceof typeT; })[0];
    };
    return ServiceManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (ServiceManager);
;


/***/ }),

/***/ "./src/functions/drawFunctions.ts":
/*!****************************************!*\
  !*** ./src/functions/drawFunctions.ts ***!
  \****************************************/
/*! exports provided: horizontal, vertical, center, clear, tng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontal", function() { return horizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vertical", function() { return vertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tng", function() { return tng; });
/* harmony import */ var _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/extensions/RepeatebleFunction */ "./src/Core/extensions/RepeatebleFunction.ts");
/* harmony import */ var _Core_extensions_GeneralFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/extensions/GeneralFunctions */ "./src/Core/extensions/GeneralFunctions.ts");


var horizontal = new _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__["default"]({}, function (args) {
    var context = args.context;
    var canvas = args.canvas;
    var bounds = canvas.getBoundingClientRect();
    for (var x = -canvas.width / 2; x < canvas.width; x += 1 / args.pointsPerPixel) {
        var y = 150 * Math.pow(Math.cos(Math.log(Math.pow(x, 2) * args.zoom)), 2) * Math.sin(Math.PI * args.zoom + x);
        context.fillStyle = Object(_Core_extensions_GeneralFunctions__WEBPACK_IMPORTED_MODULE_1__["hsl"])(x % 250, 50, 50);
        context.fillRect(y, x, args.x, args.y);
        context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;
}, function (args) { return false; });
var vertical = new _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__["default"]({}, function (args) {
    var context = args.context;
    var canvas = args.canvas;
    var bounds = canvas.getBoundingClientRect();
    for (var x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {
        var y = 150 * Math.pow(Math.cos(Math.log(Math.pow(x, 2) * args.zoom)), 2) * Math.sin(Math.PI * args.zoom + x);
        context.fillStyle = Object(_Core_extensions_GeneralFunctions__WEBPACK_IMPORTED_MODULE_1__["hsl"])(y % 360, 50, 50);
        context.fillRect(x, y, args.x, args.y);
        context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;
}, function (args) { return false; });
var center = new _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__["default"]({}, function (args) {
    var context = args.context;
    var canvas = args.canvas;
    var bounds = canvas.getBoundingClientRect();
    for (var x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {
        var modX = 300 * Math.pow(Math.sin(Math.log(Math.pow(x, 2) * args.zoom)), 2) * Math.pow(Math.cos(Math.PI * args.zoom + x), 1) / 4;
        var y = 300 * Math.pow(Math.cos(Math.log(Math.pow(x, 2) / args.zoom)), 2) * Math.pow(Math.sin(Math.PI * args.zoom + x), 1) / 4;
        context.fillStyle = Object(_Core_extensions_GeneralFunctions__WEBPACK_IMPORTED_MODULE_1__["hsl"])(y % 360, 50, 50);
        context.fillRect(modX, y, args.x, args.y);
        context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;
}, function (args) { return false; });
var clear = new _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__["default"]({}, function (args) {
    var context = args.context;
    var canvas = args.canvas;
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
}, function (args) { return false; });
var tng = new _Core_extensions_RepeatebleFunction__WEBPACK_IMPORTED_MODULE_0__["default"]({}, function (args) {
    var context = args.context;
    var canvas = args.canvas;
    var bounds = canvas.getBoundingClientRect();
    for (var x = -canvas.width / 2; x < canvas.width / 2; x += 1 / args.pointsPerPixel) {
        var y = 150 * Math.tan(Math.log(Math.pow(x, 2) / args.zoom)) * Math.sin(Math.PI * args.zoom * x);
        context.fillStyle = Object(_Core_extensions_GeneralFunctions__WEBPACK_IMPORTED_MODULE_1__["hsl"])(y % 360, 50, 50);
        context.fillRect(x, y, args.x, args.y);
        context.fill();
    }
    args.zoom += 1 / args.divider * args.zoom;
}, function (args) { return false; });


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_objects_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Core/objects/Point */ "./src/Core/objects/Point.ts");
/* harmony import */ var _Core_services_RenderService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core/services/RenderService */ "./src/Core/services/RenderService.ts");
/* harmony import */ var _Core_services_MouseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Core/services/MouseService */ "./src/Core/services/MouseService.ts");
/* harmony import */ var _Core_services_ServiceManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Core/services/ServiceManager */ "./src/Core/services/ServiceManager.ts");
/* harmony import */ var _Core_services_LiveService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Core/services/LiveService */ "./src/Core/services/LiveService.ts");
/* harmony import */ var _functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/drawFunctions */ "./src/functions/drawFunctions.ts");






var args = { x: 1.5, y: 1.5, zoom: 0.1, divider: 500, pointsPerPixel: 1 };
_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["horizontal"].setArgs(args);
_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["vertical"].setArgs(args);
_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["center"].setArgs(args);
_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["tng"].setArgs(args);
_Core_services_ServiceManager__WEBPACK_IMPORTED_MODULE_3__["default"]
    .get(_Core_services_LiveService__WEBPACK_IMPORTED_MODULE_4__["default"])
    .init(args)
    .createHTML();
_Core_services_ServiceManager__WEBPACK_IMPORTED_MODULE_3__["default"].get(_Core_services_RenderService__WEBPACK_IMPORTED_MODULE_1__["default"])
    .init(window.innerWidth - 40, window.innerHeight - 40)
    .initial(function (context, canvas) {
    context.strokeStyle = "rgba(255,255,255,1)";
    context.fillStyle = "rgba(0,0,0,1)";
    context.translate(canvas.width / 2, canvas.height / 2);
    var service = _Core_services_ServiceManager__WEBPACK_IMPORTED_MODULE_3__["default"].get(_Core_services_MouseService__WEBPACK_IMPORTED_MODULE_2__["default"])
        .init()
        .setElement(canvas);
    var bounds = canvas.getBoundingClientRect();
    var point = service
        .withOffset(new _Core_objects_Point__WEBPACK_IMPORTED_MODULE_0__["default"](600, 500))
        .withOffset(new _Core_objects_Point__WEBPACK_IMPORTED_MODULE_0__["default"](bounds.left, bounds.top));
})
    .pushToLoop(_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["clear"])
    .pushToLoop(_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["vertical"])
    .pushToLoop(_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["horizontal"])
    .pushToLoop(_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["center"])
    .pushToLoop(_functions_drawFunctions__WEBPACK_IMPORTED_MODULE_5__["tng"])
    .render();
function think(p1, p2) {
    var dx = p1.x - p2.x;
    var dy = p1.y - p2.y;
    var vx, vy;
    var dist = Math.sqrt(dx * dx + dy * dy);
    // interaction
    if (dist < 30) {
        var angle = Math.atan2(dy, dx);
        var tx = p1.x + Math.cos(angle) * 30;
        var ty = p1.y + Math.sin(angle) * 30;
        return new _Core_objects_Point__WEBPACK_IMPORTED_MODULE_0__["default"](tx, ty);
    }
    return p1;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL2VudW1zL0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS9leHRlbnNpb25zL0dlbmVyYWxGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmUvZXh0ZW5zaW9ucy9SZXBlYXRlYmxlRnVuY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvcmUvb2JqZWN0cy9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS9zZXJ2aWNlcy9Db2xsaXNpb25TZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL3NlcnZpY2VzL0xpdmVTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL3NlcnZpY2VzL01vdXNlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29yZS9zZXJ2aWNlcy9SZW5kZXJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9Db3JlL3NlcnZpY2VzL1NlcnZpY2VNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZHJhd0Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekxEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxtQkFBTyxDQUFDLGlFQUFjO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUEsSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3BCLHFEQUFPO0lBQ1AsbURBQU07SUFDTixpREFBSztJQUNMLG1EQUFNO0lBQ04seURBQVM7QUFDYixDQUFDLEVBTlcsWUFBWSxLQUFaLFlBQVksUUFNdkI7QUFFRCxJQUFZLGFBVVg7QUFWRCxXQUFZLGFBQWE7SUFDckIsaUVBQVk7SUFDWixtRUFBYTtJQUNiLHFFQUFjO0lBQ2QsbUVBQWE7SUFDYixxRUFBYztJQUNkLHVFQUFlO0lBQ2YscUVBQWM7SUFDZCx1RUFBZTtJQUNmLHlFQUFnQjtBQUNwQixDQUFDLEVBVlcsYUFBYSxLQUFiLGFBQWEsUUFVeEI7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQWEsRUFBRSxNQUFjLElBQUssV0FBSSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBRyxVQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxFQUExRCxDQUEwRCxDQUFDO0FBRWxILElBQU0sR0FBRyxHQUFHLFVBQUMsQ0FBUSxFQUFDLENBQVEsRUFBQyxDQUFRLElBQWEsZ0JBQU8sQ0FBQyxHQUFDLEdBQUcsU0FBSSxDQUFDLFVBQUssQ0FBQyxPQUFJLEVBQTNCLENBQTJCLENBQUM7QUFDaEYsSUFBTSxJQUFJLEdBQUcsVUFBQyxDQUFRLEVBQUMsQ0FBUSxFQUFDLENBQVEsRUFBQyxDQUFRLElBQUssaUJBQVEsQ0FBQyxHQUFDLEdBQUcsU0FBSSxDQUFDLEdBQUMsR0FBRyxTQUFJLENBQUMsR0FBQyxHQUFHLFNBQUksQ0FBQyxNQUFHLEVBQXZDLENBQXVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTHBHO0lBTUksMkJBQVksSUFBVyxFQUFDLFlBQXFCLEVBQUMsYUFBc0I7UUFDaEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQztJQUM1QyxDQUFDO0lBRUQsbUNBQU8sR0FBUCxVQUFRLFdBQWU7UUFBdkIsaUJBUUM7UUFQRyxJQUFNLElBQUkseUJBQU8sSUFBSSxDQUFDLElBQUksR0FBSyxXQUFXLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ3hCLEtBQUksQ0FBQyxJQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztRQUNGLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxtQ0FBTyxHQUFQLFVBQVEsSUFBVztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBa0Q7QUFFbEQ7SUFJRSxlQUFZLENBQVMsRUFBRSxDQUFTO1FBQWhDLGlCQUlDO1FBRUQsZUFBVSxHQUFHLFVBQUMsTUFBYTtZQUN6QixXQUFJLEtBQUssQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQS9DLENBQStDLENBQUM7UUFOaEQsSUFBSSxDQUFDLElBQUksR0FBRyw2REFBWSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUlILFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ1hEO0FBQUE7SUFBQTtRQUFBLGlCQW1CQztRQWpCQyxTQUFJLEdBQVcsV0FBVyxDQUFDO1FBVzNCLHNCQUFpQixHQUFHLFVBQUMsRUFBUyxFQUFFLEVBQVMsSUFBSyxTQUFFLEtBQUssRUFBRSxFQUFULENBQVMsQ0FBQztRQUN4RCxxQkFBZ0IsR0FBRyxVQUFDLEtBQVcsRUFBQyxJQUFXO1lBQ3ZDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEQsT0FBTztRQUNYLENBQUMsQ0FBQztRQUNGLGlCQUFZLEdBQUcsVUFBQyxPQUFrQixJQUFLLFlBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUE1QixDQUE0QixDQUFDO0lBQ3RFLENBQUM7SUFoQkMscUNBQVUsR0FBVixjQUFjLENBQUM7SUFFZix5Q0FBYyxHQUFkO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx5QkFBZTtZQUNwQyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBUTtnQkFDN0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGVBQXdCLEVBQUUsUUFBaUIsQ0FBQyxDQUFDO1lBQ3RFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUUgsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNUO0FBRXJDO0lBS0U7UUFKQSxTQUFJLEdBQVcsTUFBTSxDQUFDO0lBSU4sQ0FBQztJQUVqQiwwQkFBSSxHQUFKLFVBQUssSUFBWTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUM1QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQUEsaUJBZ0VDO1FBL0RDLElBQU0sU0FBUyxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25DLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM1QixTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU07UUFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTztRQUMvQixTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTO1FBQzNDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUk7UUFFbkMsSUFBTSxPQUFPLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxPQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO1lBQ3BDLElBQUssT0FBZSxDQUFDLE9BQU8sRUFBRTtnQkFDNUIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxPQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2FBQ2xDO2lCQUNJO2dCQUNILE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxPQUFJLENBQUM7Z0JBQzdFLE9BQWUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNoQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFHbkM7UUFDSCxDQUFDLENBQUM7UUFDRixTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFHO1lBQ2hDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUUxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPO1lBRTNCLElBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUs7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTztZQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLO1lBRWhDLEtBQUssQ0FBQyxLQUFLLEdBQUksS0FBSSxDQUFDLElBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNqRCxLQUFhLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUNqQyxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLE9BQUk7UUFDakUsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUVPLGlDQUFXLEdBQW5CLFVBQW9CLEdBQVE7UUFDMUIsSUFBTSxJQUFJLEdBQUcsdURBQWMsQ0FBQyxHQUFHLENBQWMsV0FBVyxDQUFDLENBQUMsSUFBVyxDQUFDO1FBQ3RFLElBQUksQ0FBRSxJQUFZLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUUsSUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxtQ0FBYSxHQUFwQjtRQUFBLGlCQVNDO1FBUkMsMERBQVcsQ0FBQztZQUNWLElBQU0sSUFBSSxHQUFHLHVEQUFjLENBQUMsR0FBRyxDQUFjLFdBQVcsQ0FBQyxDQUFDLElBQVcsQ0FBQztZQUN0RSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU87Z0JBQy9CLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxFQUFFO29CQUMvQixFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUM7UUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFVixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ2xHRDtBQUFBO0FBQXFDO0FBR3JDO0lBTUU7UUFBQSxpQkFBZ0I7UUFMaEIsU0FBSSxHQUFXLE9BQU8sQ0FBQztRQUd2QixTQUFJLEdBQVEsSUFBSSxDQUFDO1FBVWpCLGVBQVUsR0FBRyxVQUFDLE1BQWEsSUFBWSxZQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztJQVJ0RCxDQUFDO0lBRWhCLDJCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLHNEQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUlNLGlDQUFVLEdBQWpCLFVBQWtCLE9BQW9CO1FBQ3BDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTzthQUN0QztZQUNILElBQUcsSUFBSSxDQUFDLGNBQWM7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sZ0NBQVMsR0FBakIsVUFBa0IsR0FBZTtRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFBQTtJQU1FO1FBTE8sU0FBSSxHQUFXLFFBQVEsQ0FBQztJQUtoQixDQUFDO0lBRWhCLDRCQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsTUFBYyxFQUFFLE1BQW1DO1FBQW5DLGtDQUFzQixRQUFRLENBQUMsSUFBSTtRQUNyRSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxRQUFrQjtRQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBSTtZQUMxQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzlELEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsa0NBQVUsR0FBVixVQUFXLElBQXVCO1FBQ2hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxJQUF1QjtRQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDRTtBQUNNO0FBR1Y7QUFFeEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLENBQzVCLElBQUkscURBQVksRUFBRSxFQUNsQixJQUFJLHNEQUFhLEVBQUUsRUFDbkIsSUFBSSx5REFBZ0IsRUFBRSxFQUN0QixJQUFJLG9EQUFXLEVBQUUsQ0FDbEIsQ0FBQztBQUVGO0lBQUE7SUFhQSxDQUFDO0lBWlEsdUJBQVEsR0FBb0IsWUFBWSxDQUFDO0lBRXpDLG1CQUFJLEdBQUcsVUFBQyxPQUFpQixJQUFLLHFCQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBckMsQ0FBcUMsQ0FBQztJQUVwRSxxQkFBTSxHQUFHLFVBQUMsT0FBaUI7UUFDaEMscUJBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUEzRSxDQUEyRSxDQUFDO0lBRXZFLGtCQUFHLEdBQUcsVUFBcUIsS0FBa0I7UUFDbEQsT0FBUSxjQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQkFBTyxJQUFLLGNBQU8sWUFBWSxLQUFLLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDLENBQU0sQ0FBQztJQUN2RixDQUFDLENBQUM7SUFHSixxQkFBQztDQUFBO0FBYjZCLDZFQUFjO0FBYTNDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRTtBQUNaO0FBS25ELElBQU0sVUFBVSxHQUFHLElBQUksMkVBQWlCLENBQzdDLEVBQUUsRUFDRixVQUFDLElBQVM7SUFDUixJQUFNLE9BQU8sR0FBNkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2RCxJQUFNLE1BQU0sR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRTlFLElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxhQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFJLENBQUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0YsT0FBTyxDQUFDLFNBQVMsR0FBRyw2RUFBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEI7SUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDNUMsQ0FBQyxFQUNELFVBQUMsSUFBUyxJQUFLLFlBQUssRUFBTCxDQUFLLENBQ3JCLENBQUM7QUFFSyxJQUFNLFFBQVEsR0FBRyxJQUFJLDJFQUFpQixDQUMzQyxFQUFFLEVBQ0YsVUFBQyxJQUFTO0lBQ1IsSUFBTSxPQUFPLEdBQTZCLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdkQsSUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFOUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFFbEYsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLGFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQUksQ0FBQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsU0FBUyxHQUFHLDZFQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQjtJQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUU1QyxDQUFDLEVBQ0QsVUFBQyxJQUFTLElBQUssWUFBSyxFQUFMLENBQUssQ0FDckIsQ0FBQztBQUVLLElBQU0sTUFBTSxHQUFHLElBQUksMkVBQWlCLENBQ3pDLEVBQUUsRUFDRixVQUFDLElBQVM7SUFDUixJQUFNLE9BQU8sR0FBNkIsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN2RCxJQUFNLE1BQU0sR0FBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM5QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUU5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNsRixJQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsYUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBSSxDQUFDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFHLGFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQyxDQUFDLENBQUM7UUFDdEcsSUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLGFBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQUksQ0FBQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBRyxhQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUMsQ0FBQyxDQUFDO1FBQ25HLE9BQU8sQ0FBQyxTQUFTLEdBQUcsNkVBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBRTVDLENBQUMsRUFDRCxVQUFDLElBQVMsSUFBSyxZQUFLLEVBQUwsQ0FBSyxDQUNyQixDQUFDO0FBRUssSUFBTSxLQUFLLEdBQUcsSUFBSSwyRUFBaUIsQ0FDeEMsRUFBRSxFQUNGLFVBQUMsSUFBUztJQUNSLElBQU0sT0FBTyxHQUE2QixJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZELElBQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNmLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLENBQUMsRUFDRCxVQUFDLElBQVMsSUFBSyxZQUFLLEVBQUwsQ0FBSyxDQUNyQixDQUFDO0FBR0ssSUFBTSxHQUFHLEdBQUcsSUFBSSwyRUFBaUIsQ0FDdEMsRUFBRSxFQUNGLFVBQUMsSUFBUztJQUNSLElBQU0sT0FBTyxHQUE2QixJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3ZELElBQU0sTUFBTSxHQUFzQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBRTlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBRWxGLElBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFJLENBQUMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RixPQUFPLENBQUMsU0FBUyxHQUFHLDZFQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQjtJQUNELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUU1QyxDQUFDLEVBQ0QsVUFBQyxJQUFTLElBQUssWUFBSyxFQUFMLENBQUssQ0FDckIsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNpQjtBQUNGO0FBQ0k7QUFDTjtBQUMrQjtBQUVyRixJQUFNLElBQUksR0FBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBRTdFLG1FQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pCLGlFQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLCtEQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JCLDREQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLHFFQUFjO0tBQ2IsR0FBRyxDQUFjLGtFQUFXLENBQUM7S0FDN0IsSUFBSSxDQUFDLElBQUksQ0FBQztLQUNWLFVBQVUsRUFBRSxDQUFDO0FBSWQscUVBQWMsQ0FBQyxHQUFHLENBQWdCLG9FQUFhLENBQUM7S0FDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUMsRUFBRSxDQUFDO0tBQ2pELE9BQU8sQ0FBQyxVQUFDLE9BQWlDLEVBQUUsTUFBeUI7SUFDcEUsT0FBTyxDQUFDLFdBQVcsR0FBRyxxQkFBcUIsQ0FBQztJQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztJQUNwQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBTSxPQUFPLEdBQUcscUVBQWMsQ0FBQyxHQUFHLENBQWUsbUVBQVksQ0FBQztTQUMzRCxJQUFJLEVBQUU7U0FDTixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDOUMsSUFBTSxLQUFLLEdBQUcsT0FBTztTQUNsQixVQUFVLENBQUMsSUFBSSwyREFBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUMvQixVQUFVLENBQUMsSUFBSSwyREFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEQsQ0FBQyxDQUFDO0tBQ0QsVUFBVSxDQUFDLDhEQUFLLENBQUM7S0FDakIsVUFBVSxDQUFDLGlFQUFRLENBQUM7S0FDcEIsVUFBVSxDQUFDLG1FQUFVLENBQUM7S0FDdEIsVUFBVSxDQUFDLCtEQUFNLENBQUM7S0FDbEIsVUFBVSxDQUFDLDREQUFHLENBQUM7S0FDZixNQUFNLEVBQUUsQ0FBQztBQUVaLFNBQVMsS0FBSyxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ2pDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNyQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckIsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN4QyxjQUFjO0lBQ2QsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSwyREFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUMxQjtJQUdELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCBlbnVtIENvbGxpZGVyVHlwZXtcclxuICAgIHBvbHlnb24sXHJcbiAgICB2ZWN0b3IsXHJcbiAgICBwb2ludCxcclxuICAgIGNpcmNsZSxcclxuICAgIHJlY3RhbmdsZSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29sbGlzaW9uVHlwZXtcclxuICAgIHBvaW50VG9Qb2ludCxcclxuICAgIHBvaW50VG9WZWN0b3IsXHJcbiAgICBwb2ludFRvUG9seWdvbixcclxuICAgIHZlY3RvclRvUG9pbnQsXHJcbiAgICB2ZWN0b3JUb1ZlY3RvcixcclxuICAgIHZlY3RvclRvUG9seWdvbixcclxuICAgIFBvbHlnb25Ub1BvaW50LFxyXG4gICAgUG9seWdvblRvVmVjdG9yLFxyXG4gICAgUG9seWdvblRvUG9seWdvbixcclxufSIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vb2JqZWN0cy9Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERpc3RhbmNlID0gKHBvaW50QTogUG9pbnQsIHBvaW50QiA6IFBvaW50KSA9PiBNYXRoLnNxcnQoKHBvaW50QS54LXBvaW50Qi54KSoqMiArIChwb2ludEEueS1wb2ludEIueSkqKjIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhzbCA9IChoOm51bWJlcixzOm51bWJlcixsOm51bWJlcik6IHN0cmluZyA9PiBgaHNsKCR7aCUzNjB9LCR7c30lLCR7bH0lKWA7XHJcbmV4cG9ydCBjb25zdCByZ2JhID0gKHI6bnVtYmVyLGc6bnVtYmVyLGI6bnVtYmVyLGE6bnVtYmVyKSA9PiBgcmdiYSgke3IlMjU1fSwke2clMjU1fSwke2IlMjU1fSwke2F9KWAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBhdGFibGVGdW5jdGlvbntcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhcmdzIDpPYmplY3Q7XHJcbiAgICBwcml2YXRlIGZ1bmNUb0V4ZWN1dGU6RnVuY3Rpb247XHJcbiAgICBwcml2YXRlIGNoZWNrU3RvcENvbmRpdGlvbjogRnVuY3Rpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJnczpPYmplY3QsZnVuY3Rpb25Cb2R5OkZ1bmN0aW9uLHN0b3BDb25kaXRpb246RnVuY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMuZnVuY1RvRXhlY3V0ZSA9IGZ1bmN0aW9uQm9keTtcclxuICAgICAgICB0aGlzLmNoZWNrU3RvcENvbmRpdGlvbiA9IHN0b3BDb25kaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZShzZXJ2aWNlQXJnczphbnkpe1xyXG4gICAgICAgIGNvbnN0IGFyZ3MgPSB7Li4udGhpcy5hcmdzLCAuLi5zZXJ2aWNlQXJnc307XHJcbiAgICAgICAgdGhpcy5mdW5jVG9FeGVjdXRlKGFyZ3MpO1xyXG4gICAgICAgIGNvbnN0IHN0b3BlZCA9IHRoaXMuY2hlY2tTdG9wQ29uZGl0aW9uKGFyZ3MpOyBcclxuICAgICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleT0+e1xyXG4gICAgICAgICAgICAodGhpcy5hcmdzIGFzIGFueSlba2V5XSA9IGFyZ3Nba2V5XTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBzdG9wZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXJncyhhcmdzOk9iamVjdCl7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIH1cclxufSIsImltcG9ydCBJQ29sbGlkZXIgZnJvbSBcIi4uL2ludGVyZmFjZXMvSUNvbGxpZGVyXCI7XHJcbmltcG9ydCB7IENvbGxpZGVyVHlwZSB9IGZyb20gXCIuLi9lbnVtcy9Db2xsaXNpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IGltcGxlbWVudHMgSUNvbGxpZGVyIHtcclxuICBwdWJsaWMgdHlwZTogQ29sbGlkZXJUeXBlO1xyXG4gIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgcHVibGljIHk6IG51bWJlcjtcclxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgdGhpcy50eXBlID0gQ29sbGlkZXJUeXBlLnBvaW50O1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgfVxyXG5cclxuICB3aXRoT2Zmc2V0ID0gKG9mZnNldDogUG9pbnQpID0+XHJcbiAgICBuZXcgUG9pbnQodGhpcy54IC0gb2Zmc2V0LngsIHRoaXMueSAtIG9mZnNldC55KTtcclxufVxyXG4iLCJpbXBvcnQgSUNvbGxpZGVyIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDb2xsaWRlclwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL29iamVjdHMvUG9pbnRcIjtcclxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vb2JqZWN0cy9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvblNlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZXtcclxuICBjb2xsaWRlcnM6IEFycmF5PElDb2xsaWRlcj47XHJcbiAgbmFtZTogU3RyaW5nID0gXCJDb2xsaXNpb25cIjtcclxuICBjb25zdHVjdG9yKCkge31cclxuXHJcbiAgQ2hlY2tDb2xsaXNpb24oKSB7XHJcbiAgICB0aGlzLmNvbGxpZGVycy5mb3JFYWNoKGN1cnJlbnRDb2xsaWRlciA9PiB7XHJcbiAgICAgIHRoaXMuY29sbGlkZXJzLmZvckVhY2goY29sbGlkZXIgPT4ge1xyXG4gICAgICAgIHRoaXMuY2hlY2tQb2ludFRvUG9pbnQoY3VycmVudENvbGxpZGVyIGFzIFBvaW50LCBjb2xsaWRlciBhcyBQb2ludCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjaGVja1BvaW50VG9Qb2ludCA9IChmcDogUG9pbnQsIHNwOiBQb2ludCkgPT4gZnAgPT09IHNwO1xyXG4gIGNoZWNrUG9pbnRUb0xpbmUgPSAocG9pbnQ6UG9pbnQsbGluZTpWZWN0b3IpID0+IHtcclxuICAgICAgY29uc3Qgc2FtZVhGbG9hdFkgPSBwb2ludC54ID09PSBsaW5lLmVuZFBvaW5kLng7XHJcbiAgICAgIHJldHVybjtcclxuICB9O1xyXG4gIHB1c2hDb2xsaWRlciA9IChjb2xpZGVyOiBJQ29sbGlkZXIpID0+IHRoaXMuY29sbGlkZXJzLnB1c2goY29saWRlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmdiYSB9IGZyb20gXCIuLi9leHRlbnNpb25zL0dlbmVyYWxGdW5jdGlvbnNcIjtcclxuaW1wb3J0IFNlcnZpY2VNYW5hZ2VyIGZyb20gXCIuL1NlcnZpY2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IHNldEludGVydmFsIH0gZnJvbSBcInRpbWVyc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl2ZVNlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZSB7XHJcbiAgbmFtZTogU3RyaW5nID0gXCJMaXZlXCI7XHJcbiAgYXJnczogb2JqZWN0O1xyXG4gIGFyZ3NFbGVtZW50OiBBcnJheTxIVE1MRWxlbWVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGluaXQoYXJnczogb2JqZWN0KSB7XHJcbiAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgdGhpcy5hcmdzRWxlbWVudCA9IG5ldyBBcnJheTxIVE1MRWxlbWVudD4oKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSFRNTCgpIHtcclxuICAgIGNvbnN0IG1haW5ibG9jazogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbWFpbmJsb2NrLmNsYXNzTGlzdC5hZGQoXCJsaXZlX19jb250YWluZXJcIik7XHJcbiAgICBtYWluYmxvY2suc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICBtYWluYmxvY2suc3R5bGUubGVmdCA9IFwiMSVcIjtcclxuICAgIG1haW5ibG9jay5zdHlsZS5oZWlnaHQgPSBcIjEwMHB4XCI7XHJcbiAgICBtYWluYmxvY2suc3R5bGUud2lkdGggPSBcIjIwMHB4XCI7XHJcbiAgICBtYWluYmxvY2suc3R5bGUucGFkZGluZyA9IFwiMTBweFwiXHJcbiAgICBtYWluYmxvY2suc3R5bGUuY29sb3IgPSBcIndoaXRlXCJcclxuICAgIG1haW5ibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMyMTIxMjFcIlxyXG4gICAgbWFpbmJsb2NrLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNCVcIlxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjb25zdCBwcm9wQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICAodG9nZ2xlciBhcyBhbnkpLnRvZ2dsZWQgPSB0cnVlO1xyXG4gICAgdG9nZ2xlci5zdHlsZS5oZWlnaHQgPSBcIjEwcHhcIjtcclxuICAgIHRvZ2dsZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgIHRvZ2dsZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGlmICgodG9nZ2xlciBhcyBhbnkpLnRvZ2dsZWQpIHtcclxuICAgICAgICB0b2dnbGVyLnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdG9nZ2xlci5zdHlsZS5oZWlnaHQ7XHJcbiAgICAgICAgKHRvZ2dsZXIgYXMgYW55KS50b2dnbGVkID0gZmFsc2U7XHJcbiAgICAgICAgcHJvcEJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgfSBcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdG9nZ2xlci5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAkezE4ICsgMzAgKiB0aGlzLmFyZ3NFbGVtZW50Lmxlbmd0aH1weGA7XHJcbiAgICAgICAgKHRvZ2dsZXIgYXMgYW55KS50b2dnbGVkID0gdHJ1ZTtcclxuICAgICAgICBwcm9wQmxvY2suc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgbWFpbmJsb2NrLmFwcGVuZENoaWxkKHRvZ2dsZXIpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHRoaXMuYXJncykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgIGVsZW0uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuXHJcbiAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgIG5hbWUuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIxMHB4XCI7XHJcbiAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICAgIG5hbWUuc3R5bGUubWFyZ2luID0gXCI2cHggMFwiXHJcblxyXG4gICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgaW5wdXQuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgaW5wdXQuc3R5bGUucGFkZGluZyA9IFwiNHB4XCJcclxuICAgICAgaW5wdXQuc3R5bGUubWFyZ2luID0gXCIycHggMFwiXHJcbiAgICAgIGlucHV0LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCJcclxuXHJcbiAgICAgIGlucHV0LnZhbHVlID0gKHRoaXMuYXJncyBhcyBhbnkpW2tleV07XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB0aGlzLnVwZGF0ZVZhbHVlKTtcclxuICAgICAgKGlucHV0IGFzIGFueSkucHJvcGVydHlLZXkgPSBrZXk7XHJcbiAgICAgIHRoaXMuYXJnc0VsZW1lbnQucHVzaChpbnB1dCk7XHJcblxyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICBlbGVtLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgcHJvcEJsb2NrLmFwcGVuZENoaWxkKGVsZW0pO1xyXG4gICAgfSk7XHJcbiAgICBtYWluYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7MTggKyAzMCAqIHRoaXMuYXJnc0VsZW1lbnQubGVuZ3RofXB4YFxyXG4gICAgbWFpbmJsb2NrLmFwcGVuZENoaWxkKHByb3BCbG9jayk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW5ibG9jayk7XHJcbiAgICB0aGlzLnZhbHVlc1VwZGF0ZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKGV2dDogYW55KSB7XHJcbiAgICBjb25zdCBhcmdzID0gU2VydmljZU1hbmFnZXIuZ2V0PExpdmVTZXJ2aWNlPihMaXZlU2VydmljZSkuYXJncyBhcyBhbnk7XHJcbiAgICBhcmdzWyh0aGlzIGFzIGFueSkucHJvcGVydHlLZXldID0gbmV3IE51bWJlcigodGhpcyBhcyBhbnkpLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB2YWx1ZXNVcGRhdGVyKCkge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBhcmdzID0gU2VydmljZU1hbmFnZXIuZ2V0PExpdmVTZXJ2aWNlPihMaXZlU2VydmljZSkuYXJncyBhcyBhbnk7XHJcbiAgICAgIHRoaXMuYXJnc0VsZW1lbnQuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBlbClcclxuICAgICAgICAgIGVsLnZhbHVlID0gbmV3IE51bWJlcihhcmdzW2VsLnByb3BlcnR5S2V5XSk7XHJcbiAgICAgIH0pXHJcbiAgICB9LCAxMDApO1xyXG5cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9vYmplY3RzL1BvaW50XCI7XHJcbmltcG9ydCB7IHRocm93cyB9IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlIHtcclxuICBuYW1lOiBTdHJpbmcgPSBcIk1vdXNlXCI7XHJcbiAgY3VycmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHBvaW50OiBQb2ludDtcclxuICBzZWxmOiBhbnkgPSB0aGlzO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnNldEVsZW1lbnQoZG9jdW1lbnQuYm9keSlcclxuICAgIHRoaXMucG9pbnQgPSBuZXcgUG9pbnQoMCwwKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgd2l0aE9mZnNldCA9IChvZmZzZXQ6IFBvaW50KTogUG9pbnQgPT4gdGhpcy5wb2ludC53aXRoT2Zmc2V0KG9mZnNldCk7XHJcblxyXG4gIHB1YmxpYyBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBpZiAoZWxlbWVudCA9PSB0aGlzLmN1cnJlbnRFbGVtZW50KSByZXR1cm47XHJcbiAgICBlbHNlIHtcclxuICAgICAgaWYodGhpcy5jdXJyZW50RWxlbWVudClcclxuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZU1vdmUpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgdGhpcy5jdXJyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsdGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW91c2VNb3ZlKGV2dDogTW91c2VFdmVudCkge1xyXG4gICAgXHJcbiAgICB0aGlzLnBvaW50LnggPSBldnQuY2xpZW50WDtcclxuICAgIHRoaXMucG9pbnQueSA9IGV2dC5jbGllbnRZO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9vYmplY3RzL1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgUmVwYXRhYmxlRnVuY3Rpb24gZnJvbSBcIi4uL2V4dGVuc2lvbnMvUmVwZWF0ZWJsZUZ1bmN0aW9uXCI7XHJcbmltcG9ydCBTZXJ2aWNlTWFuYWdlciBmcm9tIFwiLi9TZXJ2aWNlTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlIHtcclxuICBwdWJsaWMgbmFtZTogU3RyaW5nID0gXCJyZW5kZXJcIjtcclxuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICBwcml2YXRlIHJlbmRlckxvb3A6IEFycmF5PFJlcGF0YWJsZUZ1bmN0aW9uPjtcclxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgaW5pdCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFyZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHkpIHtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xyXG4gICAgdGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdGhpcy5yZW5kZXJMb29wID0gW107XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGluaXRpYWwoaW5pdEZ1bmM6IEZ1bmN0aW9uKSB7XHJcbiAgICBpbml0RnVuYyh0aGlzLmNvbnRleHQsIHRoaXMuY2FudmFzKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5yZW5kZXJMb29wLmZvckVhY2goZnVuYyA9PiB7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgIGlmIChmdW5jLmV4ZWN1dGUoeyBjb250ZXh0OiB0aGlzLmNvbnRleHQsIGNhbnZhczogdGhpcy5jYW52YXMgfSkpXHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tTG9vcChmdW5jKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcHVzaFRvTG9vcChmdW5jOiBSZXBhdGFibGVGdW5jdGlvbik6IFJlbmRlclNlcnZpY2Uge1xyXG4gICAgdGhpcy5yZW5kZXJMb29wLnB1c2goZnVuYyk7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlbW92ZUZyb21Mb29wKGZ1bmM6IFJlcGF0YWJsZUZ1bmN0aW9uKTogUmVuZGVyU2VydmljZSB7XHJcbiAgICB0aGlzLnJlbmRlckxvb3Auc3BsaWNlKHRoaXMucmVuZGVyTG9vcC5pbmRleE9mKGZ1bmMpLCAxKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgTW91c2VTZXJ2aWNlIGZyb20gXCIuL01vdXNlU2VydmljZVwiO1xyXG5pbXBvcnQgUmVuZGVyU2VydmljZSBmcm9tIFwiLi9SZW5kZXJTZXJ2aWNlXCI7XHJcbmltcG9ydCBDb2xsaXNpb25TZXJ2aWNlIGZyb20gXCIuL0NvbGxpc2lvblNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJvc1wiO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwibWluaW1hdGNoXCI7XHJcbmltcG9ydCBMaXZlU2VydmljZSBmcm9tIFwiLi9MaXZlU2VydmljZVwiO1xyXG5cclxuY29uc3QgU2VydmljZUFycmF5ID0gbmV3IEFycmF5PElTZXJ2aWNlPihcclxuICBuZXcgTW91c2VTZXJ2aWNlKCksXHJcbiAgbmV3IFJlbmRlclNlcnZpY2UoKSxcclxuICBuZXcgQ29sbGlzaW9uU2VydmljZSgpLFxyXG4gIG5ldyBMaXZlU2VydmljZSgpXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBTZXJ2aWNlTWFuYWdlciB7XHJcbiAgc3RhdGljIHNlcnZpY2VzOiBBcnJheTxJU2VydmljZT4gPSBTZXJ2aWNlQXJyYXk7XHJcblxyXG4gIHN0YXRpYyBwdXNoID0gKHNlcnZpY2U6IElTZXJ2aWNlKSA9PiBTZXJ2aWNlTWFuYWdlci5zZXJ2aWNlcy5wdXNoKHNlcnZpY2UpO1xyXG5cclxuICBzdGF0aWMgcmVtb3ZlID0gKHNlcnZpY2U6IElTZXJ2aWNlKSA9PlxyXG4gICAgU2VydmljZU1hbmFnZXIuc2VydmljZXMuc3BsaWNlKFNlcnZpY2VNYW5hZ2VyLnNlcnZpY2VzLmluZGV4T2Yoc2VydmljZSksIDEpO1xyXG5cclxuICBzdGF0aWMgZ2V0ID0gPFQgZXh0ZW5kcyBJU2VydmljZT4odHlwZVQ6IG5ldyAoKSA9PiBUKTpUID0+IHtcclxuICAgIHJldHVybiAgU2VydmljZU1hbmFnZXIuc2VydmljZXMuZmlsdGVyKHNlcnZpY2UgPT4gIHNlcnZpY2UgaW5zdGFuY2VvZiB0eXBlVClbMF0gYXMgVDtcclxuICB9O1xyXG5cclxuICAgXHJcbn07XHJcbiIsImltcG9ydCBSZXBhdGFibGVGdW5jdGlvbiBmcm9tIFwiLi4vQ29yZS9leHRlbnNpb25zL1JlcGVhdGVibGVGdW5jdGlvblwiO1xyXG5pbXBvcnQgeyBoc2wgfSBmcm9tIFwiLi4vQ29yZS9leHRlbnNpb25zL0dlbmVyYWxGdW5jdGlvbnNcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBob3Jpem9udGFsID0gbmV3IFJlcGF0YWJsZUZ1bmN0aW9uKFxyXG4gIHt9LFxyXG4gIChhcmdzOiBhbnkpID0+IHtcclxuICAgIGNvbnN0IGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGFyZ3MuY29udGV4dDtcclxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBhcmdzLmNhbnZhcztcclxuICAgIGNvbnN0IGJvdW5kcyA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gLWNhbnZhcy53aWR0aCAvIDI7IHggPCBjYW52YXMud2lkdGg7IHggKz0gMSAvIGFyZ3MucG9pbnRzUGVyUGl4ZWwpIHtcclxuXHJcbiAgICAgIGNvbnN0IHkgPSAxNTAgKiBNYXRoLmNvcyhNYXRoLmxvZyh4ICoqIDIgKiBhcmdzLnpvb20pKSoqMiAgKiBNYXRoLnNpbihNYXRoLlBJICogYXJncy56b29tICsgeCk7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gaHNsKHggJSAyNTAsIDUwLCA1MCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHksIHgsIGFyZ3MueCwgYXJncy55KTtcclxuICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBhcmdzLnpvb20gKz0gMSAvIGFyZ3MuZGl2aWRlciAqIGFyZ3Muem9vbTtcclxuICB9LFxyXG4gIChhcmdzOiBhbnkpID0+IGZhbHNlXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdmVydGljYWwgPSBuZXcgUmVwYXRhYmxlRnVuY3Rpb24oXHJcbiAge30sXHJcbiAgKGFyZ3M6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gYXJncy5jb250ZXh0O1xyXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGFyZ3MuY2FudmFzO1xyXG4gICAgY29uc3QgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGZvciAobGV0IHggPSAtY2FudmFzLndpZHRoIC8gMjsgeCA8IGNhbnZhcy53aWR0aCAvIDI7IHggKz0gMSAvIGFyZ3MucG9pbnRzUGVyUGl4ZWwpIHtcclxuXHJcbiAgICAgIGNvbnN0IHkgPSAxNTAgKiBNYXRoLmNvcyhNYXRoLmxvZyh4ICoqIDIgKiBhcmdzLnpvb20pKSoqMiAqIE1hdGguc2luKE1hdGguUEkgKiBhcmdzLnpvb20gKyB4KTtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBoc2woeSUzNjAsIDUwLCA1MCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIGFyZ3MueCwgYXJncy55KTtcclxuICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBhcmdzLnpvb20gKz0gMSAvIGFyZ3MuZGl2aWRlciAqIGFyZ3Muem9vbTtcclxuXHJcbiAgfSxcclxuICAoYXJnczogYW55KSA9PiBmYWxzZVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNlbnRlciA9IG5ldyBSZXBhdGFibGVGdW5jdGlvbihcclxuICB7fSxcclxuICAoYXJnczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBhcmdzLmNvbnRleHQ7XHJcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gYXJncy5jYW52YXM7XHJcbiAgICBjb25zdCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IC1jYW52YXMud2lkdGggLyAyOyB4IDwgY2FudmFzLndpZHRoIC8gMjsgeCArPSAxIC8gYXJncy5wb2ludHNQZXJQaXhlbCkge1xyXG4gICAgICBjb25zdCBtb2RYID0gMzAwICogTWF0aC5zaW4oTWF0aC5sb2coeCAqKiAyICogYXJncy56b29tKSkqKjIgKiBNYXRoLmNvcyhNYXRoLlBJICogYXJncy56b29tICsgeCkqKjEvNDtcclxuICAgICAgY29uc3QgeSA9IDMwMCAqIE1hdGguY29zKE1hdGgubG9nKHggKiogMiAvIGFyZ3Muem9vbSkpKioyICogTWF0aC5zaW4oTWF0aC5QSSAqIGFyZ3Muem9vbSArIHgpKioxLzQ7XHJcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gaHNsKHkgJSAzNjAsIDUwLCA1MCk7XHJcbiAgICAgIGNvbnRleHQuZmlsbFJlY3QobW9kWCwgeSwgYXJncy54LCBhcmdzLnkpO1xyXG4gICAgICBjb250ZXh0LmZpbGwoKTtcclxuICAgIH1cclxuICAgIGFyZ3Muem9vbSArPSAxIC8gYXJncy5kaXZpZGVyICogYXJncy56b29tO1xyXG5cclxuICB9LFxyXG4gIChhcmdzOiBhbnkpID0+IGZhbHNlXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXIgPSBuZXcgUmVwYXRhYmxlRnVuY3Rpb24oXHJcbiAge30sXHJcbiAgKGFyZ3M6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gYXJncy5jb250ZXh0O1xyXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGFyZ3MuY2FudmFzO1xyXG4gICAgY29udGV4dC5zYXZlKCk7XHJcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcclxuICB9LFxyXG4gIChhcmdzOiBhbnkpID0+IGZhbHNlXHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRuZyA9IG5ldyBSZXBhdGFibGVGdW5jdGlvbihcclxuICB7fSxcclxuICAoYXJnczogYW55KSA9PiB7XHJcbiAgICBjb25zdCBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBhcmdzLmNvbnRleHQ7XHJcbiAgICBjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gYXJncy5jYW52YXM7XHJcbiAgICBjb25zdCBib3VuZHMgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IC1jYW52YXMud2lkdGggLyAyOyB4IDwgY2FudmFzLndpZHRoIC8gMjsgeCArPSAxIC8gYXJncy5wb2ludHNQZXJQaXhlbCkge1xyXG5cclxuICAgICAgY29uc3QgeSA9IDE1MCAqIE1hdGgudGFuKE1hdGgubG9nKHggKiogMiAvIGFyZ3Muem9vbSkpICogIE1hdGguc2luKE1hdGguUEkgKiBhcmdzLnpvb20gKiB4KTtcclxuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBoc2woeSUzNjAsIDUwLCA1MCk7XHJcblxyXG4gICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIGFyZ3MueCwgYXJncy55KTtcclxuICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcbiAgICBhcmdzLnpvb20gKz0gMSAvIGFyZ3MuZGl2aWRlciAqIGFyZ3Muem9vbTtcclxuXHJcbiAgfSxcclxuICAoYXJnczogYW55KSA9PiBmYWxzZVxyXG4pO1xyXG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vQ29yZS9vYmplY3RzL1BvaW50XCI7XHJcbmltcG9ydCBSZW5kZXJTZXJ2aWNlIGZyb20gXCIuL0NvcmUvc2VydmljZXMvUmVuZGVyU2VydmljZVwiO1xyXG5pbXBvcnQgTW91c2VTZXJ2aWNlIGZyb20gXCIuL0NvcmUvc2VydmljZXMvTW91c2VTZXJ2aWNlXCI7XHJcbmltcG9ydCBTZXJ2aWNlTWFuYWdlciBmcm9tIFwiLi9Db3JlL3NlcnZpY2VzL1NlcnZpY2VNYW5hZ2VyXCI7XHJcbmltcG9ydCBMaXZlU2VydmljZSBmcm9tIFwiLi9Db3JlL3NlcnZpY2VzL0xpdmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGNsZWFyLCBjZW50ZXIsIHZlcnRpY2FsLCBob3Jpem9udGFsLCB0bmcgfSBmcm9tIFwiLi9mdW5jdGlvbnMvZHJhd0Z1bmN0aW9uc1wiO1xyXG5cclxuY29uc3QgYXJncyA9ICB7IHg6IDEuNSwgeTogMS41LCB6b29tOiAwLjEsIGRpdmlkZXI6IDUwMCwgcG9pbnRzUGVyUGl4ZWw6IDEgfTtcclxuXHJcbmhvcml6b250YWwuc2V0QXJncyhhcmdzKTtcclxudmVydGljYWwuc2V0QXJncyhhcmdzKTtcclxuY2VudGVyLnNldEFyZ3MoYXJncyk7XHJcbnRuZy5zZXRBcmdzKGFyZ3MpO1xyXG5TZXJ2aWNlTWFuYWdlclxyXG4uZ2V0PExpdmVTZXJ2aWNlPihMaXZlU2VydmljZSlcclxuLmluaXQoYXJncylcclxuLmNyZWF0ZUhUTUwoKTtcclxuXHJcblxyXG5cclxuU2VydmljZU1hbmFnZXIuZ2V0PFJlbmRlclNlcnZpY2U+KFJlbmRlclNlcnZpY2UpXHJcbiAgLmluaXQod2luZG93LmlubmVyV2lkdGgtNDAsIHdpbmRvdy5pbm5lckhlaWdodC00MClcclxuICAuaW5pdGlhbCgoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XHJcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCI7XHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwxKVwiO1xyXG4gICAgY29udGV4dC50cmFuc2xhdGUoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgY29uc3Qgc2VydmljZSA9IFNlcnZpY2VNYW5hZ2VyLmdldDxNb3VzZVNlcnZpY2U+KE1vdXNlU2VydmljZSlcclxuICAgICAgLmluaXQoKVxyXG4gICAgICAuc2V0RWxlbWVudChjYW52YXMpO1xyXG4gICAgY29uc3QgYm91bmRzID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgcG9pbnQgPSBzZXJ2aWNlXHJcbiAgICAgIC53aXRoT2Zmc2V0KG5ldyBQb2ludCg2MDAsIDUwMCkpXHJcbiAgICAgIC53aXRoT2Zmc2V0KG5ldyBQb2ludChib3VuZHMubGVmdCwgYm91bmRzLnRvcCkpO1xyXG4gIH0pXHJcbiAgLnB1c2hUb0xvb3AoY2xlYXIpXHJcbiAgLnB1c2hUb0xvb3AodmVydGljYWwpXHJcbiAgLnB1c2hUb0xvb3AoaG9yaXpvbnRhbCkgXHJcbiAgLnB1c2hUb0xvb3AoY2VudGVyKVxyXG4gIC5wdXNoVG9Mb29wKHRuZylcclxuICAucmVuZGVyKCk7XHJcblxyXG5mdW5jdGlvbiB0aGluayhwMTogUG9pbnQsIHAyOiBQb2ludCk6IFBvaW50IHtcclxuICBsZXQgZHggPSBwMS54IC0gcDIueDtcclxuICBsZXQgZHkgPSBwMS55IC0gcDIueTtcclxuICBsZXQgdngsIHZ5O1xyXG4gIGxldCBkaXN0ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAvLyBpbnRlcmFjdGlvblxyXG4gIGlmIChkaXN0IDwgMzApIHtcclxuICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuICAgIGxldCB0eCA9IHAxLnggKyBNYXRoLmNvcyhhbmdsZSkgKiAzMDtcclxuICAgIGxldCB0eSA9IHAxLnkgKyBNYXRoLnNpbihhbmdsZSkgKiAzMDtcclxuICAgIHJldHVybiBuZXcgUG9pbnQodHgsIHR5KTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gcDE7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==