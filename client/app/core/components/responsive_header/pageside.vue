<template lang="pug">
    .col-sm-3.col-md-2.d-none.d-sm-block.bg-dark.sidebar
      ul.nav.nav-pills.flex-column
        li.nav-item
          a.nav-link.active(href="#") Overview
            span.sr-only (current)
        li.nav-item
          a.nav-link(href="#") Reports
        li.nav-item
          a.nav-link(href="#") Analytics
        li.nav-item
          a.nav-link(href="#") Export

      ul.nav.nav-pills.flex-column
        li.nav-item
          a.nav-link(href="#") Navitem1
            span.sr-only (current)
        li.nav-item
          a.nav-link(href="#") Navitem2
        li.nav-item
          a.nav-link(href="#") Navitem3
        li.nav-item
          a.nav-link(href="#") Navitem4
</template>