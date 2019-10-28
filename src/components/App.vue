<template>
  <div>
    <BaseNavbar/>
    <BaseContent/>
    <BaseFooter/>
    <DataModal v-if="modalIsOpened"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseNavbar from "Components/BaseNavbar.vue"
import BaseContent from "Components/BaseContent.vue"
import BaseFooter from "Components/BaseFooter.vue"
import DataModal from "Components/DataModal.vue";

export default {
  name: "App",
  computed: {
    ...mapState([
            'modalIsOpened'
    ])
  },
  components: {
    BaseNavbar,
    BaseContent,
    BaseFooter,
    DataModal
  }
}
</script>

