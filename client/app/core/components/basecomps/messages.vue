<template lang="pug">
  .rounded.pt-0.pb-0
      .card(style="width:25rem;")
        h5.card-header
          .float-left {{ uitxt.Messages | i18n }}
          .float-right
            button.btn.link(href="#")
              small {{ uitxt.MarkAllAsRead | i18n }}
        .card-body.p-1
          ul.list-group
            li(is="notification-item" v-for="i in items", v-bind:item="i", :src="src")
        .card-footer.text-center
          button.btn.link(href="#") {{ uitxt.SeeAllMessages | i18n }}

</template>

<script>
  import notificationItem from './notification-item'

  export default {
    props: {
      "items" :{
        type: Array
      },
      "src": {
        type: String
      },
      "uitxt": {
        "type": Object
      }
    },
    components: {
      notificationItem
		},

    data () {
      return {
      }
    },

  };

</script>

<style lang="scss">
</style>