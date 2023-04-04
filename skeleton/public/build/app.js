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
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.js");
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_da-03e5c3","vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_core-js_modules_es_array-6811f3"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsUUFBUSxFQUFFLFVBQUNzRCxDQUFDLEVBQUs7SUFDdkNELFVBQVUsQ0FBQ3BFLEtBQUssR0FBR3FFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDdEUsS0FBSztJQUNqQ2dELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0IsQ0FBQyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLLENBQUM7RUFDL0IsQ0FBQyxDQUFDO0VBRUZvRSxVQUFVLENBQUNyRCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ3NELENBQUMsRUFBSztJQUN6Q04sUUFBUSxDQUFDL0QsS0FBSyxHQUFHcUUsQ0FBQyxDQUFDQyxNQUFNLENBQUN0RSxLQUFLO0lBQy9CZ0QsT0FBTyxDQUFDQyxHQUFHLENBQUNvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ3RFLEtBQUssQ0FBQztFQUMvQixDQUFDLENBQUM7QUFHTixDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQ2RGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2FkZF9hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3F1YW50aXR5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuXHJcbi8qXHJcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxyXG4gKlxyXG4gKiBBbnkgZWxlbWVudCB3aXRoIGEgZGF0YS1jb250cm9sbGVyPVwiaGVsbG9cIiBhdHRyaWJ1dGUgd2lsbCBjYXVzZVxyXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcclxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcclxuICpcclxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcblxyXG4vLyBzdGFydCB0aGUgU3RpbXVsdXMgYXBwbGljYXRpb25cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcCc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL3F1YW50aXR5LmpzJztcclxuaW1wb3J0ICcuL3NjcmlwdHMvYWRkX2FydGljbGUuanMnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMvYXV0byc7XHJcblxyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwidmFyIGFydGljbGVDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FydGljbGVfY2FyZCcpO1xyXG52YXIgc2VhcmNoQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hBcnRpY2xlJyk7XHJcbnNlYXJjaEFydGljbGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcclxuICAgIHZhciBzZWFyY2hWYWx1ZSA9IHRoaXMudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ0aWNsZUNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGFydGljbGVOYW1lID0gYXJ0aWNsZUNhcmRzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uaW5uZXJIVE1MLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKGFydGljbGVOYW1lLmluZGV4T2Yoc2VhcmNoVmFsdWUpID4gLTEpIHtcclxuICAgICAgICAgICAgYXJ0aWNsZUNhcmRzW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFydGljbGVDYXJkc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrIG9uIGFuIGFydGljbGUsIHVwZGF0ZSB0aGUgYXJ0aWNsZSBzZWxlY3RcclxudmFyIGFydGljbGVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aWNsZV9zZWxlY3QnKTtcclxudmFyIGFydGljbGVDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FydGljbGVfY2FyZCcpO1xyXG5mb3IgKHZhciBpID0gMDsgaSA8IGFydGljbGVDYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJ0aWNsZUNhcmRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBhcnRpY2xlIGlkXHJcbiAgICAgICAgdmFyIGFydGljbGVJZCA9IHRoaXMuaWQuc3BsaXQoJ18nKVsxXTtcclxuICAgICAgICAvLyBVcGRhdGUgdGhlIGFydGljbGUgc2VsZWN0XHJcbiAgICAgICAgYXJ0aWNsZVNlbGVjdC52YWx1ZSA9IGFydGljbGVJZDtcclxuICAgICAgICAvLyBUcmlnZ2VyIHRoZSBjaGFuZ2UgZXZlbnRcclxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xyXG4gICAgICAgIGFydGljbGVTZWxlY3QuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgLy8gQWRkIGNsYXNzIHNlbGVjdGVkIHRvIHRoZSBhcnRpY2xlIGNhcmRcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFydGljbGVDYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhcnRpY2xlQ2FyZHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEdldCB0aGUgbWFnYXNpbiBpbnB1dCBhbmQgZmlsbCBpdCB3aGVuIHRoZSB1c2VyIHNlbGVjdCBhbiBhcnRpY2xlXHJcbnZhciBhcnRpY2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXJ0aWNsZV9zZWxlY3QnKTtcclxudmFyIG1hZ2FzaW5JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWdhc2luX3NlbGVjdCcpO1xyXG52YXIgcHJpY2VWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmljZVZhbHVlJyk7XHJcblxyXG5cclxuXHJcbmFydGljbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIGZpbGxNYWdhc2lucy5jYWxsKHRoaXMpO1xyXG4gICAgdXBkYXRlUHJpY2UoKTtcclxufSk7XHJcblxyXG5tYWdhc2luSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB1cGRhdGVQcmljZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGZpbGxNYWdhc2lucygpIHtcclxuICAgIC8vIEdldCB0aGUgYXJ0aWNsZSBpZFxyXG4gICAgdmFyIGFydGljbGVJZCA9IHRoaXMudmFsdWU7XHJcbiAgICAvLyBHZXQgdGhlIGxpc3Qgb2YgbWFnYXNpblxyXG4gICAgdmFyIG1hZ2FzaW5MaXN0ID0gZ2V0TWFnYXNpbkxpc3QoYXJ0aWNsZUlkKTtcclxuICAgIC8vIEZpbGwgdGhlIG1hZ2FzaW4gaW5wdXRcclxuICAgIGZpbGxNYWdhc2luSW5wdXQobWFnYXNpbkxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNYWdhc2luTGlzdChhcnRpY2xlSWQpIHtcclxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBtYWdhc2luXHJcbiAgICB2YXIgbWFnYXNpbkxpc3QgPSBbXTtcclxuICAgIC8vIEZvciBlYWNoIHByb3Bvc2VcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcG9zZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBJZiB0aGUgYXJ0aWNsZSBpZCBpcyB0aGUgc2FtZVxyXG4gICAgICAgIGludEFydGljbGVJZCA9IHBhcnNlSW50KGFydGljbGVJZCkgKyAxO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsaXN0OiAnICsgcHJvcG9zZUxpc3RbaV0uYXJ0aWNsZS5pZClcclxuICAgICAgICBjb25zb2xlLmxvZygnYXJ0aWNsZTogJyArIGludEFydGljbGVJZClcclxuICAgICAgICBpZiAocHJvcG9zZUxpc3RbaV0uYXJ0aWNsZS5pZCA9PSBpbnRBcnRpY2xlSWQpIHtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBtYWdhc2luIHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIG1hZ2FzaW5MaXN0LnB1c2gocHJvcG9zZUxpc3RbaV0ubWFnYXNpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hZ2FzaW5MaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxsTWFnYXNpbklucHV0KG1hZ2FzaW5MaXN0KSB7XHJcbiAgICAvLyBDbGVhciB0aGUgbWFnYXNpbiBpbnB1dFxyXG4gICAgbWFnYXNpbklucHV0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgLy8gQWRkIHRoZSBkZWZhdWx0IG9wdGlvblxyXG4gICAgbWFnYXNpbklucHV0LmlubmVySFRNTCArPSAnPG9wdGlvbiB2YWx1ZT1cIlwiPkNob2lzaXNzZXogdW4gbWFnYXNpbjwvb3B0aW9uPic7XHJcbiAgICAvLyBGb3IgZWFjaCBtYWdhc2luXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hZ2FzaW5MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBvcHRpb25cclxuICAgICAgICBtYWdhc2luSW5wdXQuaW5uZXJIVE1MICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIG1hZ2FzaW5MaXN0W2ldLmlkICsgJ1wiPicgKyBnZXRNYWdhc2luTmFtZShtYWdhc2luTGlzdFtpXS5pZCkgKyAnPC9vcHRpb24+JztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TWFnYXNpbk5hbWUobWFnYXNpbklkKSB7XHJcbiAgICAvLyBGb3IgZWFjaCBtYWdhc2luXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1hZ2FzaW5MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gSWYgdGhlIGlkIGlzIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKG1hZ2FzaW5MaXN0W2ldLmlkID09IG1hZ2FzaW5JZCkge1xyXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5hbWVcclxuICAgICAgICAgICAgcmV0dXJuIG1hZ2FzaW5MaXN0W2ldLm5vbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByaWNlKCkge1xyXG4gICAgLy8gR2V0IHRoZSBhcnRpY2xlIGlkXHJcbiAgICB2YXIgYXJ0aWNsZUlkID0gYXJ0aWNsZUlucHV0LnZhbHVlO1xyXG4gICAgLy8gR2V0IHRoZSBtYWdhc2luIGlkXHJcbiAgICB2YXIgbWFnYXNpbklkID0gbWFnYXNpbklucHV0LnZhbHVlO1xyXG4gICAgLy8gR2V0IHRoZSBwcmljZVxyXG4gICAgdmFyIHByb3Bvc2UgPSBnZXRQcm9wb3NlKGFydGljbGVJZCwgbWFnYXNpbklkKTtcclxuICAgIGxldCBwcmljZSA9IDA7XHJcbiAgICBpZiAocHJvcG9zZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmljZSA9IHByb3Bvc2UucHJpeC50b1N0cmluZygpO1xyXG4gICAgICAgIHVwZGF0ZVByb3Bvc2VJbnB1dChwcm9wb3NlKTtcclxuICAgIH1cclxuICAgIC8vIEdldCB0aGUgcXVhbnRpdHlcclxuICAgIHZhciBxdWFudGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaG9vc2VfcHJvcG9zZV9xdWFudGl0ZScpLnZhbHVlO1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwcmljZVxyXG4gICAgcHJpY2VWYWx1ZS5pbm5lckhUTUwgPSAocHJpY2UgKiBxdWFudGl0eSkudG9TdHJpbmcoKSsgJ+KCrCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3Bvc2UoYXJ0aWNsZUlkLCBtYWdhc2luSWQpIHtcclxuICAgIGxldCBpbnRBcnRpY2xlSWQgPSBwYXJzZUludChhcnRpY2xlSWQpICsgMTtcclxuICAgIC8vIEZvciBlYWNoIHByb3Bvc2VcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcG9zZUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBJZiB0aGUgYXJ0aWNsZSBpZCBhbmQgdGhlIG1hZ2FzaW4gaWQgYXJlIHRoZSBzYW1lXHJcbiAgICAgICAgaWYgKHByb3Bvc2VMaXN0W2ldLmFydGljbGUuaWQgPT0gaW50QXJ0aWNsZUlkICYmIHByb3Bvc2VMaXN0W2ldLm1hZ2FzaW4uaWQgPT0gbWFnYXNpbklkKSB7XHJcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgcHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHByb3Bvc2VMaXN0W2ldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm9wb3NlSW5wdXQocHJvcG9zZSkge1xyXG4gICAgLy8gR2V0IHRoZSBwcm9wb3NlIGlucHV0XHJcbiAgICB2YXIgcHJvcG9zZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZV9wcm9wb3NlX3Byb3Bvc2UnKTtcclxuICAgIC8vIFNldCB0aGUgc2VsZWN0ZWQgdmFsdWUgb2YgdGhlIHByb3Bvc2UgaW5wdXRcclxuICAgIGxldCBpbnRQcm9wb3NlSWQgPSBwYXJzZUludChwcm9wb3NlLmlkKSAtIDE7XHJcbiAgICBwcm9wb3NlSW5wdXQudmFsdWUgPSBpbnRQcm9wb3NlSWQ7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wb3NlLmlkKTtcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZV9wcm9wb3NlX3F1YW50aXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB1cGRhdGVQcmljZSgpO1xyXG59KTsiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgcXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZ2VRdWFudGl0eScpO1xyXG4gICAgY29uc3QgcXVhbnRpdHlOYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0UXVhbnRpdHknKTtcclxuICAgIHF1YW50aXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgcXVhbnRpdHlOYi52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHF1YW50aXR5TmIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICBxdWFudGl0eS52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxufSk7XHJcblxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhcHBseSIsImFyZ3VtZW50cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJDaGFydCIsInJlcXVpcmUiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiY29udGV4dCIsImFydGljbGVDYXJkcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNlYXJjaEFydGljbGUiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZWFyY2hWYWx1ZSIsInRvTG93ZXJDYXNlIiwiaSIsImxlbmd0aCIsImFydGljbGVOYW1lIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbm5lckhUTUwiLCJpbmRleE9mIiwic3R5bGUiLCJkaXNwbGF5IiwiYXJ0aWNsZVNlbGVjdCIsImFydGljbGVJZCIsImlkIiwic3BsaXQiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImFydGljbGVJbnB1dCIsIm1hZ2FzaW5JbnB1dCIsInByaWNlVmFsdWUiLCJmaWxsTWFnYXNpbnMiLCJjYWxsIiwidXBkYXRlUHJpY2UiLCJtYWdhc2luTGlzdCIsImdldE1hZ2FzaW5MaXN0IiwiZmlsbE1hZ2FzaW5JbnB1dCIsInByb3Bvc2VMaXN0IiwiaW50QXJ0aWNsZUlkIiwicGFyc2VJbnQiLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZSIsInB1c2giLCJtYWdhc2luIiwiZ2V0TWFnYXNpbk5hbWUiLCJtYWdhc2luSWQiLCJub20iLCJwcm9wb3NlIiwiZ2V0UHJvcG9zZSIsInByaWNlIiwidW5kZWZpbmVkIiwicHJpeCIsInRvU3RyaW5nIiwidXBkYXRlUHJvcG9zZUlucHV0IiwicXVhbnRpdHkiLCJwcm9wb3NlSW5wdXQiLCJpbnRQcm9wb3NlSWQiLCJ3aW5kb3ciLCJxdWVyeVNlbGVjdG9yIiwicXVhbnRpdHlOYiIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9