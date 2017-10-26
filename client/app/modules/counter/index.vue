<template lang="pug">
	.container-fluid
		h1 {{ "counter:Demo" | i18n }}

		h3 {{ count }} {{ "counter:Clicktochange" | i18n }}
		button.btn.btn-success(@click="inc")
			span.icon
				i.px-2.fa.fa-arrow-up
			span {{ "counter:Increment" | i18n }}
		br
		br
		button.btn.btn-warning(@click="dec")
			span
				i.px-2.fa.fa-arrow-up
			span {{ "counter:Decrement" | i18n }}

</template>

<script>
	import { mapActions, mapGetters } from "vuex";

	import Service from "../../core/service";

	export default {
    //i18nextNamespace: "counter",
		/**
		 * Computed getters
		 */
		 computed: mapGetters("counter", [
			 "count"
		 ]),

		/**
		 * Page methods
		 */
		methods: {
			/**
			 * Actions from store
			 */
			...mapActions("counter", [
				"getValue",
				"increment",
				"decrement",
				"changedValue"
			]),

			/**
			 * Increment counter
			 */
			inc() {
				this.increment();
			},

			/**
			 * Decrement counter
			 */
			dec() {
				this.decrement();
			}
		},

		/**
		 * Socket handlers. Every property is an event handler
		 */
		socket: {

			prefix: "/counter/",

			//namespace: "/counter",

			events: {
				/**
				 * Counter value is changed
				 * @param  {Number} msg Value of counter
				 */
				changed(res) {
					console.log("Counter changed to " + res.data + (res.user ? " by " + res.user.fullName : ""));
					this.changedValue(res.data);
				}
			}
		},

		created() {
			this.$service = new Service("counter", this);

			// Get the latest value of counter
			this.getValue();
		}
	};

</script>

<style lang="scss" scoped>
</style>