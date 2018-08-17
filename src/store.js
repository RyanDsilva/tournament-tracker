import Vue from 'vue';
import Vuex from 'vuex';

const fb = require('./firebase');

Vue.use(Vuex);

// eslint-disable-next-line
fb.auth.onAuthStateChanged(user => {
  if (user) {
    // eslint-disable-next-line
    store.commit('setCurrentUser', user);
    // realtime updates from our posts collection
    fb.scores
      .orderBy('dnum', 'desc')
      // eslint-disable-next-line
      .onSnapshot(querySnapshot => {
        // eslint-disable-next-line
        let scoresList = [];
        // eslint-disable-next-line
        querySnapshot.forEach(doc => {
          // eslint-disable-next-line
          let score = doc.data();
          score.id = doc.id;
          scoresList.push(score);
        });
        // eslint-disable-next-line
        store.commit('setScores', scoresList);
      });
  }
});

// eslint-disable-next-line
export const store = new Vuex.Store({
  state: {
    currentUser: null,
    scores: [],
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
    setScores(state, val) {
      state.scores = val;
    },
  },
});
