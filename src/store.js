import Vue from 'vue';
import Vuex from 'vuex';

const fb = require('./firebase');

Vue.use(Vuex);

// eslint-disable-next-line
export const store = new Vuex.Store({
  state: {
    currentUser: null,
  },
  actions: {
    clearData({ commit }) {
      commit('setCurrentUser', null);
    },
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
  },
});
