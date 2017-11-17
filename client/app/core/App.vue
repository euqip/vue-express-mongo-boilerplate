<template lang="pug">
div
  .container-fluid
    // Action items are defined once in a config file "../modules/actions.js"
    page-header(:toggle-sidebar="toggleSidebar", v-bind:items="actionitems")
    .container-fluid
      .row
        .d-none.col-sm-1.col-md-2.d-sm-block.bg-dark.sidebar
          div(style="height:100%;")
            sidebar(v-bind:items="actionitems")
            .d-md-none1.d-lg-block1
               Social

      main.col-sm-9.offset-sm-3.col-md-10.offset-md-2.pt-3(role= "main")
        router-view(keep-alive)
        .copyright &copy; Copyright, 2017

  // a(href="https://github.com/icebob/vue-express-mongo-boilerplate")
    img(style="position: absolute; top: 0; left: 0; border: 0; z-index:2000", src="https://camo.githubusercontent.com/8b6b8ccc6da3aa5722903da7b58eb5ab1081adee/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6f72616e67655f6666373630302e706e67", alt="Fork me on GitHub", data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png")
</template>

<script>
  import Vue from "vue";

  import PageHeader from "./components/header/index"
  import Sidebar from "./components/sidebar/index"
  import Social from "./components/sidebar/social"
  import Appactions from "../modules/actions.js"
  import Service from "./service"

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
      PageHeader,
      Sidebar,
      Social
    },
    props: [
      ],
    data() {
      return {
        wsReconnecting: false,
        miniSidebar: false,
        actionitems: Appactions.mainactions
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
      // these computed values give a vue warning, if not here there is no lang change!
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
@import "../../scss/themes/clear/variables";
/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
body {
  padding-top: 50px;
}

/*
 * Typography
 */

h1 {
  margin-bottom: 20px;
  padding-bottom: 9px;
  border-bottom: 1px solid #eee;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 51px;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  border-right: 1px solid #eee;
}

/* Sidebar navigation */
.sidebar {
  padding-left: 0;
  padding-right: 0;
}

.sidebar .nav {
  margin-bottom: 20px;
}

.sidebar .nav-item {
  width: 100%;
}

.sidebar .nav-item + .nav-item {
  margin-left: 0;
}

.sidebar .nav-link {
  border-radius: 0;
}

/*
 * Dashboard
 */

 /* Placeholders */
.placeholders {
  padding-bottom: 3rem;
}

.placeholder img {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
</style>
