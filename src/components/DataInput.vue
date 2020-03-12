<template>
    <div class="form__container column__start--center">
        <label
            :for="inputName"
            class="form__label"
            :class="`${labelClass} ${getErrors(type) ? 'form__label--error' : ''}`
        ">
            {{ label }}
        </label>
        <div class="form__box" :class="type === 'compare' ? 'form__box--twoColumns' : ''">
            <input
                v-if="type === 'text'"
                type="text"
                :placeholder="placeholder"
                :name="inputName"
                :id="inputName"
                :value="getText"
                class="form__boxInput"
                :class="`${inputClass} ${getErrors('text') ? 'form__boxInput--error' : ''}`"
                @input="updateText"
                @focus="setInput('text')"
                @blur="validateInput"
            >
            <input
                v-if="type === 'currency'"
                type="text"
                :placeholder="placeholder"
                :name="inputName"
                :id="inputName"
                :value="getCurrency"
                class="form__boxInput"
                :class="`${inputClass} ${getErrors('currency') ? 'form__boxInput--error' : ''}`"
                @input="updateCurrency"
                @focus="setInput('currency')"
                @blur="validateInput"
            >
            <input
                v-if="type === 'compare'"
                type="text"
                :placeholder="placeholder"
                :name="inputName"
                :id="`${inputName}-0`"
                class="form__boxInput"
                :class="`${inputClass} ${getErrors('compare') ? 'form__boxInput--error' : ''}`"
                :value="getCompareMin"
                @input="updateCompareMin"
                @focus="setInput('compare')"
                @blur="validateInput"
            >
            <input
                v-if="type === 'compare'"
                class="form__boxInput"
                :name="inputName"
                :id="`${inputName}-1`"
                :class="`${inputClass} ${getErrors('compare') ? 'form__boxInput--error' : ''}`"
                type="text"
                :value="getCompareMax"
                @input="updateCompareMax"
                @focus="setInput('compare')"
                @blur="validateInput"
                :placeholder="placeholder"
            />
        </div>
        <textarea
            v-if="type === 'textarea'"
            :name="inputName"
            :id="inputName"
            :value="getNote"
            rows="10"
            :placeholder="placeholder"
            class="form__textarea"
            @click="setModal"
            @input="updateNote"
        >
        </textarea>
        <textarea
            v-if="type === 'modal'"
            :name="inputName"
            :id="inputName"
            :value="getNote"
            rows="10"
            :placeholder="placeholder"
            class="form__textarea"
            @input="updateNote"
        >
        </textarea>
        <p v-if="getErrors(type)" class="form__error">{{ getErrors(type) }}</p>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import {
    SET_ERROR,
    SET_MODAL,
    SET_NOTE,
    SET_INPUT,
    SET_TEXT,
    SET_CURRENCY,
    SET_COMPARE_MIN,
    SET_COMPARE_MAX
} from 'Store/action-types'
import {
    GET_COMPARE_MAX,
    GET_COMPARE_MIN,
    GET_CURRENCY,
    GET_ERRORS,
    GET_INPUT,
    GET_NOTE,
    GET_TEXT
} from "Store/getter-types";

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
        ...mapGetters({
            getText: GET_TEXT,
            getInput: GET_INPUT,
            getNote: GET_NOTE,
            getErrors: GET_ERRORS,
            getCurrency: GET_CURRENCY,
            getCompareMin: GET_COMPARE_MIN,
            getCompareMax: GET_COMPARE_MAX
        }),
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
        updateText(e) {
            this.setText(e.target.value)
        },
        updateNote(e) {
            this.setNote(e.target.value)
        },
        updateCurrency(e) {
            this.setCurrency(this.toNormal(e.target.value))
        },
        updateCompareMin(e) {
            this.setCompareMin(this.toNormal(e.target.value))
        },
        updateCompareMax(e) {
            this.setCompareMax(this.toNormal(e.target.value))
        },
        toNormal(value) {
            let newValue = value.replace(/[^\d\.]/g, "")
            return isNaN(newValue)
                ? 0
                : newValue
        },
        validateInput() {
            switch (this.type) {
                case 'text':
                    this.valueText === ''
                        ? this.setError({type: this.type, value: this.error})
                        : this.setError({type: this.type, value: ''})
                    break
                case 'currency':
                    this.valueCurrency === ''
                        ? this.setError({type: this.type, value: this.error})
                        : this.setError({type: this.type, value: ''})
                    break
                case 'compare':
                    parseInt(this.valueCompareMin) > parseInt(this.valueCompareMax)
                        ? this.setError({type: this.type, value: this.error})
                        : this.setError({type: this.type, value: ''})
                    break
            }
            this.setInput(this.type)
        }
    }
}
</script>
