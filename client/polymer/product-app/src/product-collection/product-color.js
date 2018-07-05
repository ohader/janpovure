import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class ProductColor extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">

      <style>
        :host {
          display: inline-block;
        }
        span {
          width: 32px;
          height: 32px;
          display: inline-block;
        }
      </style>
      <span style$="background: [[backgroundColor]]"
            title="[[color.title]]">
      </span>
    `;
  }

  static get properties() {
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

  __computeBackgroundColor(color) {
    return '#' + color.colorCode;
  }
}

window.customElements.define('product-color', ProductColor);
