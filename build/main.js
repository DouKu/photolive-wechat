require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var config = __webpack_require__(11);
module.exports = config;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = {
  head: {
    title: 'Photo Live',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' }, { hid: 'Photo Live', name: 'Photo Live', content: 'Photo Live' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.min.css' }],
    script: [{ src: 'https://ticket1000-1253841380.file.myqcloud.com/flexible.min.js' }, { src: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/js/swiper.min.js' }, { src: 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js' }]
  },
  css: ['~assets/css/main.css', '~assets/css/reset.css'],
  loading: { color: '#3B8070', height: '5px' },
  build: {
    ssr: true,
    extractCSS: true,
    cssSourceMap: false,
    publicPath: '',
    vendor: ['axios', 'vue2-toast'],
    postcss: {
      plugins: {
        'autoprefixer': { browsers: 'last 5 version' },
        'postcss-px2rem': { remUnit: 72 }
      }
    },
    extend: function extend(config, ctx) {
      if (true) {
        config.output.publicPath = '/';
      } else {
        config.output.publicPath = '/';
      }
      if (ctx.isClient) {
        config.resolve.alias['vue'] = 'vue/dist/vue.js';
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },

    cache: {
      max: 1000,
      maxAge: 900000
    }
  },
  dev: !("production" !== 'production'),
  env: {
    NODE_ENV: JSON.stringify("production")
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return format; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var format = function format() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return next();

            case 3:
              _context.next = 8;
              break;

            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);

              ctx.body = {
                code: _context.t0.statusCode || _context.t0.status || -1,
                msg: _context.t0.message
              };

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[0, 5]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photolive__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routeIndex; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var routeIndex = function routeIndex(Router) {
  var common = Symbol('common');
  var auth = Symbol('auth');

  var RouteIndex = function () {
    function RouteIndex(Router) {
      _classCallCheck(this, RouteIndex);

      this[common] = new Router();
      this[auth] = new Router();
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__photolive__["a" /* photolive */])(this[common], this[auth]);
    }

    _createClass(RouteIndex, [{
      key: 'commonRouter',
      value: function commonRouter() {
        return this[common];
      }
    }, {
      key: 'authRouter',
      value: function authRouter() {
        return this[auth];
      }
    }]);

    return RouteIndex;
  }();

  return new RouteIndex(Router);
};



/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-logger");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return commonPhotoliveRequest; });




/**
 * @method 根据参数生成photolive的通用请求
 * @param {string} interfaceName 接口名
 * @param {object} data 请求数据
 * @param {string} extData 扩展数据
 * @return {promise}
 * @description 根据参数请求工单后端接口
 */
var commonPhotoliveRequest = function commonPhotoliveRequest(interfaceName, data, extData) {
  var dataObj = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* packPhotoliveReqData */])(interfaceName, data, extData);
  var options = {
    method: 'post',
    url: __WEBPACK_IMPORTED_MODULE_1__config___default.a.interface,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: dataObj
  };
  return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.request(options);
};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony default export */ exports["default"] = {
  port: 4001,
  host: '127.0.0.1',
  interface: ''
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cgi_request__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instances_interfaces__ = __webpack_require__(13);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/**
 * @method 获取智能客服的回答
 */
var getPhoto = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var id, params, _ref2, data;

    return __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = ctx.request.body.id;
            params = {
              id: id
            };
            _context.next = 4;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cgi_request__["a" /* commonPhotoliveRequest */])(__WEBPACK_IMPORTED_MODULE_2__instances_interfaces__["a" /* default */].photolive.getPhoto, params);

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;

            if (data.code === 0) {
              ctx.body = data;
            }

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function getPhoto(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ exports["a"] = {
  getPhoto: getPhoto
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
  photolive: {
    getPhoto: 'Photolive.getPhoto'
  }
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controllers_photolive__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return photolive; });


var photolive = function photolive(commonRouter, authRouter) {
  commonRouter.post('/getPhoto', __WEBPACK_IMPORTED_MODULE_0__controllers_photolive__["a" /* default */].getPhoto);
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return packPhotoliveReqData; });
/**
 * @method 根据参数生成格式的请求数据
 * @param {string} interfaceName 接口名
 * @param {object} para 请求数据
 * @return {object}
 * @description 根据参数生成market格式的请求数据
 */
var packPhotoliveReqData = function packPhotoliveReqData(interfaceName, para, extData) {
  var data = {
    version: 1,
    eventId: Math.floor(Math.random() * 9999999) + 1,
    timestamp: new Date().getTime(),
    interface: {
      interfaceName: interfaceName,
      para: para
    }
  };
  data = Object.assign(data, extData);
  return data;
};

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_logger__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__middlewares_format__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__config__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || __WEBPACK_IMPORTED_MODULE_8__config___default.a.host;
            port = process.env.PORT || __WEBPACK_IMPORTED_MODULE_8__config___default.a.port;
            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            if (!config.dev) {
              _context2.next = 10;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 10;
            return builder.build();

          case 10:

            app.use(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default()());
            app.use(__WEBPACK_IMPORTED_MODULE_5_koa_logger___default()());
            app.use(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__middlewares_format__["a" /* format */])());
            app.use(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__routes__["a" /* routeIndex */])(__WEBPACK_IMPORTED_MODULE_3_koa_router___default.a).commonRouter().routes());

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_lgy_Documents_RoundTable_photo_wechat_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200;
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }










start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map