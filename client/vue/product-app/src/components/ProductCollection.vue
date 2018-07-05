<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <button v-on:click="reload($event)">Reload</button>
      </div>
    </div>
    <div class="row product"
         v-for="product in products"
         v-bind:class="{'is-active': product === activeProduct}"
         v-on:click="selectProduct(product)">
      <div class="col-6 col-md-3 title">Title: {{ product.title }}</div>
      <div class="col-6 col-md-3 price">Price: {{ product.price }} EUR</div>
      <div class="col-12 col-md-6">
        <ProductColor v-for="color in product.colors"
                      v-bind:color="color">
        </ProductColor>
      </div>
      <div class="col-12 col-md-6 description" v-if="product === activeProduct">{{ product.description }}</div>
    </div>
  </div>
</template>

<script>
import ProductColor from './ProductColor'
export default {
  name: 'ProductCollection',
  components: {ProductColor},
  props: {
    productsUrl: String
  },
  data() {
    return {
      products: [],
      activeProduct: null
    }
  },
  methods: {
    fetch() {
      this.$http.get(this.productsUrl).then((response) => {
        this.$data.products = response.body || [];
        if (this.$data.products.length > 0) {
          this.$data.activeProduct = this.$data.products[0];
        } else {
          this.$data.activeProduct = null;
        }
      });
    },
    reload(event) {
      this.fetch();
    },
    selectProduct(product) {
      if (this.$data.activeProduct !== product) {
        this.activeProduct = product;
      }
    }
  },
  mounted() {
    this.fetch();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .product { cursor: pointer }
  .product .description { color: #999; margin-bottom: 1em; }
  .is-active.product { cursor: inherit }
</style>
