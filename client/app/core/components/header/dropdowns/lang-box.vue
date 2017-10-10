<template lang="pug">
  .languages-dropdown.dropdown(:class="{ 'visible': visible }")
    //v-for just after tag!
    button.button.normal.langboxbtn(v-for="langitem in langs" @click="changelanguage(langitem.iso)" v-if="langitem.iso != lang") {{langitem.language}}
</template>

<script>
	import { mapGetters, mapActions } from "vuex";


  module.exports = {
		props: [
			"visible"
    ],
    components: {
		},

    data () {
      return {
        langs: [
          {iso:'en', language:'English'},
          {iso:'fr', language:'French'},
          {iso:'nl', language:'Dutch'},
          {iso:'hu', language:'Hungarian'}
        ],
        title : 'select language',
      }
    },
    methods :{
      changelanguage(language) {
        // hide the language-dropdown
        this.$parent.toggleLanguages()
        // send the change to vuex store, changinglang is one of the possible actions
        this.changinglang(language)
      },
 			...mapActions("session", [
        "changinglang"
      ])

    },
    computed: {
      ...mapGetters("session", [
        "lang"
			])
    }

	}

</script>

<style lang="scss">
  .langboxbtn{
    width:100%;
  }
</style>