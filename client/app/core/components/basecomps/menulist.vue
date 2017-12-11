<template lang="pug">
  div
    div(v-for="item in items" :key="item.id")
      // render the different item types route, devider, title, or link, if user role is allowed
      div(v-if="item.itype==='route'")
        router-link.nav-link(v-if = "enabled(item.role)" tag="div", :to="item.uri")
          i.btn.px-1.fa(:class="item.icon" )
          itemtext.d-none.d-md-inline {{ item.txt |i18n}}

      .Menu.title.pl-3.d-sm-none.d-lg-inline(v-else-if = "item.itype==='title'")
        itemtext.d-none.d-md-inline(v-if = "enabled(item.role)") {{ item.txt |i18n}}

      .divider(v-else-if = "item.itype==='devider'")

      div(v-else-if="item.itype==='link'")
        .nav-link(v-if = "enabled(item.role)")
          a.mylink(:href="item.uri")
            i.btn.px-1.fa(:class="item.icon" )
            itemtext.d-none.d-md-inline {{ item.txt |i18n}}

      div(v-else-if="item.itype==='test'")
        .nav-link(v-if = "enabled(item.role)")
          p(v-if = "enabled(item.role)") Enabled


      div(v-else)
        .nav-link(v-if = "enabled(item.role)")
          a.mylink(:href="item.uri")
            i.btn.px-1.fa(:class="item.icon" )
            itemtext.d-none.d-md-inline {{ item.txt |i18n}}


</template>

<script>
  import Vue from "vue";
  import {indexOf} from "lodash"
  import Itemtext from "./itemtext"
 	import { mapActions, mapGetters } from "vuex"

  export default {
    components: {
      Itemtext
    },
    computed: {
      ...mapGetters("profile", [
        "profile"
      ]),
      ...mapGetters("session", [
        "me"
      ])
    },

    props: {
      "items" :{
        type: Array
      }
    },
    methods:{
      ...mapActions("profile", [
        "getProfile",
        "setLang"
      ]),

      enabled: function(role) {
        if (this.me === undefined  || this.me === null )
          return false
        console.log (this.me.roles)
        if (_.indexOf(this.me.roles, role ) >= 0){
          return true
        } else {
          return false
        }
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