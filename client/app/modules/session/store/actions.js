import Vue from "vue";
import axios from "axios";
import i18next from "i18next";

import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SEARCH, LANG } from "./types";

export const NAMESPACE= "/api/session";

export const getSessionUser = ({ commit }) => {
	axios.get(NAMESPACE + "/me").then((response) => {
		let res = response.data;
		if (res.status == 200)
			commit(SET_USER, res.data);
		else
			console.error("Request error!", res.error);

	}).catch((response) => {
		console.error("Request error!", response.statusText);
	});
};

export const addMessage = ({ commit }, item) => {
	commit(ADD_MESSAGE, item);
};

export const addNotification = ({ commit }, item) => {
	commit(ADD_NOTIFICATION, item);
};

export const searching = ({ commit }, text) => {
	commit(SEARCH, text);
};

export const changinglang = ({ commit }, text) => {
	commit(LANG, text);
	i18next.changeLanguage (text);
};



