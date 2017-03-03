import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo: {
        name: 'ppya'
    },
    todoList: [
        { id: 1, text: '1...haha', done: true },
        { id: 2, text: '2...lala', done: true },
        { id: 3, text: '3...xixi', done: false }
    ],
    count: 1
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
