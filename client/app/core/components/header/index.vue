<template lang="pug">
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.text-muted.fixed-top
    logo
    <!-- Collapse button -->
    button.navbar-toggler.navbar-toggler-right.hidden-lg-up(type="button", data-toggle="collapse", data-target="#navbarSupportedContent", aria-controls="navbarSupportedContent", aria-expanded="false", aria-label="Toggle navigation")
      span.navbar-toggler-icon
    .collapse.navbar-collapse(id="navbarSupportedContent")
      search-box
      .nav-item.dropdown
      user-box
      Actions.d-md-none.d-sm-block(v-bind:items ="items")

</template>

<script>
	import Logo from "./logo"
	import SearchBox from "./search-box"
  import UserBox from "./user-box"
	import UserDropdown from "./dropdowns/user";
	import NotificationsDropdown from "./dropdowns/notifications";
	import MessagesDropdown from "./dropdowns/messages";
	import LanguagesDropdown from "./dropdowns/lang-box";
  import Actions from "./dropdowns/actions";
  import Sidebar from "../sidebar/index";


	import { mapActions, mapGetters } from "vuex";

	export default {
    i18nextNamespace: "header",
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
      LanguagesDropdown,
      Sidebar,
      Actions
		},

		data() {
			return {
        lng: this.lang,
			}
		},
		props: [
      "toggleSidebar",
      "items"

		]

	}

</script>

<style lang="scss">
</style>