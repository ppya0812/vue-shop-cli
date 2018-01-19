<template>
	<div>
		<head-top :headInfo="headInfo"></head-top>
		<transition name="router-fade" mode="out-in">
			<router-view class="conatiner"></router-view>
		</transition>
		<foot></foot>
	</div>
</template>

<script>
import Foot from './components/footer/foot'
import HeadTop from './components/header/head'
import headInfo from './page'

export default {
  data () {
    return {
      headInfo: {
        title: '首页',
        back: false
      }
    }
  },
  components: {
    Foot,
    HeadTop
  },
  watch: {
    '$route': 'changeRoute'
  },
  methods: {
    changeRoute () {
      let path = this.$route.path.replace('/', '')
      path = path || 'home'
      this.headInfo = {
        title: headInfo[path].title,
        back: headInfo[path].back
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="sass?indentedSyntax">
	.conatiner 
		padding-top: 3.2rem
</style>
