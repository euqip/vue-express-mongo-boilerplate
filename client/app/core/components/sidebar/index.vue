<template lang="pug">
	aside.nav(:class="{ mini: minimized }")
		.menu
			.title {{ "sidebar:General" | i18n }}
			ul
				router-link(tag="li", to="/")
					a(:title="_('Home')")
						span.icon
							i.fa.fa-home
						span.label {{ "sidebar:Home" | i18n }}

				router-link(tag="li", to="/counter")
					a(:title="_('Demo')")
						span.icon
							i.fa.fa-tasks
						span.label {{ "sidebar:Counter" | i18n }}

				router-link(tag="li", to="/devices")
					a(:title="_('Devices')")
						span.icon
							i.fa.fa-tablet
						span.label {{ "sidebar:Devices" | i18n }}

				router-link(tag="li", to="/posts")
					a(:title="_('Posts')")
						span.icon
							i.fa.fa-comments
						span.label {{ "sidebar:Posts" | i18n }}

			.title {{ "sidebar:Profile" | i18n }}
			ul
				li
					a(href="/logout", :title="_('Logout')")
						span.icon
							i.fa.fa-sign-out
						span.label {{ "sidebar:Logout" | i18n }}

		.footer
			.social
				a(href="", target="_blank")
					i.fa.fa-facebook
				a(href="https://twitter.com/Icebobcsi", target="_blank")
					i.fa.fa-twitter
				a(href="https://github.com/icebob/vue-express-mongo-boilerplate", target="_blank")
					i.fa.fa-github
			.copyright &copy; Copyright, 2016
</template>

<script>

	export default {
		props: [
			"minimized"
    ]
	};

</script>

<style lang="scss">
</style>