// Action 提交的是 mutation

import { GET_USEINFO, INCREMENT } from './mutation-type'

export default {
    getUserInfo({ commit, state }, data) {
        commit(GET_USEINFO, data)
    },
    increment({ commit, state }, data) {
        commit(INCREMENT, data)
    }
}
