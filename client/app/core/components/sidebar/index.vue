<template lang="pug">
  nav.nav.flex-column.navbar-dark.bg-dark.text-muted
    .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:General" | i18n }}
    Actions(v-bind:items ="items")
    .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:Profile" | i18n }}
    a.nav-link(href="/logout", :title="_('sidebar:Logout')")
      i.btn.fa.fa-sign-out
      itemtext.d-none.d-md-inline {{ "sidebar:Logout" | i18n }}
</template>

<script>
  import Itemtext from "./itemtext"
  import Actions from "./actions"
  export default {

    components: {
      Itemtext,
      Actions
    },
    data () {
      return {
        title : 'select language',
      }
    },
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
a.nav-link{
  color: #aaa;
  i{
    font-size: 20px;
  }
}

</style>