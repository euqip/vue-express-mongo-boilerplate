<template lang="pug">
  nav.nav.flex-column.navbar-dark.bg-dark.text-muted
    Sidemenu(v-bind:items ="items")
</template>

<script>
//  import Itemtext from "./itemtext"
//  import Sidemenu from "./Sidemenu"
  import Itemtext from "../basecomps/itemtext"
  import Sidemenu from "../basecomps/menulist"
  export default {

    components: {
      Itemtext,
      Sidemenu
    },
    data () {
      return {
      }
    },
    // get items from parent component
    props: [
      "items"
    ]

  }

</script>

<style lang="scss">
.title{
  text-transform: uppercase;
  font-weight: bold;
  color: #00A8e8
}

</style>