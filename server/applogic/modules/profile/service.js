"use strict"

let logger 		= require("../../../core/logger")
let config 		= require("../../../config")
let C 	 		= require("../../../core/constants")
let i18next = require ("i18next")

//let _			= require("lodash")

let User 		= require("./models/user")

module.exports = {
  settings: {
    name: "profile",
    version: 1,
    namespace: "profile",
    rest: true,
    ws: true,
    graphql: true,
    permission: C.PERM_LOGGEDIN,
    role: "user",
    collection: User,

    modelPropFilter: "code username fullName email avatar passwordLess provider profile socialLinks roles apiKey lastLogin locale status createdAt updatedAt"
  },

  actions: {
    // return my profile with all properties
    get: {
      cache: false, // can't be cached, because it is unique for every account
      handler(ctx) {
        return User.findById(User.schema.methods.decodeID(ctx.user.code)).exec().then( (doc) => {
          return this.toJSON(doc)
        })
        .then((json) => {
          return this.populateModels(json)
        })
      }
    },
    setlang: {
      permission: C.PERM_OWNER,
      cache: false, // can't be cached, because it is unique for every account
      handler(ctx) {
        return User.findById(User.schema.methods.decodeID(ctx.user.code)).exec().then((doc) => {
          if (ctx.params.locale !== null && ctx.params.locale !== doc.locale ){
            doc.locale = ctx.params.locale
            doc.save()
            return this.toJSON(doc)
          } else {
            logger.warn(ctx.t("server:langalreadyset"))
            logger.warn(doc.locale)
            ctx.throwError = ctx.t("server:langalreadyset")
            return this.toJSON(doc)
          }
        })
          .then((json) => {
            return this.populateModels(json)
          })
      }
    }
  },

  methods: {
  },



}

