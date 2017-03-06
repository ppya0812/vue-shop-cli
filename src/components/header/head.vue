<template>
    <div class="head-top">
        <!-- <slot name="search"></slot> -->
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" v-if="headInfo.back" v-tap="{callback: goBack}" class="head-back">
            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgba(255,255,255,1);stroke-width:2" />
        </svg>
        <div class="head-title">
            {{headInfo.title}}
        </div>
    </div>
</template>

<script>
  export default {
      props: {
          headInfo: Object
      },
      methods: {
          goBack() {
              this.$router.go(-1)
          }
      },
      mounted() {
          // console.log(this.$route.path)
      }
  }
</script>

<style lang="sass?indentedSyntax" scoped>
    @import "../../style/base.sass"
    .head-top
        width: 100%
        height: 3.2rem
        line-height: 3.2rem
        position: fixed
        left: 0
        top: 0
        text-align: center
        font-size: 2rem
        background: $bg-default
        color: #fff;
    .head-back
        width: 2em
        height: 100%
        position: absolute
        left: 0
        top: .8rem
</style>
