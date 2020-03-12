import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from 'Store'
import * as mt from 'Store/mutation-types'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Mutations', () => {
    it('SET_MODAL mutation should return true', () => {
        store.commit(mt.SET_MODAL)
        expect(store.state.modalIsOpened).toBe(true)
    })
    it('SET_TEXT mutation should return the passed value', () => {
        store.commit(mt.SET_TEXT, 'Test')
        expect(store.state.valueText).toBe('Test')
    })
    it('SET_INPUT mutation should return true in all cases', () => {
        store.commit(mt.SET_INPUT, 'text')
        store.commit(mt.SET_INPUT, 'currency')
        store.commit(mt.SET_INPUT, 'compare')
        expect(store.state.isInputActive.text).toBe(true)
        expect(store.state.isInputActive.currency).toBe(true)
        expect(store.state.isInputActive.compare).toBe(true)
    })
    it('SET_CURRENCY mutation should return the passed value', () => {
        store.commit(mt.SET_CURRENCY, '123456789')
        expect(store.state.valueCurrency).toBe('123456789')
    })
    it('SET_COMPARE_MIN mutation should return the passed value', () => {
        store.commit(mt.SET_COMPARE_MIN, '123456789')
        expect(store.state.valueCompareMin).toBe('123456789')
    })
    it('SET_COMPARE_MAX mutation should return the passed value', () => {
        store.commit(mt.SET_COMPARE_MAX, '123456789')
        expect(store.state.valueCompareMax).toBe('123456789')
    })
    it('SET_NOTE mutation should return the passed value', () => {
        store.commit(mt.SET_NOTE, 'QWERTYUIOP')
        expect(store.state.valueNotes).toBe('QWERTYUIOP')
    })
})
