<template>
  <ProductCollection products-url="http://127.0.0.1:8090/random-products.json.php"/>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  import ProductColor from './components/ProductColor';
  import ProductCollection from './components/ProductCollection.vue'

  Vue.use(VueResource);

  export default {
    name: 'ProductApp',
    components: {
      ProductCollection,
      ProductColor
    }
  }
</script>
