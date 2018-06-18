import Vuex from 'vuex'
import mutation from '~/store/mutation'

const store = () => new Vuex.Store({
    state: {
      isMember: false,
      member: null
    },
    mutations: {
        login (state,data) {
            state.isMember = true
            state.member = data
        },
        logout (state) {
            state.isMember = false
            state.member = null
        }
    }
})

export default store