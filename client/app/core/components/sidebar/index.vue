<template lang="pug">
  .row
    .col-sm-3.col-md-2.d-none.d-sm-block.bg-dark.sidebar
      div(style="height:100%;")
        nav.nav.flex-column.navbar-dark.bg-dark.text-muted
          .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:General" | i18n }}
          router-link(tag=li, to="/")
            a.nav-link(href="#", :title="_('sidebar:General')")
              i.btn.fa.fa-home
              span.d-md-none.d-lg-inline {{ "sidebar:Home" | i18n }}
          router-link(tag=li, to="/counter")
            a.nav-link(href="#", :title="_('sidebar:Counter')")
              i.btn.fa.fa-tasks
              span.d-md-none.d-lg-inline {{ "sidebar:Counter" | i18n }}
          router-link(tag=li, to="/devices")
            a.nav-link(href="#", :title="_('sidebar:Devices')")
              i.btn.fa.fa-tablet
              span.d-md-none.d-lg-inline {{ "sidebar:Devices" | i18n }}
          router-link(tag=li, to="/posts")
            a.nav-link(href="#", :title="_('sidebar:Posts')")
              i.btn.fa.fa-comments
              span.d-md-none.d-lg-inline {{ "sidebar:Posts" | i18n }}
          router-link(tag=li, to="/profile")
            a.nav-link(href="#", :title="_('sidebar:Profile')")
              i.btn.fa.fa-comments
              span.d-md-none.d-lg-inline {{ "sidebar:Profile" | i18n }}
            .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:Profile" | i18n }}
          a.nav-link(href="/logout", :title="_('sidebar:Logout')")
            i.btn.fa.fa-sign-out
            span.d-md-none.d-lg-inline {{ "sidebar:Logout" | i18n }}
          .d-md-none.d-lg-block
            nav.nav.pt-5
              a.nav-link(href="", target="_blank")
                i.fa.fa-facebook
              a.nav-link(href="https://twitter.com/Icebobcsi", target="_blank")
                i.fa.fa-twitter
              a.nav-link(href="https://github.com/icebob/vue-express-mongo-boilerplate", target="_blank")
                i.fa.fa-github
            .copyright &copy; Copyright, 2017
</template>

<script>

  export default {
    props: [
      "minimized"
    ],
    data() {
      return {
      }
    }
  };

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

.sidebar{
  position : fixed;
}

</style>