<template>
  <div class="nothing">
      <img src="../assets/error.svg" v-if="showPic" />
      <div class="nothing-text">{{message}}</div>
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'nothing',
  props: {
    message: {
      type: String,
      default: '暂无相关数据'
    },
    showPic: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="sass?indentedSyntax">
@import "../style/base.sass"
.nothing
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  img
    width: 10rem
  &-text
    margin-top: 1.5rem
    color: #999
    font-size: 1.2rem
    text-align: center
</style>
