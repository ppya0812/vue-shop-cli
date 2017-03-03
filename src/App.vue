<template>
	<div>
		<head-top></head-top>
		<transition name="router-fade" mode="out-in">
			<router-view class="conatiner"></router-view>
		</transition>
		<foot></foot>
	</div>
</template>

<script>
import Foot from './components/footer/foot'
import HeadTop from './components/header/head'

export default {
    components: {
        Foot,
        HeadTop
    },
    mounted() {
        document.cookie = 'cuid=2AD442BA33F809FD94289E05FCEBACC4|36515060005553; expires=Thu, 01 Jan 2970 00:00:00 GMT';
    }
}
</script>

<style lang="sass?indentedSyntax">
	.conatiner
		padding-top: 3.2rem
</style>
