<template>
    <div class="category">
        <div
          v-for="item in categoryList"
          :class="{
          'category-item': true,
          'active': item.cat_id === '1'}"
          :key="item.cat_id">
          {{item.name}}
        </div>
    </div>
</template>

<script>
  export default {
      props: {
          categoryList: Array
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
    @import "../style/base.sass"
    .category
      width: 5rem
      height: 100%
      overflow-y: scroll
      -webkit-overflow-scrolling: touch
      padding: 0 .5rem 0 1.5rem
      border-right: 1px solid #f5f5f5
    .category-item
      padding: 1rem 0
    .active
      color: $bg-default
    
</style>
