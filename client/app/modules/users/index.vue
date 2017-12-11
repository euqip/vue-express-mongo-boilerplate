<template lang="pug">
    admin-page(:schema="schema", :selected="selected", :rows="items")
</template>

<script>
  import Vue from "vue";
  import AdminPage from "../../core/DefaultAdminPage.vue";
  import schema from "./schema";
  import toast from "../../core/toastr";

  import { mapGetters, mapActions } from "vuex";

  export default {
    //i18nextNamespace: "users",

    components: {
      AdminPage: AdminPage
    },

    computed: {
      ...mapGetters("users", [
      "items",
      "selected"
    ])
    },

    /**
     * Set page schema as data property
     */
    data() {
      return {
        schema
      };
    },

    /**
     * Socket handlers. Every property is an event handler
     */
    socket: {

      prefix: "/users/",

      events: {
        /**
         * New device added
         * @param  {Object} res Device object
         */
        created(res) {
          this.created(res.data);
          toast.success(this._("NameAdded", res), this._("Added"));
        },

        /**
         * Device updated
         * @param  {Object} res Device object
         */
        updated(res) {
          this.updated(res.data);
          toast.success(this._("users:NameUpdated", res), this._("users:Updated"));
        },

        /**
         *  removed
         * @param  {Object} res Response object
         */
        removed(res) {
          this.removed(res.data);
          toast.success(this._("users:NameDeleted", res), this._("users:Deleted"));
        }
      }
    },

    methods: {
      ...mapActions("users", [
        "downloadRows",
        "created",
        "updated",
        "removed",
        "selectRow",
        "clearSelection",
        "saveRow",
        "updateRow",
        "removeRow"
      ])
    },

    /**
     * Call if the component is created
     */
    created() {
      // Download rows for the page
      this.downloadRows();
    }
  };
</script>
<<style lang= "scss">

</style>
