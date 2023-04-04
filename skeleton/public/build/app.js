(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");
/* harmony import */ var _scripts_quantity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/quantity.js */ "./assets/scripts/quantity.js");
/* harmony import */ var _scripts_quantity_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_quantity_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_add_article_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/add_article.js */ "./assets/scripts/add_article.js");
/* harmony import */ var _scripts_add_article_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_add_article_js__WEBPACK_IMPORTED_MODULE_3__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'chart.js/auto'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application




__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/scripts/add_article.js":
/*!***************************************!*\
  !*** ./assets/scripts/add_article.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
var articleCards = document.getElementsByClassName('article_card');
var searchArticle = document.getElementById('searchArticle');
searchArticle.addEventListener('keyup', function () {
  var searchValue = this.value.toLowerCase();
  for (var i = 0; i < articleCards.length; i++) {
    var articleName = articleCards[i].getElementsByTagName('p')[0].innerHTML.toLowerCase();
    if (articleName.indexOf(searchValue) > -1) {
      articleCards[i].style.display = 'block';
    } else {
      articleCards[i].style.display = 'none';
    }
  }
});

// When the user click on an article, update the article select
var articleSelect = document.getElementById('article_select');
var articleCards = document.getElementsByClassName('article_card');
for (var i = 0; i < articleCards.length; i++) {
  articleCards[i].addEventListener('click', function () {
    // Get the article id
    var articleId = this.id.split('_')[1];
    // Update the article select
    articleSelect.value = articleId;
    // Trigger the change event
    var event = new Event('change');
    articleSelect.dispatchEvent(event);
    // Add class selected to the article card
    for (var i = 0; i < articleCards.length; i++) {
      articleCards[i].classList.remove('selected');
    }
    this.classList.add('selected');
  });
}

// Get the magasin input and fill it when the user select an article
var articleInput = document.getElementById('article_select');
var magasinInput = document.getElementById('magasin_select');
var priceValue = document.getElementById('priceValue');
articleInput.addEventListener('change', function () {
  fillMagasins.call(this);
  updatePrice();
});
magasinInput.addEventListener('change', function () {
  updatePrice();
});
function fillMagasins() {
  // Get the article id
  var articleId = this.value;
  // Get the list of magasin
  var magasinList = getMagasinList(articleId);
  // Fill the magasin input
  fillMagasinInput(magasinList);
}
function getMagasinList(articleId) {
  // Get the list of magasin
  var magasinList = [];
  // For each propose
  for (var i = 0; i < proposeList.length; i++) {
    // If the article id is the same
    intArticleId = parseInt(articleId) + 1;
    console.log('list: ' + proposeList[i].article.id);
    console.log('article: ' + intArticleId);
    if (proposeList[i].article.id == intArticleId) {
      // Add the magasin to the list
      magasinList.push(proposeList[i].magasin);
    }
  }
  return magasinList;
}
function fillMagasinInput(magasinList) {
  // Clear the magasin input
  magasinInput.innerHTML = '';
  // Add the default option
  magasinInput.innerHTML += '<option value="">Choisissez un magasin</option>';
  // For each magasin
  for (var i = 0; i < magasinList.length; i++) {
    // Add the option
    magasinInput.innerHTML += '<option value="' + magasinList[i].id + '">' + getMagasinName(magasinList[i].id) + '</option>';
  }
}
function getMagasinName(magasinId) {
  // For each magasin
  for (var i = 0; i < magasinList.length; i++) {
    // If the id is the same
    if (magasinList[i].id == magasinId) {
      // Return the name
      return magasinList[i].nom;
    }
  }
}
function updatePrice() {
  // Get the article id
  var articleId = articleInput.value;
  // Get the magasin id
  var magasinId = magasinInput.value;
  // Get the price
  var propose = getPropose(articleId, magasinId);
  var price = 0;
  if (propose != undefined) {
    price = propose.prix.toString();
    updateProposeInput(propose);
  }
  // Get the quantity
  var quantity = document.getElementById('choose_propose_quantite').value;
  // Update the price
  priceValue.innerHTML = (price * quantity).toString() + '€';
}
function getPropose(articleId, magasinId) {
  var intArticleId = parseInt(articleId) + 1;
  // For each propose
  for (var i = 0; i < proposeList.length; i++) {
    // If the article id and the magasin id are the same
    if (proposeList[i].article.id == intArticleId && proposeList[i].magasin.id == magasinId) {
      // Return the price
      return proposeList[i];
    }
  }
}
function updateProposeInput(propose) {
  // Get the propose input
  var proposeInput = document.getElementById('choose_propose_propose');
  // Set the selected value of the propose input
  var intProposeId = parseInt(propose.id) - 1;
  proposeInput.value = intProposeId;
  console.log(propose.id);
}
document.getElementById('choose_propose_quantite').addEventListener('change', function () {
  updatePrice();
});

/***/ }),

