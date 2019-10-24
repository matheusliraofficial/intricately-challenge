<template>
  <div>
    <BaseNavbar/>
    <BaseContent/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseNavbar from "./BaseNavbar.vue"
import BaseContent from "./BaseContent.vue"
import BaseFooter from "./BaseFooter.vue"

export default {
  name: "App",
  components: {
    BaseNavbar,
    BaseContent,
    BaseFooter
  }
}
</script>
