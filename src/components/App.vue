<template>
  <div>
    <BaseNavbar/>
    <BaseContent/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseNavbar from "Components/BaseNavbar.vue"
import BaseContent from "Components/BaseContent.vue"
import BaseFooter from "Components/BaseFooter.vue"

export default {
  name: "App",
  components: {
    BaseNavbar,
    BaseContent,
    BaseFooter
  }
}
</script>

