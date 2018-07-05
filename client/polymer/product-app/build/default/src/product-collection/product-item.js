function _templateObject_ee6aec00804a11e8b946e1d8e1e77d76() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.min.css\">\n\n      <style>\n        :host {\n          display: block;\n        }\n\n        #product { cursor: pointer }\n        #product .description { color: #999; margin-bottom: 1em }\n        #product.is-active { cursor: inherit }\n      </style>\n\n      <div class=\"row\" id=\"product\"\n           class$=\"[[__retrieveProductClass()]]\"\n           on-click=\"selectProduct\">\n        <div class=\"col-6 col-md-3 title\">Title: [[product.title]]</div>\n        <div class=\"col-6 col-md-3 price\">Price: [[product.price]] EUR</div>\n        <div class=\"col-12 col-md-6\">\n          <template is=\"dom-repeat\" items=\"[[product.colors]]\" as=\"color\">\n            <product-color color=\"[[color]]\"></product-color>\n          </template>\n        </div>\n        <template is=\"dom-if\" if=\"[[product.isActive]]\">\n          <div class=\"col-12 col-md-6 description\">[[ product.description ]]</div>\n        </template>\n      </div>\n    "]);

  _templateObject_ee6aec00804a11e8b946e1d8e1e77d76 = function _templateObject_ee6aec00804a11e8b946e1d8e1e77d76() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import './product-color.js';
/**
 * @customElement
 * @polymer
 */

var ProductItem =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(ProductItem, _PolymerElement);

  function ProductItem() {
    babelHelpers.classCallCheck(this, ProductItem);
    return babelHelpers.possibleConstructorReturn(this, (ProductItem.__proto__ || Object.getPrototypeOf(ProductItem)).apply(this, arguments));
  }

  babelHelpers.createClass(ProductItem, [{
    key: "selectProduct",
    value: function selectProduct(event) {
      this.dispatchEvent(new CustomEvent('product-selected', {
        detail: {
          product: this.product,
          originalEvent: event
        }
      }));
    }
  }, {
    key: "__retrieveProductClass",
    value: function __retrieveProductClass() {
      var classList = this.$.product.classList;
      classList.remove('is-active');

      if (this.product.isActive) {
        classList.add('is-active');
      }

      return classList.value;
    }
  }], [{
    key: "template",
    get: function get() {
      return html(_templateObject_ee6aec00804a11e8b946e1d8e1e77d76());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        product: {
          type: Object,
          value: {}
        }
      };
    }
  }]);
  return ProductItem;
}(PolymerElement);

window.customElements.define('product-item', ProductItem);