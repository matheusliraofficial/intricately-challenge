import Vue from 'vue'
import Vuex from 'vuex'
import * as mt from 'Store/mutation-types'
import * as at from 'Store/action-types'

Vue.use(Vuex)

const state = {
    valueText: '',
    valueCurrency: '',
    valueCompareMin: '',
    valueCompareMax: '',
    valueNotes: '',
    modalIsOpened: false,
    isInputActive: {
        currency: false,
        compare: false
    },
    inputErrors: {
        text: '',
        currency: '',
        compare: ''
    }
}

const mutations = {
    [mt.SET_MODAL] (state) {
        state.modalIsOpened = !state.modalIsOpened
    },
    [mt.SET_TEXT] (state, text) {
        state.valueText = text
    },
    [mt.SET_INPUT] (state, status) {
        state.isInputActive = status
    },
    [mt.SET_CURRENCY] (state, currency) {
        state.valueCurrency = currency
    },
    [mt.SET_COMPARE_MIN] (state, min) {
        state.valueCompareMin = min
    },
    [mt.SET_COMPARE_MAX] (state, max) {
        state.valueCompareMax = max
    },
    [mt.SET_NOTE] (state, note) {
        state.valueNotes = note
    },
    [mt.SET_ERROR] (state, error) {
        state.inputErrors = error
    }
}

const actions = {
    [at.SET_MODAL] ({ commit }) {
        commit('SET_MODAL')
    },
    [at.SET_TEXT] ({ commit }, text) {
        commit('SET_TEXT', text)
    },
    [at.SET_INPUT] ({ commit }, status) {
        commit('SET_INPUT', status)
    },
    [at.SET_CURRENCY] ({ commit }, currency) {
        commit('SET_CURRENCY', currency)
    },
    [at.SET_COMPARE_MIN] ({ commit }, min) {
        commit('SET_COMPARE_MIN', min)
    },
    [at.SET_COMPARE_MAX] ({ commit }, max) {
        commit('SET_COMPARE_MAX', max)
    },
    [at.SET_NOTE] ({ commit }, note) {
        commit('SET_NOTE', note)
    },
    [at.SET_ERROR] ({ commit }, error) {
        commit('SET_ERROR', error)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
