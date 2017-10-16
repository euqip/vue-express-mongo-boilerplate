<template lang="pug">
  .user-box(v-if="me")
    ul.navbar-nav.mr-auto
      .nav-item(@click="toggleNotifications()", :class=" { active: notifications.length > 0 }")
        i.fa.fa-bell-o
        span.badge.badge-pill.badge-primary.exponent {{ notifications.length }}
        .ring

      .nav-item(@click="toggleMessages()", :class=" { active: messages.length > 0 }")
        i.fa.fa-envelope-o
        span.badge.badge-pill.badge-primary.exponent {{ messages.length }}
        .ring

      .nav-item(@click="toggleLanguages()", :class=" { active: lang!='' }")
        i.fa.fa-language
        span.badge.badge-pill.badge-primary.exponent {{ lang }}

      .nav-item(@click="toggleUserMenu()")
        ul.navbar-nav.mr-auto
          li.nav-item
            img.rounded-circle(:src='me.avatar' style = "height:40px;")
          li.nav-item.dropdown
            span.username {{ me.fullName }}
              i.fa.fa-chevron-down
</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		computed: mapGetters("session", [
			"me",
			"notifications",
			"messages",
			"lang"
		]),

		components: {
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

		methods: {

			toggleUserMenu() {
				this.expandedUserMenu = !this.expandedUserMenu;
				if (this.expandedUserMenu) {
					this.expandedMessages = false;
					this.expandedNotifications = false;
					this.expandedLanguages = false;
				}
			},

			toggleMessages() {
				this.expandedMessages = !this.expandedMessages;
				if (this.expandedMessages) {
					this.expandedUserMenu = false;
					this.expandedNotifications = false;
					this.expandedLanguages = false;
				}
			},

			toggleNotifications() {
				this.expandedNotifications = !this.expandedNotifications;
				if (this.expandedNotifications) {
					this.expandedMessages = false;
					this.expandedUserMenu = false;
					this.expandedLanguages = false;
				}
			}
,

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