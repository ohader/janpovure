function _templateObject_ee6594d0804a11e8b946e1d8e1e77d76() {
  var data = babelHelpers.taggedTemplateLiteral(["\n      <link rel=\"stylesheet\" href=\"../../node_modules/bootstrap/dist/css/bootstrap.min.css\">\n\n      <style>\n        :host {\n          display: inline-block;\n        }\n        span {\n          width: 32px;\n          height: 32px;\n          display: inline-block;\n        }\n      </style>\n      <span style$=\"background: [[backgroundColor]]\"\n            title=\"[[color.title]]\">\n      </span>\n    "]);

  _templateObject_ee6594d0804a11e8b946e1d8e1e77d76 = function _templateObject_ee6594d0804a11e8b946e1d8e1e77d76() {
    return data;
  };

  return data;
}

import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
/**
 * @customElement
 * @polymer
 */

var ProductColor =
/*#__PURE__*/
function (_PolymerElement) {
  babelHelpers.inherits(ProductColor, _PolymerElement);

  function ProductColor() {
    babelHelpers.classCallCheck(this, ProductColor);
    return babelHelpers.possibleConstructorReturn(this, (ProductColor.__proto__ || Object.getPrototypeOf(ProductColor)).apply(this, arguments));
  }

  babelHelpers.createClass(ProductColor, [{
    key: "__computeBackgroundColor",
    value: function __computeBackgroundColor(color) {
      return '#' + color.colorCode;
    }
  }], [{
    key: "template",
    get: function get() {
      return html(_templateObject_ee6594d0804a11e8b946e1d8e1e77d76());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        color: {
          type: Object,
          value: {}
        },
        backgroundColor: {
          type: String,
          computed: '__computeBackgroundColor(color)'
        }
      };
    }
  }]);
  return ProductColor;
}(PolymerElement);

window.customElements.define('product-color', ProductColor);