<template lang="pug">
  .dropdown-menu.dropdown-menu-right
    .dropdown-item.btn
      router-link(tag="div", to="/profile")
        i.px-1.fa.fa-user
        | {{ "MyAccount" | i18n }}

    .dropdown-item.btn
      router-link(tag="div", to="/settings")
        i.px-1.fa.fa-cog
        | {{ "Settings" | i18n }}

    .dropdown-divider
    .dropdown-item.btn
      a(href='/logout')
        i.px-1.fa.fa-power-off
        | {{ "Logout" | i18n }}
</template>

<script>

  export default {

    props: [
    ]

  };

</script>

<style lang="scss">
</style>