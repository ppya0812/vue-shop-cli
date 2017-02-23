<template>
	<div>
		<head-top></head-top>
		<transition name="router-fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<foot></foot>
	</div>
</template>

<script>
import Foot from './components/footer/foot';
import HeadTop from './components/header/head';
export default {
    components: {
        Foot,
		HeadTop
    }
}
</script>

<style lang="scss">
</style>
