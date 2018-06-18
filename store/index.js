import Vuex from 'vuex'
import sessionStorage from 'sessionstorage'

const a = sessionStorage.getItem('member') ? true : false
const isMember = a

const store = () => new Vuex.Store({
    state: {
        isMember: false,
        member: null
    },
    mutations: {
        login (state,data) {
            state.isMember = true
            state.member = data
            sessionStorage.setItem('member',JSON.stringify(data))
        },
        logout (state) {
            state.isMember = false
            state.member = {}
            sessionStorage.clear()
        }
    }
})

export default store