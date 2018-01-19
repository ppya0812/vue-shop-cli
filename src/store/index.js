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
    categoryList: [
        {cat_id: '1', name: 'ppya分类'},
        {cat_id: '2', name: '分类1'},
        {cat_id: '3', name: '水果'},
        {cat_id: '4', name: '蛋糕'},
        {cat_id: '5', name: '食品'},
        {cat_id: '6', name: '撸猫'},
        {cat_id: '7', name: '狗狗'},
        {cat_id: '8', name: '分类1'},
        {cat_id: '9', name: '水果'},
        {cat_id: '10', name: '蛋糕'},
        {cat_id: '11', name: '食品'},
        {cat_id: '12', name: '撸猫'},
        {cat_id: '13', name: '狗狗'}
    ],
    count: 18
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
