function _templateObject_ee6100f0804a11e8b946e1d8e1e77d76() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.min.css\">\n\n      <style>\n        :host {\n          display: block;\n        }\n      </style>\n\n      <iron-ajax id=\"ajax\"\n                 debounce-duration=\"200\"\n                 handle-as=\"json\"\n                 url=\"[[productsUrl]]\"\n                 method=\"GET\"\n                 content-type=\"application/json\"\n                 on-response=\"fetchHandler\">\n      </iron-ajax>\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <button on-click=\"reload\">Reload</button>\n          </div>\n        </div>\n        <template is=\"dom-repeat\" items=\"[[__products]]\" as=\"product\">\n          <product-item product=\"{{product}}\"\n                        on-product-selected=\"selectProduct\">\n          </product-item>\n        </template>\n      </div>\n    "]);

  _templateObject_ee6100f0804a11e8b946e1d8e1e77d76 = function _templateObject_ee6100f0804a11e8b946e1d8e1e77d76() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/iron-ajax/iron-ajax.js";
import './product-item.js';
import './product-color.js';
/**
 * @customElement
 * @polymer
 */

var ProductCollection =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(ProductCollection, _PolymerElement);

  function ProductCollection() {
    babelHelpers.classCallCheck(this, ProductCollection);
    return babelHelpers.possibleConstructorReturn(this, (ProductCollection.__proto__ || Object.getPrototypeOf(ProductCollection)).apply(this, arguments));
  }

  babelHelpers.createClass(ProductCollection, [{
    key: "ready",
    value: function ready() {
      babelHelpers.get(ProductCollection.prototype.__proto__ || Object.getPrototypeOf(ProductCollection.prototype), "ready", this).call(this);
      this.fetch();
    }
  }, {
    key: "fetch",
    value: function fetch() {
      this.$.ajax.generateRequest();
    }
  }, {
    key: "fetchHandler",
    value: function fetchHandler(event, request) {
      var products = (event.detail.response || []).map(function (product) {
        product.isActive = false;
        return product;
      });

      if (products.length > 0) {
        products[0].isActive = true;
        this.set('__activeProduct', products[0]);
      } else {
        this.set('__activeProduct', null);
      }

      this.set('__products', products);
    }
  }, {
    key: "reload",
    value: function reload(event) {
      this.fetch();
    }
  }, {
    key: "selectProduct",
    value: function selectProduct(event) {
      var _this = this;

      var activeProduct = event.detail.product;
      this.set('__activeProduct', activeProduct); // for whatever reason in Polymer v3.0.2 handing the `isActive` state
      // is not possible with computed properties, but has to be explicitly
      // for array items being processed with the dom-repeat helper

      this.__products.forEach(function (product, index) {
        var isActive = product === activeProduct;

        if (isActive !== product.isActive) {
          _this.set('__products.' + index + '.isActive', isActive);
        }
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return html(_templateObject_ee6100f0804a11e8b946e1d8e1e77d76());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        productsUrl: {
          type: String,
          value: null
        },
        __products: {
          type: Array,
          value: []
        },
        __activeProduct: {
          type: Object,
          value: null
        }
      };
    }
  }]);
  return ProductCollection;
}(PolymerElement);

window.customElements.define('product-collection', ProductCollection);