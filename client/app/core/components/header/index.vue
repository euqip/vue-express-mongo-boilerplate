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
      menudrop.d-md-none.d-sm-block(v-bind:items ="items") {{ "app:Actions" | i18n }}

</template>

<script>
	import Logo from "./logo"
	import SearchBox from "./search-box"
  import UserBox from "./user-box"
	import LanguagesDropdown from "./dropdowns/lang-box";
  import menudrop from "../basecomps/menudrop";
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
      LanguagesDropdown,
      Sidebar,
      menudrop
		},

		data() {
			return {
        lng: this.lang,
			}
		},
		props: [
      "toggleSidebar",
      "items",
      "bc"

		]

	}

</script>

<style lang="scss">
</style>