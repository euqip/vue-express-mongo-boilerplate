<template lang="pug">
  div
    div(v-for="item in items" :key="item.id")
      div(v-if="item.itype==='route'")
        router-link.nav-link(tag="div", :to="item.uri")
          i.btn.px-1.fa(:class="item.icon" )
          itemtext.d-none.d-md-inline {{ item.txt |i18n}}

      .Menu.title.pl-3.d-sm-none.d-lg-inline(v-else-if = "item.itype==='title'")
        itemtext.d-none.d-md-inline {{ item.txt |i18n}}

      .divider(v-else-if = "item.itype==='devider'")

      div(v-else-if="item.itype==='link'")
        .nav-link
          a.mylink(:href="item.uri")
            i.btn.px-1.fa(:class="item.icon" )
            itemtext.d-none.d-md-inline {{ item.txt |i18n}}

      div(v-else)
        .nav-link
          a.mylink(:href="item.uri")
            i.btn.px-1.fa(:class="item.icon" )
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

<style lang="scss">
  .mylink{
    color: #aaa;
    i{
      font-size: 20px;
    }
}
</style>