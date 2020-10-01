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
})({"epB2":[function(require,module,exports) {
var html = document.querySelector("#html");
var style = document.querySelector("#style");
var timer;
var delay = 30;
var n = -1;
var str = "/**\n * \u4F60\u597D\uFF0C\u8FD9\u662F\u4E00\u4E2Adynamic html demo\n * \u63A5\u4E0B\u6765\u6211\u8981\u52A0\u6837\u5F0F\u4E86\n * \u6211\u8981\u52A0\u7684\u6837\u5F0F\u662F\n **/\n/*\u753B\u4E00\u4E2A\u5706*/\n#div1 {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  border: none;\n  box-shadow: 0 0 3px rgba(0,0,0,0.5);\n}\n/*\u516B\u5366\u662F\u9634\u9633\u5F62\u6210\u7684\u4E00\u9ED1\u4E00\u767D\uFF0C\u6DFB\u52A0\u4E00\u5BF9\u53CC\u5B50\u661F*/\n#div1 {\n  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#div1::before {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #000;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: #fff;\n  left: 50%;\n  bottom: 0;\n  transform: translateX(-50%);\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n/* \u5F62\u4E0D\u9022\u5F71\uFF0C\u5F71\u4E0D\u79BB\u5F62\uFF0C\u9634\u9633\u53CC\u751F\uFF0C\u5F62\u5F71\u4E0D\u79BB\u3002*/\n@keyframes action {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n#div1:hover {\n  animation: action 2s linear 1s infinite;\n}\n";
var str2 = "";

function step(delay) {
  timer = setTimeout(function () {
    if (n + 1 < str.length) {
      n += 1;

      if (str[n] === "\n") {
        str2 += "<br>";
      } else if (str[n] === " ") {
        str2 += "&nbsp";
      } else {
        str2 += str[n];
      }

      html.innerHTML = str2;
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
      style.innerHTML = str.substring(0, n);
      step(delay);
    }
  }, delay);
}

function debounce(fn, delay) {
  clearTimeout(timer);
  fn(delay);
}

debounce(step, delay);

slow.onclick = function () {
  delay = 50;
  debounce(step, delay);
};

average.onclick = function () {
  delay = 25;
  debounce(step, delay);
};

fast.onclick = function () {
  delay = 10;
  debounce(step, delay);
};
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f2972ddd.js.map