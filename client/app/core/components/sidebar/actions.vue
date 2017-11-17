<template lang="pug">
  div
    div(v-for="item in items" :key="item.id")
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
      "items" :{
        type: Array
      }
    }
  }


</script>