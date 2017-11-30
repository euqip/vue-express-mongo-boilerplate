"use strict"

import Vue from "vue"
import toastr from "../../../core/toastr"

//export const NAMESPACE = "/api/profile"
let NAMESPACE = "/api/profile"

import Service from "../../../core/service"
let service = new Service("profile")

export const getProfile = function ({ commit }) {
  service.rest("get").then((data) => {
    commit("UPDATE", data)
  }).catch((err) => {
    toastr.error(err.message)
  })
}

export const setLang = function ({ commit }) {
  service.rest("post").then((data) => {
    commit("UPDATE", data)
  }).catch((err) => {
    toastr.error(err.message)
  })
}
