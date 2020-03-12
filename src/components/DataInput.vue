<template>
    <div class="form__container column__start--center">
        <label
            :for="inputName"
            :class="['form__label', labelClass, { 'form__label--error': getErrors(type) }]"
        >
            {{ label }}
        </label>
        <div
            :class="['form__box', { 'form__box--twoColumns': type === 'compare' }]"
            v-if="type === 'text' || type === 'currency' || type === 'compare'"
        >
            <input
                type="text"
                :placeholder="placeholder"
                :name="inputName"
                :id="`${inputName}-0`"
                :value="getValue()"
                :class="['form__boxInput', inputClass, { 'form__boxInput--error': getErrors(type)} ]"
                @input="updateInput"
                @focus="setInput(type)"
                @blur="validateInput"
            >
            <input
                v-if="type === 'compare'"
                :placeholder="placeholder"
                :name="inputName"
                :id="`${inputName}-1`"
                :class="['form__boxInput', inputClass, { 'form__boxInput--error': getErrors('compare')} ]"
                type="text"
                :value="getCompareMax"
                @input="updateCompareMax"
                @focus="setInput('compare')"
                @blur="validateInput"
            />
        </div>
        <textarea
            v-if="type === 'textarea' || type === 'modal'"
            :name="inputName"
            :id="inputName"
            :value="getNote"
            rows="10"
            :placeholder="placeholder"
            class="form__textarea"
            @click="type === 'textarea' ? setModal() : null"
            @input="updateInput"
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
            'valueText',
            'valueCurrency',
            'valueCompareMin',
            'valueCompareMax',
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
        updateInput(e) {
            switch(this.type) {
                case 'text':
                    this.setText(e.target.value)
                    break
                case 'currency':
                    this.setCurrency(this.toNormal(e.target.value))
                    break
                case 'compare':
                    this.setCompareMin(this.toNormal(e.target.value))
                    break
                case 'modal':
                case 'textarea':
                    this.setNote(e.target.value)
                    break
            }
        },
        updateCompareMax(e) {
            this.setCompareMax(this.toNormal(e.target.value))
        },
        getValue() {
          switch(this.type) {
              case 'text':
                  return this.getText
              case 'currency':
                  return this.getCurrency
              case 'compare':
                  return this.getCompareMin
          }
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
                        || this.valueCompareMin === ''
                        || this.valueCompareMax === ''
                        ? this.setError({type: this.type, value: this.error})
                        : this.setError({type: this.type, value: ''})
                    break
            }
            this.setInput(this.type)
        }
    }
}
</script>
