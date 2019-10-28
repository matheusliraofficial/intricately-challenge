<template>
    <div class="form__container column__start--center">
        <label :for="inputName" class="form__label"  :class="`${labelClass} ${errors[type] ? 'form__label--error' : ''}`">{{ label }}</label>
        <div class="form__box" :class="type === 'compare' ? 'form__box--twoColumns' : ''">
            <input
                    v-if="type === 'text'"
                    type="text"
                    :placeholder="placeholder"
                    :name="inputName"
                    class="form__boxInput"
                    :class="`${inputClass} ${errors[type] ? 'form__boxInput--error' : ''}`"
                    v-model="text"
                    @focus="input[type] = true"
                    @blur="validateInput"
            >
            <input
                    v-if="type === 'currency'"
                    type="text"
                    :placeholder="placeholder"
                    :name="inputName"
                    class="form__boxInput"
                    :class="`${inputClass} ${errors[type] ? 'form__boxInput--error' : ''}`"
                    v-model="currency"
                    @focus="input[type] = true"
                    @blur="validateInput"
            >
            <input
                    v-if="type === 'compare'"
                    type="text"
                    :placeholder="placeholder"
                    :name="inputName"
                    class="form__boxInput"
                    :class="`${inputClass} ${errors[type] ? 'form__boxInput--error' : ''}`"
                    v-model="compareMin"
                    @focus="input[type] = true"
                    @blur="validateInput"
            >
            <input
                v-if="type === 'compare'"
                class="form__boxInput"
                :name="inputName"
                :class="`${inputClass} ${errors[type] ? 'form__boxInput--error' : ''}`"
                type="text"
                v-model="compareMax"
                @focus="input[type] = true"
                @blur="validateInput"
                :placeholder="placeholder"
            />
        </div>
        <textarea
                v-if="type === 'textarea'"
                :name="inputName"
                rows="10"
                :placeholder="placeholder"
                class="form__textarea"
                @click="setModal"
                v-model="note">
        </textarea>
        <textarea
                v-if="type === 'modal'"
                :name="inputName"
                rows="10"
                :placeholder="placeholder"
                class="form__textarea"
                v-model="note">
        </textarea>
        <p v-if="errors[type]" class="form__error">{{ errors[type] }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { SET_ERROR, SET_MODAL, SET_NOTE, SET_INPUT, SET_TEXT, SET_CURRENCY, SET_COMPARE_MIN, SET_COMPARE_MAX } from 'Store/action-types'

export default {
    name: "DataInput",
    props: {
        label: {
            type: String,
            required: true
        },
        inputName: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        labelClass: String,
        inputClass: String,
        error: String,
        placeholder: String,
    },
    computed: {
        ...mapState([
            'inputErrors',
            'note',
            'valueText',
            'valueCurrency',
            'valueCompareMin',
            'valueCompareMax',
            'valueNotes',
            'isInputActive'
        ]),
        text: {
            get () { return this.valueText },
            set (text) { this.setText(text) }
        },
        currency: {
            get () { return this.isInputActive[this.type] ? this.valueCurrency.toString() : this.toCurrency(this.valueCurrency) },
            set (currency) { this.setCurrency(this.toNormal(currency)) }
        },
        compareMin: {
            get () { return this.isInputActive[this.type] ? this.valueCompareMin.toString() : this.toCurrency(this.valueCompareMin) },
            set (valueMin) { this.setCompareMin(this.toNormal(valueMin)) }
        },
        compareMax: {
            get () { return this.isInputActive[this.type] ? this.valueCompareMax.toString() : this.toCurrency(this.valueCompareMax) },
            set (valueMax) { this.setCompareMax(this.toNormal(valueMax)) }
        },
        note: {
            get () { return this.valueNotes },
            set (note) { this.setNote(note) }
        },
        errors: {
            get () { return this.inputErrors },
            set (error) { this.setError(error) }
        },
        input: {
            get () { return this.isInputActive },
            set (status) { this.setInput(status) }
        }
    },
    methods: {
        ...mapActions({
            setError: SET_ERROR,
            setText: SET_TEXT,
            setCurrency: SET_CURRENCY,
            setCompareMin: SET_COMPARE_MIN,
            setCompareMax: SET_COMPARE_MAX,
            setModal: SET_MODAL,
            setInput: SET_INPUT,
            setNote: SET_NOTE
        }),
        toCurrency(value) {
            return value === '' ? '' : `$ ${parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}`
        },
        toNormal(value) {
            let newValue = value.replace(/[^\d\.]/g, "")
            return isNaN(newValue) ? 0 : newValue
        },
        validateInput() {
            this.input[this.type] = ''
            switch (this.type) {
                case 'text':
                    this.valueText === '' ? this.errors[this.type] = this.error : this.errors[this.type] = ''
                    break
                case 'currency':
                    this.valueCurrency === '' ? this.errors[this.type] = this.error : this.errors[this.type] = ''
                    break
                case 'compare':
                    this.valueCompareMin > this.valueCompareMax ? this.errors[this.type] = this.error : this.errors[this.type] = ''
                    break
            }
        }
    }
}
</script>
