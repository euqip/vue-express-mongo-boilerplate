<template lang="pug">
  .sidebar
    .container-fluid.px-0
      .row(style="height:900px;")
        nav.nav.flex-column.navbar-dark.bg-dark.text-muted
          .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:General" | i18n }}
          router-link(tag=li, to="/")
            a.nav-link
              i.btn.fa.fa-home
              span.d-sm-none.d-lg-inline {{ "sidebar:Home" | i18n }}
          router-link(tag=li, to="/counter")
            a.nav-link
              i.btn.fa.fa-tasks
              span.d-sm-none.d-lg-inline {{ "sidebar:Counter" | i18n }}
          router-link(tag=li, to="/devices")
            a.nav-link
              i.btn.fa.fa-tablet
              span.d-sm-none.d-lg-inline {{ "sidebar:Devices" | i18n }}
          router-link(tag=li, to="/posts")
            a.nav-link
              i.btn.fa.fa-comments
              span.d-sm-none.d-lg-inline {{ "sidebar:Posts" | i18n }}
          router-link(tag=li, to="/profile")
            a.nav-link
              i.btn.fa.fa-comments
              span.d-sm-none.d-lg-inline {{ "sidebar:Logout" | i18n }}
            .title.pl-3.d-sm-none.d-lg-inline {{ "sidebar:Profile" | i18n }}
          router-link(tag=li, to="/logout")
            a.nav-link
              i.btn.fa.fa-sign-out
              span.d-sm-none.d-lg-inline {{ "sidebar:Logout" | i18n }}
          div
            nav.nav.pt-5
              a.nav-link.btn(href="", target="_blank")
                i.mr-1.fa.fa-facebook
              a.nav-link.btn(href="https://twitter.com/Icebobcsi", target="_blank")
                i.mr-1.fa.fa-twitter
              a.nav-link.btn(href="https://github.com/icebob/vue-express-mongo-boilerplate", target="_blank")
                i.mr-1.fa.fa-github
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