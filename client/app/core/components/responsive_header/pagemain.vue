<template lang="pug">

  main.col-sm-9.offset-sm-3.col-md-10.offset-md-2.pt-3(role= "main")
    Maindash
    Maintable

</template>


<script>
  import Maindash from "./maindash"
  import Maintable from "./maintable"

  export default {
    components: {
      Maindash,
      Maintable
    }
  }
</script>