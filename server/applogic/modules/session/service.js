"use strict"

let logger 		= require("../../../core/logger")
let config 		= require("../../../config")
let C 	 			= require("../../../core/constants")

let _ 				= require("lodash")

let Sockets		= require("../../../core/sockets")

let personService

module.exports = {
  settings: {
    name: "session",
    version: 1,
    namespace: "session",
    rest: true,
    ws: true,
    graphql: true,
    permission: C.PERM_LOGGEDIN,
    role: "user"
  },

  actions: {

    // return my User model
    // response to (get) /api/session/me
    me(ctx) {
      return Promise.resolve(ctx.user).then( (doc) => {
        return personService.toJSON(doc)
      })
    },

    // return all online users
    // response to (get) /api/session/onlineUsers
    onlineUsers(ctx) {
      return Promise.resolve().then(() => {
        return personService.toJSON(_.map(Sockets.userSockets, (s) => s.request.user))
      })
    }
  },

  init(ctx) {
    personService = this.services("persons")
  }


}
