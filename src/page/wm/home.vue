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
// import { json2url } from '../../utils/mUtils'
// import fetch from '../../utils/fetch';

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
        // this.$store.getters.filterList;
        this.fetch()
        .get('/h5ui/shoplist', {
            // lat: 4844695.33793,
            // lng: 1.2948232959996E7,
            // city_id: 131,
            // shoplist_only: 0,
            // taste: 10,
            // page_fro: 'new_fresh'
        }).then(res => {
            console.log('res', res);
        })
    }
}
</script>

<style lang="sass?indentedSyntax" scoped>
    .home
        line-height: 2rem
</style>
