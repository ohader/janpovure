import Vue from 'vue'
import ProductApp from './ProductApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ProductApp)
}).$mount('#app')
