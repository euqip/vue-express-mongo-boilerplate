<template lang="pug">
  .languages.py-1.w-25
    //v-for just after tag!
    a.dropdown-item(v-for="i in langs" @click="changelanguage(i.iso)" v-if="i.iso != lang")
      span {{i.language}}
</template>

<script>
	import { mapGetters, mapActions } from "vuex";


  module.exports = {
		props: [

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