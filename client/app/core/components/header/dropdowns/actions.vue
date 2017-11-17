<template lang="pug">
div.dropdown
  a.nav-link.dropdown-toggle(href="", id="ActionsDropdownMenu", data-toggle="dropdown" aria-haspopup="true" aria-expanded="false") {{ "app:Actions" | i18n }}
  .dropdown-menu(aria-labelledby="ActionsDropdownMenu", v-for="item in items" :key="item.id")
    div(v-for="item in items" :key="item.id")
      router-link.nav-link(href="#", tag="li", :title="item.txt", :to="item.uri")
        i.btn.fa(:class="item.icon" )
        itemtext {{ item.txt |i18n}}

</template>

<script>
  import Vue from "vue";
  import Itemtext from "../../sidebar/itemtext"
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