<template lang="pug">
    .navbar.navbar-expand-lg.fixed-top.navbar-dark.bg-dark
      .container
        a.navbar-brand(href="#") Dashboard
        button.navbar-toggler.navbar-toggler-right.hidden-lg-up(type="button", data-toggle="collapse", data-target="#navbarsExampleDefault", aria-controls="navbarsExampleDefault", aria-expanded="false", aria-label="Toggle navigation")
          span.navbar-toggler-icon
        .collapse.navbar-collapse(id="navbarsExampleDefault")
          ul.navbar-nav.mr-auto
            li.nav-item.active
              a.nav-link(href="#") Home
              span.sr-only (current)
            li.nav-item
              a.nav-link(href="#") MySettings
              span.sr-only (current)
            li.nav-item
              a.nav-link(href="#") User Profile
              span.sr-only (current)
            li.nav-item
              a.nav-link(href="#") Help
              span.sr-only (current)
          form.form-inline.mt-2.mt-md-0
            input.form-control.mr-sm-2(type="text" placeholder="Search")
            button.btn.btn-outline-success.my-2.my-sm-0(type="submit") Search

</template>