/***/ "./assets/scripts/quantity.js":
/*!************************************!*\
  !*** ./assets/scripts/quantity.js ***!
  \************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  var quantity = document.querySelector('.rangeQuantity');
  var quantityNb = document.querySelector('.textQuantity');
  quantity.addEventListener('change', function (e) {
    quantityNb.value = e.target.value;
    console.log(e.target.value);
  });
  quantityNb.addEventListener('change', function (e) {
    quantity.value = e.target.value;
    console.log(e.target.value);
  });
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-03e5c3","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-e6b21c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxFQUFFLFVBQUNzRCxDQUFDLEVBQUs7SUFDdkNELFVBQVUsQ0FBQ3BFLEtBQUssR0FBR3FFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDdEUsS0FBSztJQUNqQ2dELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLLENBQUM7RUFDL0IsQ0FBQyxDQUFDO0VBRUZvRSxVQUFVLENBQUNyRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3NELENBQUMsRUFBSztJQUN6Q04sUUFBUSxDQUFDL0QsS0FBSyxHQUFHcUUsQ0FBQyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLO0lBQy9CZ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ3RFLEtBQUssQ0FBQztFQUMvQixDQUFDLENBQUM7QUFHTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2RGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2FkZF9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3F1YW50aXR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/OGY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcbmltcG9ydCAnLi9zY3JpcHRzL3F1YW50aXR5LmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL2FkZF9hcnRpY2xlLmpzJztcbmltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcy9hdXRvJztcblxuXG5yZXF1aXJlKCdib290c3RyYXAnKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXG4gICAgdHJ1ZSxcbiAgICAvXFwuW2p0XXN4PyQvXG4pKTtcblxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcbiIsInZhciBhcnRpY2xlQ2FyZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhcnRpY2xlX2NhcmQnKTtcbnZhciBzZWFyY2hBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEFydGljbGUnKTtcbnNlYXJjaEFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2VhcmNoVmFsdWUgPSB0aGlzLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnRpY2xlQ2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFydGljbGVOYW1lID0gYXJ0aWNsZUNhcmRzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhcnRpY2xlTmFtZS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgICBhcnRpY2xlQ2FyZHNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcnRpY2xlQ2FyZHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrIG9uIGFuIGFydGljbGUsIHVwZGF0ZSB0aGUgYXJ0aWNsZSBzZWxlY3RcbnZhciBhcnRpY2xlU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FydGljbGVfc2VsZWN0Jyk7XG52YXIgYXJ0aWNsZUNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXJ0aWNsZV9jYXJkJyk7XG5mb3IgKHZhciBpID0gMDsgaSA8IGFydGljbGVDYXJkcy5sZW5ndGg7IGkrKykge1xuICAgIGFydGljbGVDYXJkc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBHZXQgdGhlIGFydGljbGUgaWRcbiAgICAgICAgdmFyIGFydGljbGVJZCA9IHRoaXMuaWQuc3BsaXQoJ18nKVsxXTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBhcnRpY2xlIHNlbGVjdFxuICAgICAgICBhcnRpY2xlU2VsZWN0LnZhbHVlID0gYXJ0aWNsZUlkO1xuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdjaGFuZ2UnKTtcbiAgICAgICAgYXJ0aWNsZVNlbGVjdC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHNlbGVjdGVkIHRvIHRoZSBhcnRpY2xlIGNhcmRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnRpY2xlQ2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFydGljbGVDYXJkc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9KTtcbn1cblxuLy8gR2V0IHRoZSBtYWdhc2luIGlucHV0IGFuZCBmaWxsIGl0IHdoZW4gdGhlIHVzZXIgc2VsZWN0IGFuIGFydGljbGVcbnZhciBhcnRpY2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aWNsZV9zZWxlY3QnKTtcbnZhciBtYWdhc2luSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFnYXNpbl9zZWxlY3QnKTtcbnZhciBwcmljZVZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaWNlVmFsdWUnKTtcblxuXG5cbmFydGljbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBmaWxsTWFnYXNpbnMuY2FsbCh0aGlzKTtcbiAgICB1cGRhdGVQcmljZSgpO1xufSk7XG5cbm1hZ2FzaW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICB1cGRhdGVQcmljZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGZpbGxNYWdhc2lucygpIHtcbiAgICAvLyBHZXQgdGhlIGFydGljbGUgaWRcbiAgICB2YXIgYXJ0aWNsZUlkID0gdGhpcy52YWx1ZTtcbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgbWFnYXNpblxuICAgIHZhciBtYWdhc2luTGlzdCA9IGdldE1hZ2FzaW5MaXN0KGFydGljbGVJZCk7XG4gICAgLy8gRmlsbCB0aGUgbWFnYXNpbiBpbnB1dFxuICAgIGZpbGxNYWdhc2luSW5wdXQobWFnYXNpbkxpc3QpO1xufVxuXG5mdW5jdGlvbiBnZXRNYWdhc2luTGlzdChhcnRpY2xlSWQpIHtcbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgbWFnYXNpblxuICAgIHZhciBtYWdhc2luTGlzdCA9IFtdO1xuICAgIC8vIEZvciBlYWNoIHByb3Bvc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3Bvc2VMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHRoZSBhcnRpY2xlIGlkIGlzIHRoZSBzYW1lXG4gICAgICAgIGludEFydGljbGVJZCA9IHBhcnNlSW50KGFydGljbGVJZCkgKyAxO1xuICAgICAgICBjb25zb2xlLmxvZygnbGlzdDogJyArIHByb3Bvc2VMaXN0W2ldLmFydGljbGUuaWQpXG4gICAgICAgIGNvbnNvbGUubG9nKCdhcnRpY2xlOiAnICsgaW50QXJ0aWNsZUlkKVxuICAgICAgICBpZiAocHJvcG9zZUxpc3RbaV0uYXJ0aWNsZS5pZCA9PSBpbnRBcnRpY2xlSWQpIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgbWFnYXNpbiB0byB0aGUgbGlzdFxuICAgICAgICAgICAgbWFnYXNpbkxpc3QucHVzaChwcm9wb3NlTGlzdFtpXS5tYWdhc2luKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWFnYXNpbkxpc3Q7XG59XG5cbmZ1bmN0aW9uIGZpbGxNYWdhc2luSW5wdXQobWFnYXNpbkxpc3QpIHtcbiAgICAvLyBDbGVhciB0aGUgbWFnYXNpbiBpbnB1dFxuICAgIG1hZ2FzaW5JbnB1dC5pbm5lckhUTUwgPSAnJztcbiAgICAvLyBBZGQgdGhlIGRlZmF1bHQgb3B0aW9uXG4gICAgbWFnYXNpbklucHV0LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPkNob2lzaXNzZXogdW4gbWFnYXNpbjwvb3B0aW9uPic7XG4gICAgLy8gRm9yIGVhY2ggbWFnYXNpblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWFnYXNpbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gQWRkIHRoZSBvcHRpb25cbiAgICAgICAgbWFnYXNpbklucHV0LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBtYWdhc2luTGlzdFtpXS5pZCArICdcIj4nICsgZ2V0TWFnYXNpbk5hbWUobWFnYXNpbkxpc3RbaV0uaWQpICsgJzwvb3B0aW9uPic7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRNYWdhc2luTmFtZShtYWdhc2luSWQpIHtcbiAgICAvLyBGb3IgZWFjaCBtYWdhc2luXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYWdhc2luTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBJZiB0aGUgaWQgaXMgdGhlIHNhbWVcbiAgICAgICAgaWYgKG1hZ2FzaW5MaXN0W2ldLmlkID09IG1hZ2FzaW5JZCkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBuYW1lXG4gICAgICAgICAgICByZXR1cm4gbWFnYXNpbkxpc3RbaV0ubm9tO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcmljZSgpIHtcbiAgICAvLyBHZXQgdGhlIGFydGljbGUgaWRcbiAgICB2YXIgYXJ0aWNsZUlkID0gYXJ0aWNsZUlucHV0LnZhbHVlO1xuICAgIC8vIEdldCB0aGUgbWFnYXNpbiBpZFxuICAgIHZhciBtYWdhc2luSWQgPSBtYWdhc2luSW5wdXQudmFsdWU7XG4gICAgLy8gR2V0IHRoZSBwcmljZVxuICAgIHZhciBwcm9wb3NlID0gZ2V0UHJvcG9zZShhcnRpY2xlSWQsIG1hZ2FzaW5JZCk7XG4gICAgbGV0IHByaWNlID0gMDtcbiAgICBpZiAocHJvcG9zZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJpY2UgPSBwcm9wb3NlLnByaXgudG9TdHJpbmcoKTtcbiAgICAgICAgdXBkYXRlUHJvcG9zZUlucHV0KHByb3Bvc2UpO1xuICAgIH1cbiAgICAvLyBHZXQgdGhlIHF1YW50aXR5XG4gICAgdmFyIHF1YW50aXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZV9wcm9wb3NlX3F1YW50aXRlJykudmFsdWU7XG4gICAgLy8gVXBkYXRlIHRoZSBwcmljZVxuICAgIHByaWNlVmFsdWUuaW5uZXJIVE1MID0gKHByaWNlICogcXVhbnRpdHkpLnRvU3RyaW5nKCkrICfigqwnO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wb3NlKGFydGljbGVJZCwgbWFnYXNpbklkKSB7XG4gICAgbGV0IGludEFydGljbGVJZCA9IHBhcnNlSW50KGFydGljbGVJZCkgKyAxO1xuICAgIC8vIEZvciBlYWNoIHByb3Bvc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3Bvc2VMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIElmIHRoZSBhcnRpY2xlIGlkIGFuZCB0aGUgbWFnYXNpbiBpZCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKHByb3Bvc2VMaXN0W2ldLmFydGljbGUuaWQgPT0gaW50QXJ0aWNsZUlkICYmIHByb3Bvc2VMaXN0W2ldLm1hZ2FzaW4uaWQgPT0gbWFnYXNpbklkKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHByaWNlXG4gICAgICAgICAgICByZXR1cm4gcHJvcG9zZUxpc3RbaV1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvcG9zZUlucHV0KHByb3Bvc2UpIHtcbiAgICAvLyBHZXQgdGhlIHByb3Bvc2UgaW5wdXRcbiAgICB2YXIgcHJvcG9zZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZV9wcm9wb3NlX3Byb3Bvc2UnKTtcbiAgICAvLyBTZXQgdGhlIHNlbGVjdGVkIHZhbHVlIG9mIHRoZSBwcm9wb3NlIGlucHV0XG4gICAgbGV0IGludFByb3Bvc2VJZCA9IHBhcnNlSW50KHByb3Bvc2UuaWQpIC0gMTtcbiAgICBwcm9wb3NlSW5wdXQudmFsdWUgPSBpbnRQcm9wb3NlSWQ7XG4gICAgY29uc29sZS5sb2cocHJvcG9zZS5pZCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaG9vc2VfcHJvcG9zZV9xdWFudGl0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZVByaWNlKCk7XG59KTsiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmdlUXVhbnRpdHknKTtcbiAgICBjb25zdCBxdWFudGl0eU5iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRRdWFudGl0eScpO1xuICAgIHF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIHF1YW50aXR5TmIudmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcXVhbnRpdHlOYi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBxdWFudGl0eS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gICAgXG4gICAgXG59KTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0IiwiQ2hhcnQiLCJyZXF1aXJlIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsImNvbnRleHQiLCJhcnRpY2xlQ2FyZHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZWFyY2hBcnRpY2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJhcnRpY2xlTmFtZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiaW5uZXJIVE1MIiwiaW5kZXhPZiIsInN0eWxlIiwiZGlzcGxheSIsImFydGljbGVTZWxlY3QiLCJhcnRpY2xlSWQiLCJpZCIsInNwbGl0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhcnRpY2xlSW5wdXQiLCJtYWdhc2luSW5wdXQiLCJwcmljZVZhbHVlIiwiZmlsbE1hZ2FzaW5zIiwiY2FsbCIsInVwZGF0ZVByaWNlIiwibWFnYXNpbkxpc3QiLCJnZXRNYWdhc2luTGlzdCIsImZpbGxNYWdhc2luSW5wdXQiLCJwcm9wb3NlTGlzdCIsImludEFydGljbGVJZCIsInBhcnNlSW50IiwiY29uc29sZSIsImxvZyIsImFydGljbGUiLCJwdXNoIiwibWFnYXNpbiIsImdldE1hZ2FzaW5OYW1lIiwibWFnYXNpbklkIiwibm9tIiwicHJvcG9zZSIsImdldFByb3Bvc2UiLCJwcmljZSIsInVuZGVmaW5lZCIsInByaXgiLCJ0b1N0cmluZyIsInVwZGF0ZVByb3Bvc2VJbnB1dCIsInF1YW50aXR5IiwicHJvcG9zZUlucHV0IiwiaW50UHJvcG9zZUlkIiwid2luZG93IiwicXVlcnlTZWxlY3RvciIsInF1YW50aXR5TmIiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==