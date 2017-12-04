<template lang="pug">
    admin-page(:schema="schema", :selected="selected", :rows="devices")
</template>

<script>
  import Vue from "vue";
  import AdminPage from "../../core/DefaultAdminPage.vue";
  import schema from "./schema";
  import toast from "../../core/toastr";

  import { mapGetters, mapActions } from "vuex";

  export default {
    i18nextNamespace: "devices",

    components: {
      AdminPage: AdminPage
    },

    computed: {
      ...mapGetters("devices", [
      "devices",
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

      prefix: "/devices/",

      events: {
        /**
         * New device added
         * @param  {Object} res Device object
         */
        created(res) {
          this.created(res.data);
          toast.success(this._("DeviceNameAdded", res), this._("DeviceAdded"));
        },

        /**
         * Device updated
         * @param  {Object} res Device object
         */
        updated(res) {
          this.updated(res.data);
          toast.success(this._("devices:DeviceNameUpdated", res), this._("devices:DeviceUpdated"));
        },

        /**
         * Device removed
         * @param  {Object} res Response object
         */
        removed(res) {
          this.removed(res.data);
          toast.success(this._("devices:DeviceNameDeleted", res), this._("devices:DeviceDeleted"));
        }
      }
    },

    methods: {
      ...mapActions("devices", [
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
