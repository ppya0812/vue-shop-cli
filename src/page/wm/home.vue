<template>
    <div class="home">
        {{count}} <button v-tap="{callback: add}">点我呀加加加</button>
        <div class="">
            我是{{userInfo.name}}， 今年{{userInfo.age}}，哈哈哈啊~
        </div>

        <div class="" v-for="v in list">
            {{v.text}}
        </div>
        <img :src="banner" alt="">
    </div>
</template>

<script>
import { json2url } from '../../utils/mUtils'
export default {
    data() {
        return {
            banner: ''
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
        userInfo() {
            return this.$store.state.userInfo
        },
        list() {
            return this.$store.getters.filterList
        }
    },
    methods: {
        add() {
            this.$store.dispatch({
                type: 'increment',
                amount: 10
            })
        }
    },
    mounted() {
        const store = this.$store;
        store.dispatch({
            type: 'getUserInfo',
            age: 18
        })
        this.$store.getters.filterList;
        this.$http.get('http://c1.ifengimg.com/mappa/2016/11/23/71d3386025c4adf30bcc07948a5632df.jpg').then(res => {
            this.banner = res.url;
        })
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
    .home
        line-height: 2rem
</style>
