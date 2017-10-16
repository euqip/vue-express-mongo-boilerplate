<template lang="pug">
  .notification-dropdown.dropdown(:class="{ 'visible': visible }")
    .card(style="width:25rem;")
      h5.card-header
        .float-left {{ "Messages" | i18n }}
        .float-right
          a.link(href="#")
            small {{ "MarkAllAsRead" | i18n }}
      .card-body
        ul.list-group
          li(is="notification-item" v-for="i in items" v-bind:key="i.id" v-bind:name="i.title" v-bind:img="i.img" v-bind:action="i.content" v-bind:delay="i.delay" v-bind:src="src")
      .card-footer.text-center
        a.link(href="#") {{ "SeeAllMessages" | i18n }}
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
          {id:'1',
            img:'dustin/73.jpg',
            name:'John Doe',
            content:'Cupidatat eiusmod commodo excepteur velit magna. Aliqua eu tempor officia officia et ipsum magna sint cillum Lorem reprehenderit.',
            title: 'Message Title',
            delay:'1 min ago'
            },
          {id:'2',
            img:'connor_gaunt/73.jpg',
            name:'John Doe',
            content:'Laborum laboris nulla nisi labore.',
            title: 'Message Title',
            delay:'3 min ago'
          },
        ],
        src : 'https://s3.amazonaws.com/uifaces/faces/twitter/'
      }
    },

  };

</script>

<style lang="scss">
</style>