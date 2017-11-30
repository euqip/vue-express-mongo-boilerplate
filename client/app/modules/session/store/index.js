"use strict"

import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SEARCH, LANG, NS} from "./types"

const state = {
  user: null,
  notifications: [
    { id: 1, text: "Something happened!", time: 1, user: null }
  ],
  messages: [],
  lng: "",
  searchText: "",
  ns: []
}

const mutations = {
  [ADD_MESSAGE] (state, item) {
    state.messages.splice(0)
    state.messages.push(item)
  },

  [ADD_NOTIFICATION] (state, item) {
    state.notifications.splice(0)
    state.notifications.push(item)
  },

  [SET_USER] (state, user) {
    state.user = user
  },

  [SEARCH] (state, text) {
    state.searchText = text
  },

  [LANG] (state, text) {
    state.lng = text
  },

  [NS] (state, item) {
    state.ns.splice(0)
    state.ns.push(item)
  }
}

import * as getters from "./getters"
import * as actions from "./actions"

export default {
  namespaced: true,
  strict: process.env.NODE_ENV !== "production",
  state,
  getters,
  actions,
  mutations
}