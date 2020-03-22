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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server-dev.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server-dev.js":
/*!**********************************!*\
  !*** ./src/server/server-dev.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webpack.dev.config.js */ \"./webpack.dev.config.js\");\n/* harmony import */ var _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(DIST_DIR, 'index.html'),\n    compiler = webpack__WEBPACK_IMPORTED_MODULE_2___default()(_webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default.a); // app.use(express.static(DIST_DIR + 'resources'))\n\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler, {\n  publicPath: _webpack_dev_config_js__WEBPACK_IMPORTED_MODULE_5___default.a.output.publicPath\n}));\napp.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler));\napp.get('*', function (req, res, next) {\n  compiler.outputFileSystem.readFile(HTML_FILE, function (err, result) {\n    if (err) {\n      return next(err);\n    }\n\n    res.set('content-type', 'text/html');\n    res.send(result);\n    res.end();\n  });\n});\nvar PORT = process.env.PORT || 8080;\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server-dev.js?");

/***/ }),

/***/ "./webpack.dev.config.js":
/*!*******************************!*\
  !*** ./webpack.dev.config.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var dotEnv = __webpack_require__(/*! dotenv-webpack */ \"dotenv-webpack\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebPackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n\nvar sassResourcesLoader = __webpack_require__(/*! sass-resources-loader */ \"sass-resources-loader\");\n\nvar extractLoader = __webpack_require__(/*! extract-loader */ \"extract-loader\"); // require('postcss.config.js')\n\n\nvar workingPath = process.cwd();\nvar resourcesPath = \"\".concat(workingPath, \"/src/resources\");\nvar stylesPath = \"\".concat(workingPath, \"/src/styles\");\nvar scriptsPath = \"\".concat(workingPath, \"/src/scripts\");\nconsole.log(\"development\");\nmodule.exports = {\n  entry: {\n    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/scripts/index.js', './src/styles/style.scss']\n  },\n  output: {\n    path: path.join(__dirname, 'dist'),\n    filename: 'scripts/[name].js',\n    chunkFilename: 'scripts/[id].js'\n  },\n  mode: 'development',\n  target: 'web',\n  devtool: '#source-map',\n  module: {\n    rules: [{\n      enforce: 'pre',\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'eslint-loader',\n      options: {\n        emitWarning: true,\n        failOnError: false,\n        failOnWarning: false\n      }\n    }, {\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader',\n      options: {\n        presets: ['@babel/preset-env']\n      }\n    }, {\n      // Loads the javacript into html template provided.\n      // Entry point is set below in HtmlWebPackPlugin in Plugins \n      test: /\\.html$/,\n      use: [{\n        loader: 'html-loader' //options: { minimize: true }\n\n      }]\n    }, {\n      test: /\\.s?css$/,\n      exclude: /node_modules/,\n      use: [MiniCssExtractPlugin.loader, {\n        loader: 'css-loader'\n      }, {\n        loader: 'extract-loader'\n      }, {\n        loader: 'css-loader?-url'\n      }, {\n        loader: 'postcss-loader',\n        options: {\n          plugins: function plugins() {\n            return [__webpack_require__(/*! autoprefixer */ \"autoprefixer\")(), __webpack_require__(/*! cssnano */ \"cssnano\")({\n              preset: ['default', {\n                discardComments: {\n                  removeAll: true\n                },\n                normalizeWhitespace: false\n              }]\n            })];\n          }\n        }\n      }, {\n        loader: 'sass-loader'\n      }, {\n        loader: 'sass-resources-loader',\n        options: {\n          resources: './src/styles/**/*.scss'\n        }\n      }]\n    }, {\n      test: /\\.svg(\\?.*)?$/,\n      // This will match example.svg example.svg?param=value\n      use: [{\n        // This loader will base64 encode and inline SVGs smaller then the limit below.\n        // Any other larger files won't be processed or bundled and will get their path fixed for AEM.\n        loader: 'url-loader',\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          publicPath: '../fonts',\n          outputPath: 'fonts/'\n        }\n      }, 'svg-transform-loader']\n    }, {\n      // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.\n      test: /\\.otf$/,\n      loader: 'file-loader',\n      options: {\n        limit: 8000,\n        emitFile: true,\n        name: '[name].[ext]',\n        publicPath: '../fonts',\n        outputPath: 'fonts/'\n      }\n    }, {\n      // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.\n      test: /\\.woff(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n      use: [{\n        loader: \"file-loader?mimetype=application/font-woff\",\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          publicPath: '../fonts',\n          outputPath: 'fonts/'\n        }\n      }]\n    }, {\n      // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.\n      test: /\\.woff2(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n      use: [{\n        loader: \"file-loader?mimetype=application/font-woff\",\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          publicPath: '../fonts',\n          outputPath: 'fonts/'\n        }\n      }]\n    }, {\n      // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.\n      test: /\\.ttf(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n      use: [{\n        loader: \"file-loader?mimetype=application/octet-stream\",\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          publicPath: '../fonts',\n          outputPath: 'fonts/'\n        }\n      }]\n    }, {\n      // Files catched by this regular expression won't be processed or bundled and will get their path fixed for AEM.\n      test: /\\.eot(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n      use: [{\n        loader: \"file-loader\",\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          publicPath: '../fonts',\n          outputPath: 'fonts/'\n        }\n      }]\n    }, {\n      test: /\\.kml$/,\n      use: [{\n        loader: 'file-loader?mimetype=application/vnd.google-earth.kml+xml',\n        options: {\n          limit: 8000,\n          emitFile: true,\n          name: '[name].[ext]',\n          outputPath: 'kml/'\n        }\n      }]\n    }]\n  },\n  plugins: [new HtmlWebPackPlugin({\n    template: \"./src/html/index.html\",\n    filename: \"./index.html\",\n    excludeChunks: ['server']\n  }), new MiniCssExtractPlugin({\n    publicPath: './',\n    filename: 'styles/[name].css',\n    chunkFilename: 'styles/[id].css'\n  }), new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin(), new dotEnv({\n    path: \"\".concat(workingPath, \"/.env\")\n  })],\n  resolve: {\n    alias: {\n      '@resources': resourcesPath,\n      '@global-styles': stylesPath,\n      '@global-scripts': scriptsPath\n    },\n    extensions: ['.js', '.jsx', '.scss']\n  },\n  watch: true,\n  stats: 'minimal'\n};\n\n//# sourceURL=webpack:///./webpack.dev.config.js?");

/***/ }),

/***/ "autoprefixer":
/*!*******************************!*\
  !*** external "autoprefixer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"autoprefixer\");\n\n//# sourceURL=webpack:///external_%22autoprefixer%22?");

/***/ }),

/***/ "cssnano":
/*!**************************!*\
  !*** external "cssnano" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cssnano\");\n\n//# sourceURL=webpack:///external_%22cssnano%22?");

/***/ }),

/***/ "dotenv-webpack":
/*!*********************************!*\
  !*** external "dotenv-webpack" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv-webpack\");\n\n//# sourceURL=webpack:///external_%22dotenv-webpack%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "extract-loader":
/*!*********************************!*\
  !*** external "extract-loader" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"extract-loader\");\n\n//# sourceURL=webpack:///external_%22extract-loader%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sass-resources-loader":
/*!****************************************!*\
  !*** external "sass-resources-loader" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sass-resources-loader\");\n\n//# sourceURL=webpack:///external_%22sass-resources-loader%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });