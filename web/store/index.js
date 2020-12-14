import { createStore } from 'vuex'
import { getProfileApi } from '@/api/user'

export default createStore({
  state: {
    userinfo: null
  },
  mutations: {
    SET_USERINFO(state, payload) {
      state.userinfo = payload
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        const res = await getProfileApi()
        if (res.code === 0) {
          commit('SET_USERINFO', res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
