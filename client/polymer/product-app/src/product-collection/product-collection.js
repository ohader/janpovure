import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './product-item.js';
import './product-color.js';

/**
 * @customElement
 * @polymer
 */
class ProductCollection extends PolymerElement {
  static get template() {
    return html`
      <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">

      <style>
        :host {
          display: block;
        }
      </style>

      <iron-ajax id="ajax"
                 debounce-duration="200"
                 handle-as="json"
                 url="[[productsUrl]]"
                 method="GET"
                 content-type="application/json"
                 on-response="fetchHandler">
      </iron-ajax>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <button on-click="reload">Reload</button>
          </div>
        </div>
        <template is="dom-repeat" items="[[__products]]" as="product">
          <product-item product="{{product}}"
                        on-product-selected="selectProduct">
          </product-item>
        </template>
      </div>
    `;
  }
  static get properties() {
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

  ready() {
    super.ready();
    this.fetch();
  }

  fetch() {
    this.$.ajax.generateRequest();
  }

  fetchHandler(event, request) {
    let products = (event.detail.response || []).map((product) => {
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

  reload(event) {
    this.fetch();
  }

  selectProduct(event) {
    let activeProduct = event.detail.product;
    this.set('__activeProduct', activeProduct);

    // for whatever reason in Polymer v3.0.2 handing the `isActive` state
    // is not possible with computed properties, but has to be explicitly
    // for array items being processed with the dom-repeat helper
    this.__products.forEach((product, index) => {
      let isActive = product === activeProduct;
      if (isActive !== product.isActive) {
        this.set(
          '__products.' + index + '.isActive',
          isActive
        );
      }
    });
  }
}

window.customElements.define('product-collection', ProductCollection);
