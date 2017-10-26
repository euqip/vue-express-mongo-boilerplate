<template lang="pug">
  .user-box(v-if="me")
    nav.navbar-nav.container
      .nav-item.dropdown( :title="_('header:notifications')")
        .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false", :class=" { active: notifications.length > 0 }")
          i.px-1.fa.fa-bell-o
            span.badge.badge-pill.badge-primary.exponent {{ notifications.length }}
          .ring
        notifications.dropdown-menu

      .nav-item.dropdown( :title="_('header:messages')")
        //the dropdown-toggle class is removed to desable the dropdown arrow
        .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false", :class=" { active: messages.length > 0 }")
          i.px-1.fa.fa-envelope-o
            span.badge.badge-pill.badge-primary.exponent {{ messages.length }}
          .ring
        messages.dropdown-menu

      .nav-item.dropdown(:title="_('header:languageselector')")
        .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
          i.px-1.fa.fa-language
            span.badge.badge-pill.badge-primary.exponent {{ lang }}
        langBox.dropdown-menu

      .nav-item.dropdown
        .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
          img.rounded-circle.px-1(:src='me.avatar' style = "height:40px;")
          span.username {{ me.fullName }}
        user

</template>

<script>
  import langBox from "./dropdowns/lang-box"
  import user from "./dropdowns/user"
  import notifications from "./dropdowns/notifications"
  import messages from "./dropdowns/messages"
	import { mapActions, mapGetters } from "vuex";

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
      notifications,
      messages
		},

		data() {
			return {
        lng: this.lang

			};
		},

		methods: {
			toggleLanguages() {
				this.expandedLanguages = !this.expandedLanguages;
				if (this.expandedLanguages) {
					this.expandedMessages = false;
					this.expandedUserMenu = false;
					this.expandedNotifications =  false;
					console.log ("toggle languages")
				}
			}
		}

	};

</script>

<style lang="scss">
  .exponent{
    vertical-align: 1em;
  }
</style>