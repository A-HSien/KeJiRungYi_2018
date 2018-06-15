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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/UpdateTextNodeWorker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BabylonUtility.ts":
/*!*******************************!*\
  !*** ./src/BabylonUtility.ts ***!
  \*******************************/
/*! exports provided: BabylonUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabylonUtility", function() { return BabylonUtility; });
/* harmony import */ var _CommonUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonUtility */ "./src/CommonUtility.ts");

var BabylonUtility = /** @class */ (function () {
    function BabylonUtility() {
    }
    BabylonUtility.distanceVector = function (v1, v2) {
        var dx = v1.x - v2.x;
        var dy = v1.y - v2.y;
        var dz = v1.z - v2.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };
    ;
    BabylonUtility.addVector = function (v1, v2) {
        return new BABYLON.Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    };
    ;
    BabylonUtility.subtractVector = function (v1, v2) {
        return new BABYLON.Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    };
    ;
    BabylonUtility.getRandomVector3 = function (randomOnX, randomOnY, randomOnZ) {
        if (randomOnX === void 0) { randomOnX = true; }
        if (randomOnY === void 0) { randomOnY = true; }
        if (randomOnZ === void 0) { randomOnZ = true; }
        return new BABYLON.Vector3(randomOnX ? _CommonUtility__WEBPACK_IMPORTED_MODULE_0__["CommonUtility"].getRandomInt() : 0, randomOnY ? _CommonUtility__WEBPACK_IMPORTED_MODULE_0__["CommonUtility"].getRandomInt() : 0, randomOnZ ? _CommonUtility__WEBPACK_IMPORTED_MODULE_0__["CommonUtility"].getRandomInt() : 0).normalize();
    };
    ;
    BabylonUtility.updatePosition = function (position, translateVector, scale) {
        position.x += (translateVector.x * scale);
        position.y += (translateVector.y * scale);
        position.z += (translateVector.z * scale);
    };
    ;
    BabylonUtility.positionToString = function (position) {
        var positions = ['x', 'y', 'z'].map(function (k) {
            return position[k].toFixed(2);
        });
        return positions.join(', ');
    };
    ;
    BabylonUtility.getLineToEachOther = function (points) {
        var lines = [];
        points.forEach(function (from, iOfFrom) {
            points.forEach(function (to, iOfTo) {
                if (iOfFrom < iOfTo) {
                    var distance = BabylonUtility.distanceVector(from, to);
                    var key = iOfFrom + "-" + iOfTo;
                    lines.push({
                        key: key,
                        from: from,
                        to: to,
                        distance: distance
                    });
                }
            });
        });
        return lines;
    };
    ;
    return BabylonUtility;
}());

;
;


/***/ }),

/***/ "./src/CommonUtility.ts":
/*!******************************!*\
  !*** ./src/CommonUtility.ts ***!
  \******************************/
/*! exports provided: CommonUtility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonUtility", function() { return CommonUtility; });
var CommonUtility = /** @class */ (function () {
    function CommonUtility() {
    }
    CommonUtility.getRandomBoolean = function () {
        return Math.random() >= 0.5;
    };
    ;
    CommonUtility.getRandomNumberInRange = function (min, max, digits) {
        var rate = Math.pow(10, digits);
        return CommonUtility.getRandomIntInRange(min * rate, max * rate) / rate;
    };
    ;
    CommonUtility.getRandomIntInRange = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ;
    CommonUtility.getRandomInt = function (digits) {
        var r = CommonUtility.getRandomBoolean() ? 1 : -1;
        return CommonUtility.getRandomNegativeInt(digits) * r;
    };
    ;
    CommonUtility.getRandomNegativeInt = function (digits) {
        return CommonUtility.getRandomNegativeNumber(digits);
    };
    ;
    CommonUtility.getRandomNumber = function (digitsOnInt, digitsOnFloat) {
        var r = CommonUtility.getRandomBoolean() ? 1 : -1;
        return CommonUtility.getRandomNegativeNumber(digitsOnInt, digitsOnFloat) * r;
    };
    ;
    CommonUtility.getRandomNegativeNumber = function (digitsOnInt, digitsOnFloat) {
        digitsOnInt = digitsOnInt || 1;
        digitsOnFloat = digitsOnFloat || 0;
        var result = Math.round(Math.random() * Math.pow(10, digitsOnInt + digitsOnFloat));
        if (digitsOnFloat !== 0)
            result = result / Math.pow(10, digitsOnFloat);
        return result;
    };
    ;
    CommonUtility.sort = function (array, func) {
        array.sort(function (a, b) {
            return func(a) - func(b);
        });
        return array;
    };
    ;
    CommonUtility.shuffle = function (array) {
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    return CommonUtility;
}());

;


/***/ }),

/***/ "./src/UpdateTextNodeWorker.ts":
/*!*************************************!*\
  !*** ./src/UpdateTextNodeWorker.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommonUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommonUtility */ "./src/CommonUtility.ts");
/* harmony import */ var _BabylonUtility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BabylonUtility */ "./src/BabylonUtility.ts");


self.onmessage = function (message) {
    var textNodes = message.data;
    var lines = _BabylonUtility__WEBPACK_IMPORTED_MODULE_1__["BabylonUtility"].getLineToEachOther(textNodes);
    var linesToSelect = _CommonUtility__WEBPACK_IMPORTED_MODULE_0__["CommonUtility"]
        .sort(lines, function (l) { return l.distance; })
        .filter(function (l) { return l.distance > 0.2; })
        .slice(0, 1200);
    var linesToDraw = linesToSelect.map(function (l) { return [l.from, l.to]; });
    //.shuffle(linesToSelect)
    //.slice(0, 900)
    postMessage(linesToDraw, undefined);
};


/***/ })

/******/ });
//# sourceMappingURL=UpdateTextNodeWorker.js.map