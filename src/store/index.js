import Vue from 'vue'
import Vuex from 'vuex'
import * as mt from 'Store/mutation-types'
import * as at from 'Store/action-types'
import * as gt from 'Store/getter-types'

Vue.use(Vuex)

const toCurrency = value => value === ''
    ? ''
    : `$ ${parseFloat(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}`

const state = {
    valueText: '',
    valueCurrency: '',
    valueCompareMin: '',
    valueCompareMax: '',
    valueNotes: '',
    modalIsOpened: false,
    isInputActive: {
        text: false,
        currency: false,
        compare: false
    },
    inputErrors: {
        text: '',
        currency: '',
        compare: ''
    }
}

const getters = {
    [gt.GET_TEXT] (state) {
        return state.valueText
    },
    [gt.GET_CURRENCY] (state) {
        return state.isInputActive.currency
            ? state.valueCurrency.toString()
            : toCurrency(state.valueCurrency)
    },
    [gt.GET_COMPARE_MIN] (state) {
        return state.isInputActive.compare
            ? state.valueCompareMin.toString()
            : toCurrency(state.valueCompareMin)
    },
    [gt.GET_COMPARE_MAX] (state) {
        return state.isInputActive.compare
            ? state.valueCompareMax.toString()
            : toCurrency(state.valueCompareMax)
    },
    [gt.GET_INPUT] (state) {
        return state.isInputActive
    },
    [gt.GET_NOTE] (state) {
        return state.valueNotes
    },
    [gt.GET_ERRORS] (state) {
        return type => state.inputErrors[type]
    }
}

const mutations = {
    [mt.SET_MODAL] (state) {
        state.modalIsOpened = !state.modalIsOpened
    },
    [mt.SET_TEXT] (state, text) {
        state.valueText = text
    },
    [mt.SET_INPUT] (state, type) {
        state.isInputActive[type] = !state.isInputActive[type]
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
    [mt.SET_ERROR] (state, {type, value}) {
        state.inputErrors[type] = value
    }
}

const actions = {
    [at.SET_MODAL] ({ commit }) {
        commit('SET_MODAL')
    },
    [at.SET_TEXT] ({ commit }, text) {
        commit('SET_TEXT', text)
    },
    [at.SET_INPUT] ({ commit }, update) {
        commit('SET_INPUT', update)
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
    [at.SET_ERROR] ({ commit }, update) {
        commit('SET_ERROR', update)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
