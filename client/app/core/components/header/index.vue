<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.text-muted.fixed-top
    logo
    <!-- Collapse button -->
    button.navbar-toggler.navbar-expand-lg(type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation")
      span.navbar-toggler-icon
    .collapse.navbar-collapse
      search-box
    .collapse.navbar-collapse
      user-box
    //user-dropdown(:visible=!"expandedUserMenu")
    //notifications-dropdown(:visible="expandedNotifications")
    //messages-dropdown(:visible="expandedMessages")
    //languages-dropdown(:visible="expandedLanguages")
</template>

<script>
	import Logo from "./logo"
	import SearchBox from "./search-box"
  import UserBox from "./user-box"
	import UserDropdown from "./dropdowns/user";
	import NotificationsDropdown from "./dropdowns/notifications";
	import MessagesDropdown from "./dropdowns/messages";
	import LanguagesDropdown from "./dropdowns/lang-box";


	import { mapActions, mapGetters } from "vuex";

	export default {
		computed: mapGetters("session", [
			"me",
			"notifications",
			"messages",
			"lang"
		]),

		components: {
			Logo,
			SearchBox,
      UserBox,
			UserDropdown,
			NotificationsDropdown,
			MessagesDropdown,
			LanguagesDropdown
		},

		data() {
			return {
				expandedUserMenu: false,
				expandedNotifications: false,
				expandedMessages: false,
        expandedLanguages: false,
        lng: this.lang

			};
		},
		props: [
			"toggleSidebar"
		]

	};

</script>

<style lang="scss">
</style>