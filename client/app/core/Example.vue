<template lang="pug">
  Spa
</template>

<script>
  import Vue from "vue";

  import Spa from "./components/responsive_header/spa";
  import Service from "./service";

  import { mapActions, mapGetters } from "vuex";

  export default {
    /**
     * Create websocket connection to the root namespace
     */
    //mixins: [ MixinsIO() ],

    /**
     * Load sub-components
     */
    components: {
      Spa
    },
    /**
     * Create app data object
     *
     * TODO: move to vuex state
     */
    data() {
      return {
        wsReconnecting: false,
        miniSidebar: false,
      };
    },

    watch: {
      lang: function() {
        console.log("App Language updated");
        this.update(this);
      }
   },

    /**
     * Socket handlers. Every property is an event handler
     */
    socket: {

      events: {
        /**
         * Send welcome message after connect
         */
        connect() {
          console.log("Websocket connected to " + this.$socket.nsp);

          if (this.wsReconnecting)
            // Reload browser if connection established after disconnect
            window.location.reload(true);
          else
            this.$socket.emit("welcome", "Hello! " + navigator.userAgent);
        },

        disconnect() {
          console.log("Websocket disconnected from " + this.$socket.nsp);
          this.wsReconnecting = true;
        },

        error(err) {
          console.error("Websocket error!", err);
        }
      }
    },
    computed:{
      ...mapGetters("session", [
        "lang",
        "me"
      ])
    },
    methods: {
      ...mapActions("session", [
        "getSessionUser",
        "changinglang"
      ]),
       ...mapGetters("session", [
        "lang",
        "me"
      ]),

      update: function(vm) {
        if (vm == null)
          return;

        let i = vm._watchers.length;
        while (i--)
          vm._watchers[i].update(true);

        let children = vm.$children;
        i = children.length;
        while (i--)
          this.update(children[i]);
      },

      toggleSidebar() {
        this.miniSidebar = !this.miniSidebar;
      }
    },

    /**
     * Application created
     */
    created() {
      console.log("App started! (browser console)");
      window.app = this;

      this.getSessionUser();

      // debug
      window.postService = new Service("posts", this);
      window.counterService = new Service("counter", this);
      window.deviceService = new Service("device", this);

    }
  };
</script>

<style lang="scss">
  @import "../../scss/themes/blurred/variables";

  .godown{
    padding-top:55px;
  }
  //@import "../../scss/style.scss";

</style>
