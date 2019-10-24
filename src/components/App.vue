<template>
  <div>
    <BaseNavbar/>
    <BaseContent/>
  </div>
</template>

<script>
import BaseNavbar from "./BaseNavbar.vue"
import BaseContent from "./BaseContent.vue"

export default {
  name: "App",
  components: {
    BaseNavbar,
    BaseContent
  }
}
</script>
