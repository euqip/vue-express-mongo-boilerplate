<template lang="pug">
  .row.fixed-top.godown
    ul.nav.flex-column
      .title {{ "sidebar:General" | i18n }}
      li.nav-item
        a.nav-link(href="#")
          i.fa.fa-home
          span {{ "sidebar:Home" | i18n }}
      li.nav-item
        a.nav-link(href="#")
          i.fa.fa-tasks
          span {{ "sidebar:Counter" | i18n }}
      li.nav-item
        a.nav-link(href="#")
          i.fa.fa-tablet
          span {{ "sidebar:Devices" | i18n }}
      li.nav-item
        a.nav-link(href="#")
          i.fa.fa-comments
          span {{ "sidebar:Posts" | i18n }}
      li.nav-item
        a.nav-link(href="#")
          i.fa.fa-comments
          span {{ "sidebar:Logout" | i18n }}
      .title {{ "sidebar:Profile" | i18n }}
      ul.nav.nav-pills.flex-column
        li.nav-item
          a.nav-link(href="#")
            i.fa.fa-sign-out
            span {{ "sidebar:Logout" | i18n }}

    .footer
      .social
        a(href="", target="_blank")
          i.fa.fa-facebook
        a(href="https://twitter.com/Icebobcsi", target="_blank")
          i.fa.fa-twitter
        a(href="https://github.com/icebob/vue-express-mongo-boilerplate", target="_blank")
          i.fa.fa-github
      .copyright &copy; Copyright, 2016
</template>

<script>

  export default {
    props: [
      "minimized"
    ]
  };

</script>

<style lang="scss">
.title{
  text-transform: uppercase;
  font-weight: bold;


}
</style>