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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
  dx: 0,
  dy: 0,
  down: false,
  intersect: false
};
var ball = null;
var gravity = 1;
var friction = 0.800001;
var mass = 0.9945;
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66', 'black', 'blue', 'red', 'green', 'orange', 'yellow']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  mouse.dx = event.movementX;
  mouse.dy = event.movementY;

  if (ball) {
    ball.x = event.clientX;
    ball.y = event.clientY;
    ball.dx = 0;
    ball.dy = 0;
    ball.gravity = 0;
  } else if (mouse.down) {
    var pos = {
      x: event.clientX,
      y: event.clientY
    };
    var intersectedBall = objects.find(function (ball) {
      return isIntersect(pos, ball);
    });

    if (intersectedBall) {
      intersectedBall.dx += mouse.dx;
      intersectedBall.dy += mouse.dy;
      mouse.intersect = true;
    }
  }
});
addEventListener('mousedown', function (event) {
  mouse.down = true;
  var pos = {
    x: event.clientX,
    y: event.clientY
  };
  var clickedBall = objects.find(function (ball) {
    return isIntersect(pos, ball);
  });

  if (clickedBall) {
    ball = clickedBall;
    console.log("Grabed ball: " + ball.id);
  }
});
addEventListener('mouseup', function (event) {
  mouse.down = false;

  if (ball) {
    console.log("Droped ball: " + ball.id);
    ball.gravity = gravity;
    ball.dx = mouse.dx;
    ball.dy = mouse.dy;
    ball = null;
  } else {
    if (!mouse.intersect) {
      init();
    } else {
      mouse.intersect = false;
    }
  }
});
addEventListener('resize', function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
}); // Objects

var Ball = /*#__PURE__*/function () {
  function Ball(id, x, y, dx, dy, radius, color) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.radius = radius;
    this.color = color;
    this.arc = null;
    this.id = id;
    this.gravity = gravity;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      this.arc = c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.stroke();
      c.closePath();
    }
  }, {
    key: "colision",
    value: function colision(ball) {
      this.dx = ball.dx * Math.sign(ball.dx);
      this.dy = ball.dy * Math.sign(ball.dy);
      ball.dx = -ball.dx;
      ball.dy = -ball.dy;
      this.x += 1 * Math.sign(this.dx);
      ball.x += 1 * Math.sign(ball.dx);
    }
  }, {
    key: "update",
    value: function update(zero) {
      if (this.y + this.radius + this.dy > canvas.height) {
        this.dy = -this.dy * friction;
      } else if (this.y - this.radius + this.dy < zero) {
        this.dy = -this.dy;
      } else {
        this.dy += this.gravity;
      }

      if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius + this.dx < 0) {
        this.dx = -this.dx;
      } else {
        this.dx = this.dx * mass;
      }

      this.y += this.dy;
      this.x += this.dx;
      this.draw();
    }
  }]);

  return Ball;
}();

function isIntersect(point, circle) {
  return Math.sqrt(Math.pow(point.x - circle.x, 2) + Math.pow(point.y - circle.y, 2)) < circle.radius;
}

function getDistance(x1, y1, x2, y2) {
  var xDistance = Math.abs(x2 - x1);
  var yDistance = Math.abs(y2 - y1);
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
} // Implementation


var objects;

function init() {
  objects = [];

  for (var i = 1; i <= 50; i++) {
    var radius = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(20, 50);
    var x = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0 + radius, canvas.width - radius);
    var y = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(0 + radius, canvas.height - radius);
    var dx = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-2, 2);
    var dy = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomIntFromRange(-2, 2);
    var color = _utils__WEBPACK_IMPORTED_MODULE_0___default.a.randomColor(colors);
    objects.push(new Ball(i, x, y, dx, dy, radius, color));
  }
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); // c.fillText(`x:${mouse.x}, y:${mouse.y}`, mouse.x, mouse.y)

  var colisions = [];
  objects.forEach(function (ball) {
    var zero = 0; // objects.forEach(otherBall => {
    //   if(ball.id !== otherBall.id){
    //     let distance = getDistance(ball.x, ball.y, otherBall.x, otherBall.y)
    //     if(distance < ball.radius + otherBall.radius){
    //       let alreadyColided = false
    //       colisions.forEach(colision => {
    //         if(colision.ball == otherBall.id && colision.otherBall == ball.id){
    //           alreadyColided = true
    //         }
    //       })
    //       if(!alreadyColided){
    //         ball.colision(otherBall)
    //         colisions.push({ball: ball.id, otherBall: otherBall.id})
    //         zero = ball.y + ball.radius
    //       }
    //     }
    //   }
    // })

    ball.update(zero);
  });
}

init();
animate();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map