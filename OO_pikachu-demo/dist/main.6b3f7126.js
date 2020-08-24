// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var str = "/**\n* \u4F60\u597D\uFF0C\u8FD9\u662F\u4E00\u4E2Adynamic html demo\n* \u6211\u6253\u7B97\u7528 HTML+CSS \u753B\u4E00\u4E2A\u76AE\u5361\u4E18\n* \u63A5\u4E0B\u6765\u6211\u8981\u6DFB\u52A0\u6837\u5F0F\u4E86\n**/\n/* \u9996\u5148\u7ED9\u76AE\u5361\u4E18\u5B9A\u5236\u4E00\u6B3E\u76AE\u80A4 */\n.skin {\n  width: 100vw;\n  height: 50vh;\n  background: lightgreen;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n/* \u7136\u540E\u5F00\u59CB\u753B\u4E00\u4E2A\u5C0F\u7231\u5FC3\u9F3B\u5B50 */\n.skin .nose {\n  position: relative;\n}\n.skin .nose .triangle {\n  width: 0;\n  height: 0;\n  border: 10px solid #000;\n  position: absolute;\n  left: 50%;\n  margin-top: 100px;\n  margin-left: -10px;\n  border-color: #000 transparent transparent transparent;\n}\n.skin .nose .circle {\n  background: #000;\n  border-radius: 8px 8px 0 0;\n  width: 20px;\n  height: 6px;\n  position: absolute;\n  top: -16px;\n  left: -10px;\n}\n/* \u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u6765\u7ED9\u5B83\u4FCF\u76AE\u7684\u5C0F\u9F3B\u5B50\u6320\u6320\u75D2 */\n@keyframes shaking {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(5deg);\n  }\n  75% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.skin .nose:hover {\n  animation: shaking 1s linear infinite;\n}\n/* \u63A5\u4E0B\u6765\u753B\u4E00\u5BF9\u53EF\u7231\u8FF7\u4EBA\u7684\u5927\u773C\u775B */\n.skin .eye {\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  border: 2px solid #000;\n  border-radius: 50%;\n  background: #333;\n  left: 50%;\n  margin-left: -32px;\n  margin-top: 50px;\n}\n.skin .eye.left {\n  transform: translateX(-100px);\n}\n.skin .eye.right {\n  transform: translateX(100px);\n}\n.skin .eye::before {\n  content: \"\";\n  display: block;\n  border: 2px solid #000;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  background: #fafafa;\n  opacity: 0.95;\n  position: absolute;\n  left: 8px;\n  top: 1px;\n}\n/* \u7136\u540E\u662F\u4E00\u5F20\u8D85\u5361\u54C7\u4F0A\u7684\u5634\u5DF4 */\n.skin .mouth {\n  width: 160px;\n  height: 160px;\n  position: absolute;\n  left: 50%;\n  top: 144px;\n  margin-left: -80px;\n}\n.mouth .up {\n  position: relative;\n}\n.mouth .up .lip {\n  border: 5px solid #000;\n  border-top-color: transparent;\n  width: 80px;\n  height: 25px;\n  position: absolute;\n  background: lightgreen;\n  top: -9px;\n  z-index: 10;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 30px;\n  border-right-color: transparent;\n  left: -1px;\n  transform: rotate(-15deg);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 30px 0;\n  border-left-color: transparent;\n  left: 80px;\n  transform: rotate(15deg);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 5px;\n  height: 15px;\n  background: lightgreen;\n  position: absolute;\n  top: 0;\n}\n.mouth .up .lip.left::before {\n  left: 70px;\n}\n.mouth .up .lip.right::before {\n  left: -5px;\n}\n/* \u63A5\u4E0B\u6765\u628A\u5B83\u6027\u611F\u7684\u5C0F\u80E1\u5B50\u522E\u5E72\u51C0 */\n.skin .cover {\n  background: lightgreen;\n  width: 160px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  top: 125px;\n  transform: translateX(-50%);\n  z-index: 10;\n}\n.mouth .down {\n  width: 100%;\n  height: 180px;\n  background: lightgreen;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  margin-left: -80px;\n  overflow: hidden;\n}\n.mouth .down .circle1 {\n  border: 4px solid #000;\n  width: 100%;\n  height: 600px;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  border-radius: 80px/300px;\n  background: tomato;\n  overflow: hidden;\n}\n.mouth .down .circle1 .circle2 {\n  width: 300px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -360px;\n  border-radius: 150px/250px;\n  background: lightsalmon;\n}\n/* \u6700\u540E\u662F\u4E00\u5BF9\u53EF\u7231\u7684\u5C0F\u8138\u988A */\n.cheek {\n  border: 3px solid #000;\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  border-radius: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 160px;\n  background: rgb(255, 255, 0);\n}\n.cheek.left {\n  margin-left: -180px;\n}\n.cheek.right {\n  margin-left: 180px;\n}\n/* \u8FD9\u6837\u4E00\u4E2A\u8D85\u7EA7\u53EF\u7231\u8FF7\u4EBA\u5361\u54C7\u4F0A\u7684\u76AE\u5361\u76AE\u5361\u4E18\u5C31\u5236\u4F5C\u5B8C\u6210\u4E86 */\n";
var _default = str;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  str: _css.default,
  str2: "",
  n: -1,
  delay: 25,
  timer: undefined,
  init: function init() {
    player.run(player.step, player.delay);
    player.bindEvents();
  },
  ui: {
    style: document.querySelector("#style"),
    content: document.querySelector("#content"),
    controler: document.querySelector("#controler"),
    pause: document.querySelector("#pause"),
    play: document.querySelector("#play"),
    slow: document.querySelector("#slow"),
    average: document.querySelector("#average"),
    fast: document.querySelector("#fast"),
    reload: document.querySelector("#reload")
  },
  step: function step(delay) {
    player.timer = setTimeout(function () {
      if (player.n < player.str.length - 1) {
        player.n += 1;

        if (player.str[player.n] === "\n") {
          player.str2 += "<br>";
        } else if (player.str[player.n] === " ") {
          player.str2 += "&nbsp";
        } else {
          player.str2 += player.str[player.n];
        }

        player.ui.content.innerHTML = player.str2;
        player.ui.style.innerHTML = player.str.substring(0, player.n);
        player.ui.content.scrollTo(0, 9999);
        player.step(delay);
      }
    }, delay);
  },
  run: function run(fn, delay) {
    player.stop();
    fn(delay);
  },
  stop: function stop() {
    window.clearTimeout(player.timer);
  },
  bindEvents: function bindEvents() {
    controler.addEventListener("click", function (e) {
      switch (e.target) {
        case player.ui.pause:
          player.stop();
          break;

        case player.ui.play:
          player.run(player.step, player.delay);
          break;

        case player.ui.slow:
          player.delay = 50;
          player.run(player.step, player.delay);
          break;

        case player.ui.average:
          player.delay = 25;
          player.run(player.step, player.delay);
          break;

        case player.ui.fast:
          player.delay = 5;
          player.run(player.step, player.delay);
          break;

        case player.ui.reload:
          location.reload();
          break;

        default:
          return;
      }
    });
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.6b3f7126.js.map