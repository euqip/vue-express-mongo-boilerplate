<template lang="pug">
  section.page-header
    .navbar.fixed-top.navbar-dark.bg-dark.navbar-inverse.text-muted
      a.navbar-brand
        logo
        button.nabar-toggler
          i.fa.fa-bars
      search-box
      user-box

</template>

<script>
	import Logo from "./logo"
	import SearchBox from "./search-box"
  import UserBox from "./user-box"

	export default {
		components: {
			Logo,
			SearchBox,
      UserBox,
 		},

		props: [
			"toggleSidebar"
		]

	};

</script>

<style lang="scss">
</style>