"use strict"
import Vue from "vue"

let _ = Vue.prototype._


module.exports = {

  usersRoles: [
    { id: "0", name: "guest", "label": "users:guest" },
		{ id: "1", name: "user", "label": "users:user" },
		{ id: "2", name: "admin", "label": "users:admin" },
  ]

}