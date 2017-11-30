"use strict"

require("es6-promise/auto")

import Vue from "vue"

import VueI18Next from "./core/i18next.js"
import axios from "axios"
axios.defaults.headers.post["Content-Type"] = "application/json"

import Filters from "./core/filters"
import VueFormGenerator from "vue-form-generator"
import VueWebsocket from "vue-websocket"
// store is imported here to be accessible to all sub components
import store from "./core/store"
import App from "./core/App"
//import Example from "./core/Example"

Vue.use(Filters)

Vue.use(VueFormGenerator)
Vue.use(VueWebsocket)

//Vue.http.headers.common['X-CSRF-TOKEN'] = $('input[name="csrf"]').val();

// Register i18next localization module. We need to
// wait it before start the application!
Vue.use(VueI18Next, (i18next) => {
  let router = require("./core/router").default // Load only after i18next initialized

  new Vue({
    el: "#app",
    components: {
      App
    },
    router,
    store,
    VueI18Next,
    render: h => h("app")
  })
})
