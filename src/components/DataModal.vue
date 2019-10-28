<template>
    <div class="modal row__center--center">
        <div class="modal__content row__center--center">
            <form class="form column__center--center">
                <DataInput placeholder="e.g. Good Tech Company" type="modal" inputName="additional-notes" label="ADDITIONAL NOTES" labelClass="modal__contentTitle"/>
                <div class="modal__contentSubmit row__center--end">
                    <button @click="setModal" class="form__button">Save</button>
                </div>
                <img src="../images/close.png" alt="Close" title="Close" class="modal__contentClose" @click="setModal"/>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { SET_MODAL } from "Store/action-types";
import DataInput from "Components/DataInput.vue";

export default {
    name: "DataModal",
    methods: {
      ...mapActions({
        setModal: SET_MODAL
      })
    },
    components: {
        DataInput
    }
}
</script>

<style lang="scss">
.modal {
    position: fixed;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    &__content {
        background-color: white;
        position: relative;
        min-width: 40vw;
        padding:  get-padding(p2) get-padding(p6) get-padding(p6);
        border-radius: 4px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
        &Title{
            width: 100%;
            margin-bottom: get-margin(m6) !important;
        }
        &Submit {
            width: 100%;
            margin-top: get-margin(m6);
        }
        &Close {
            position: absolute;
            top: get-margin(m6);
            right: get-margin(m6);
            cursor: pointer
        }
    }
}
</style>
