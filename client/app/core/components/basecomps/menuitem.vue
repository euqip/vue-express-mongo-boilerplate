<template lang="pug">
  router-link.nav-link(href="#", tag="li", :title="item.txt", :to="item.uri")
    i.btn.fa(:class="item.icon" )
    itemtext.d-none.d-md-inline {{ item.txt |i18n}}
</template>

<script>
  import Vue from "vue";
  import Itemtext from "./itemtext"
  export default {
    components: {
      Itemtext
    },

    props: {
      "item" :{
        type: Array
      }
    }
  }


</script>