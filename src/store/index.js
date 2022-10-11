import Vuex from 'vuex'
// -----------------------------------------------
import axios from 'axios'
import { API_URL } from '../utils/api.js'
// -----------------------------------------------
export default new Vuex.Store({
    state: {
        data: [],
        loading: true
    },
    getters: {
        getData(state) {
            return state.data
        },
        getLoading(state) {
            return state.loading
        }
    },
    mutations: {
        setData(state, payload) {
            state.data = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        }
    },
    actions: {
        fetchData(context) {

            context.commit('setLoading', true)

            axios.get(`${API_URL}data`)
                .then(response => context.commit('setData', response.data))
                .finally(() => {
                    context.commit('setLoading', false)
                })
        },
        addData(context, data) {
            axios.post(`${API_URL}data`, data)
                .then(() => context.dispatch('fetchData'))
        },
        validatingForm(context) {
            context.commit('setLoading', true)
        }
    },
    modules: {

    }
})