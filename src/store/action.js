// Action 提交的是 mutation

import { GET_USEINFO, INCREMENT } from './mutation-type'

export default {
	// getData({ commit, state }) {
	// 	// cityGuess().then(res => {
	// 	// 	commit(GET_DATA, {data: res})
	// 	// })
	// },
	getUserInfo({ commit, state }, data) {
		commit(GET_USEINFO, data)
	},
	increment({ commit, state }, data) {
		commit(INCREMENT, data)
	}
}
