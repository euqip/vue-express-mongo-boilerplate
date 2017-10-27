<template lang="pug">
  .container-fluid.mr-5.px-0
    h1 {{"profile:userprofile" | i18n}}
    .row
      .col

        .media.p-3.m-2.bg-outline.rounded
          .mr-3
            img.rounded(:src="profile.avatar")
          .media-body
            h2 {{ profile.fullName }}
            span.text-text-muted.username ({{ profile.username }})

            .nav
              .btn-primary {{"!Role_name!"}}
              .btn-danger {{"!Administrator!"}}
              .btn-success {{"!Online!"}}
            div
              .d-flex.flex-row(v-if="profile.profile && profile.profile.location")
                i.btn.fa.fa-map-marker(:title="_('profile:Location')")
                span.caption.text-muted {{"profile:Location" | i18n}}:
                span.value {{ profile.profile.location }}

              div.d-flex.flex-row.justify-content-start
                i.btn.fa.fa-clock-o(:title="_('profile:Last_login')")
                span.caption.text-muted.w-25 {{"profile:Last_login" | i18n}}:
                span.value !Online!
            div.d-flex.flex-row
                i.btn.fa.fa-calendar(:title="_('profile:Joined')")
                span.caption.text-muted.w-25 {{"profile:Joined" | i18n}}:
                span.value {{ profile.createdAt | ago }}
            div.d-flex.flex-row
                i.btn.fa.fa-user(:title="_('profile:Full_Name')")
                span.caption.text-muted.w-25 {{"profile:Full_Name" | i18n}}:
                span.value {{ profile.fullName }}
            div.d-flex.flex-row
                i.btn.fa.fa-envelope(:title="_('profile:Email')")
                span.caption.text-muted.w-25 {{"profile:Email" | i18n}}:
                span.value {{ profile.email }}
            div.d-flex.flex-row.nav-item.dropdown
              .noarrow(data-toggle="dropdown", aria-haspopup="true", aria-expanded="false")
                i.btn.fa.fa-language(:title="_('profile:locale')")
                span.caption.text-muted.w-25 {{"profile:locale" | i18n}}:
                  langBox.dropdown-menu
                span.value {{ profile.locale }}

            hr.full
            .row
            .media-body
              pre.small(v-html="this.$options.filters.prettyJSON(profile)")

</template>

<script>

  import Service from "../../core/service";
  import langBox from "../../core/components/header/dropdowns/lang-box"
  import { mapGetters, mapActions } from "vuex";

  export default {
    //i18nextNamespace: "profile",
    components: {
        langBox
    },
    computed:{
      ...mapGetters("profile", [
        "profile"
      ])
    },

    methods: {
      ...mapActions("profile", [
        "getProfile",
        "setLang"
      ])
    },
    created() {
      this.$service = new Service("profile", this);

      // Get my profile
      this.getProfile();
    }
  };


</script>

<style lang="scss" scoped>


</style>