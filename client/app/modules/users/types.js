"use strict"
import Vue from "vue"

let _ = Vue.prototype._


module.exports = {

  usersRoles: [
    { id: "0", value: "guest", "name": _("users:guest") },
		{ id: "1", value: "user", "name": _("users:user") },
		{ id: "2", value: "admin", "name": _("users:admin") },
  ]

}