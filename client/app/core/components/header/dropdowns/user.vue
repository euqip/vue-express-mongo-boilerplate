<template lang="pug">
  div.dropdown-menu
    div(v-for="item in items" :key="item.id")
      .dropdown-item(v-if="item.itype==='route'")
        router-link(tag="div", :to="item.uri")
          i.px-1.fa(:class="item.icon" )
          span {{ item.txt | i18n }}
      .Menu.title(v-else-if = "item.itype==='title'")
        span {{ item.txt | i18n }}
      .dropdown-divider(v-else-if = "item.itype==='devider'")
      .dropdown-item(v-else-if="item.itype==='link'")
        a(:href="item.uri")
          i.px-1.fa(:class="item.icon" )
          span {{ item.txt | i18n }}
      .dropdown-item(v-else)
        a(:href="item.uri")
          i.px-1.fa(:class="item.icon" )
          span {{ item.txt | i18n }}
</template>

<script>

  export default {

    props: {
      "items" :{
        itype: Array
      }
    }

  };

</script>

<style lang="scss">
</style>