<template lang="pug">
  .user-box(v-if="me")
    nav.navbar-nav.container
      .row

        .nav-item.dropdown.col-sm-2
          badgedicon(:title="_('header:notifications')", icon="fa-bell-o", :badge='notifications.length')
          messages.dropdown-menu(v-bind:items="notificationitems", :uitxt="notifui", :src="faces_source")

        .nav-item.dropdown.col-sm-2
          badgedicon(:title="_('header:messages')", icon="fa-envelope-o", :badge='messages.length')
          //messages.dropdown-menu(v-bind:items="messageitems", :src="faces_source")
          messages.dropdown-menu(v-bind:items="messageitems", :uitxt="msgsui", :src="faces_source")

        .nav-item.dropdown.col-sm-2
          badgedicon(:title="_('header:languageselector')", icon="fa-language", :badge='lang')
          langBox.dropdown-menu

        .nav-item.dropdown.col-sm-6
          .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
            img.rounded-circle.px-1(:src='me.avatar' style = "height:40px;")
            span &nbsp;&nbsp;
            span(style="width:100px;") {{ me.fullName}}
          user(v-bind:items ="menuitems")
            span &nbsp;&nbsp;
</template>

<script>
  import langBox from "./dropdowns/lang-box"
  import user from "./dropdowns/user"
  import messages from "../basecomps/messages"

  import bc from "../basecomps/ui_config.js"
  import badgedicon from "../basecomps/badgedicon"
  import { mapActions, mapGetters } from "vuex"

	export default {
		computed: mapGetters("session", [
			"me",
			"notifications",
			"messages",
			"lang"
		]),

		components: {
      langBox,
      user,
      messages,
      badgedicon,
		},

		data() {
			return {
        "lng": this.lang,
        "menuitems": bc.usermenu,
        "notificationitems": bc.fake_notif,
        "messageitems": bc.fake_msgs,
        "faces_source": bc.fake_faces_src,
        "msgsui": bc.header.msgs,
        "notifui": bc.header.notif,

			};
		},

		methods: {

    },
    props: {
      "bcui": {
        "type": Object
      }
    }
	};

</script>

<style lang="scss">
  .exponent{
    vertical-align: 1em;
  }
</style>