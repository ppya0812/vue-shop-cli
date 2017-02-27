// 更改vuex的store中的状态
import { GET_USEINFO, INCREMENT } from './mutation-type'


export default {
    [GET_USEINFO](state, payload) {
        state.userInfo = {...state.userInfo, ...payload}
    },
    [INCREMENT](state, payload) {
        // change state
        state.count += payload.amount
    }
}
