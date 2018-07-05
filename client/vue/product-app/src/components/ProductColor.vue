<template>
  <span v-bind:style="{ background: '#' + color.colorCode }"
        v-bind:title="color.title">
  </span>
</template>

<script>
export default {
  name: 'ProductColor',
  props: {
    color: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    width: 32px;
    height: 32px;
    display: inline-block;
  }
</style>
