<template lang="pug">
  .social
    nav.nav.pt-5
      a.nav-link.mylink(href="", target="_blank")
        i.fa.fa-facebook
      a.nav-link.mylink(href="https://twitter.com/Icebobcsi", target="_blank")
        i.fa.fa-twitter
      a.nav-link.mylink(href="https://github.com/icebob/vue-express-mongo-boilerplate", target="_blank")
        i.fa.fa-github
    // show copyright in didebar when display wider than md
    nav.nav.pt-5.d-none.d-md-inline
      a.nav-link.mylink(href="#")
        i.fa.fa-copyright
        span &nbsp;Copyright, 2017

</template>

<script>
  
</script>

<style lang="scss">
.social.nav{
  position : fixed;
  margin-bottom: 10px;
}
  .mylink{
    color: #aaa;
    i{
      font-size: 20px;
    }
}
</style>
