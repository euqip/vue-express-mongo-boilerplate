<template lang="pug">
  .notification-dropdown.dropdown(:class="{ 'visible': visible }")
    .card(style="width:25rem;")
      h5.card-header
        .float-left {{ "Notifications" | i18n }}
        .float-right
          a.link(href="#")
            small {{ "MarkAllAsRead" | i18n }}
      .card-body
        ul.list-group
          li(is="notification-item" v-for="i in items" v-bind:key="i.id" v-bind:name="i.name" v-bind:img="i.img" v-bind:action="i.action" v-bind:delay="i.delay" v-bind:src="src")
      .card-footer.text-center
        a.link(href="#") {{ "SeeAllNotifications" | i18n }}



</template>

<script>
  import notificationItem from './notification-item'

  export default {
    props: [
      "visible"
    ],
    components: {
      notificationItem
		},

    data () {
      return {
        items: [
          {id:'1', img:'dustin/73.jpg', name:'Thomas', action:'posted a new article', delay:'1 min ago'},
          {id:'2', img:'connor_gaunt/73.jpg', name:'Adam', action:'changed his contact information', delay:'3 min ago'},
          {id:'3', img:'adellecharles/73.jpg', name:'Samantha', action:'replied to your comment', delay:'15 min ago'},
          {id:'4', img:'ritu/73.jpg', name:'Bill', action:'bought a new TV', delay:'3 hrs ago'},
          {id:'5', img:'sauro/73.jpg', name:'Chris', action:'posted a new blog post', delay:'1 day ago'},
        ],
        src : 'https://s3.amazonaws.com/uifaces/faces/twitter/',
      }
    },

  };

</script>

<style lang="scss">

</style>