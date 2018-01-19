<template>
    <div class="home">
        <div class="info">
            我是{{userInfo.name}}， 今年{{count}}，哈哈哈~<button v-tap="{callback: add}">点我呀</button>
        </div>
        <category :categoryList="categoryList"></category>
        <div class="menu">
            <Nothing></Nothing>
        </div>
    </div>
</template>

<script>
// import { json2url } from '../../utils/mUtils'
// import fetch from '../../utils/fetch';
import Nothing from '../../components/Nothing'
import Category from '../../components/Category'

export default {
    data() {
        return {
        }
    },
    components: {
        Nothing,
        Category
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
        },
        categoryList () {
            return this.$store.state.categoryList
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
        // this.$store.getters.filterList;
        this.fetch()
        .get('/h5ui/shoplist', {}).then(res => {
            console.log('res', res);
        })
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
    .home
        line-height: 2rem
        position: relative
        display: flex
    .info
        position: absolute
        right: 1rem
        top: 4rem
        button
            background: #007AFF
            color: #fff
    .menu
        flex: 1
</style>
