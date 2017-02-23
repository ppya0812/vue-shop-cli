<template>
    <div class="head-top">
        <slot name="logo"></slot>
        <slot name="search"></slot>
        <div class="head-goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgba(0,0,0,.5);stroke-width:2">
            </svg>
        </div>
    </div>
</template>

<script>

    export default {
    	data(){
            return{
                goBack: true
            };
        }
    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin.scss';
    .head-top {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        @include wh(100%, 2rem);
    }
    .head-goback {
        @include wh(.96rem, 1.44rem);
        @include ct;
    }
</style>
