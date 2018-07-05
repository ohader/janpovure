import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './product-color.js';

/**
 * @customElement
 * @polymer
 */
class ProductItem extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">

      <style>
        :host {
          display: block;
        }

        #product { cursor: pointer }
        #product .description { color: #999; margin-bottom: 1em }
        #product.is-active { cursor: inherit }
      </style>

      <div class="row" id="product"
           class$="[[__retrieveProductClass()]]"
           on-click="selectProduct">
        <div class="col-6 col-md-3 title">Title: [[product.title]]</div>
        <div class="col-6 col-md-3 price">Price: [[product.price]] EUR</div>
        <div class="col-12 col-md-6">
          <template is="dom-repeat" items="[[product.colors]]" as="color">
            <product-color color="[[color]]"></product-color>
          </template>
        </div>
        <template is="dom-if" if="[[product.isActive]]">
          <div class="col-12 col-md-6 description">[[ product.description ]]</div>
        </template>
      </div>
    `;
  }
  static get properties() {
    return {
      product: {
        type: Object,
        value: {}
      }
    };
  }

  selectProduct(event) {
    this.dispatchEvent(
      new CustomEvent(
        'product-selected',
        {
          detail: {
            product: this.product,
            originalEvent: event
          }
        }
      )
    );
  }

  __retrieveProductClass() {
    let classList = this.$.product.classList;
    classList.remove('is-active');
    if (this.product.isActive) {
      classList.add('is-active');
    }
    return classList.value;
  }
}

window.customElements.define('product-item', ProductItem);
