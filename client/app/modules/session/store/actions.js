"use strict"

import Vue from "vue"
import axios from "axios"
import i18next from "i18next"

import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SEARCH, LANG } from "./types"
import Vuex from "vuex"
Vue.use (Vuex)

//export const NAMESPACE = "/api/session"
let NAMESPACE = "/api/session"
// this getSessionUser does not work with vuex >= 2.4
// works perfect with vuex < 2.4
// find an example at : https://vuex.vuejs.org/en/actions.html
// a cart with products
export const getSessionUser = ({ commit }) => {
  axios.get(NAMESPACE + "/me").then((response) => {
    let res = response.data
    if (res.status == 200){
      commit(SET_USER, res.data)
      // user.locale was not included in sent data, change is made in server/modules/persons/service
      // while the default en locale is set in user schema all users are localized in en.
      //console.log("user locale is : " + JSON.stringify(res.data));
      let lng = res.data.locale
      // if user has no locale then keep default language
      if (lng !== undefined) {
        commit(LANG,lng)
        i18next.changeLanguage (lng)
      }
    }
    else
      console.error("Request error!", res.error)

  }).catch((response) => {
    console.error("Request error!", response.statusText)
  })
}

export const addMessage = ({ commit }, item) => {
  commit(ADD_MESSAGE, item)
}

export const addNotification = ({ commit }, item) => {
  commit(ADD_NOTIFICATION, item)
}

export const searching = ({ commit }, text) => {
  commit(SEARCH, text)
}

export const changinglang = ({ commit }, text) => {
  commit(LANG, text)
  i18next.changeLanguage(text)
}

export const loadingns = ({ commit }, text) => {
  commit(LANG, text)
  i18next.loadNamespaces (text)
}

