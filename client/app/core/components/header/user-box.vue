<template lang="pug">
	.user-box(v-if="me")

		.user-info.right(@click="toggleUserMenu()")
			img.avatar(:src='me.avatar')
			.username {{ me.fullName }}
			i.fa.fa-chevron-down

		user-dropdown(:visible="expandedUserMenu")

		.notification-box.right
			ul.icons
				li(@click="toggleNotifications()", :class=" { active: notifications.length > 0 }")
					i.fa.fa-bell-o
					span {{ notifications.length }}
					.ring

				li(@click="toggleMessages()", :class=" { active: messages.length > 0 }")
					i.fa.fa-envelope-o
					span {{ messages.length }}
					.ring

				li(@click="toggleLanguages()", :class=" { active: lang!='' }")
					i.fa.fa-language
					span {{ lang }}

			notifications-dropdown(:visible="expandedNotifications")
			messages-dropdown(:visible="expandedMessages")
			languages-dropdown(:visible="expandedLanguages")


</template>

<script>
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
</style>