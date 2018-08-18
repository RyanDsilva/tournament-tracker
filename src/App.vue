<template>
  <v-app>
    <v-navigation-drawer app temporary absolute v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              CRMD
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile to="home">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="submit">
          <v-list-tile-content>
            <v-list-tile-title>Submit</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="admin">
          <v-list-tile-content>
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">CRMD</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="home" flat>Home</v-btn>
        <v-btn to="submit" flat>Submit</v-btn>
        <v-btn to="admin" flat>Admin</v-btn>
        <v-btn v-if="!currentUser" to="login" flat>Login</v-btn>
        <v-btn v-if="currentUser" @click="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" dark>
      <v-spacer></v-spacer>
      &copy; 2018 Ryan Dsilva
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';

const fb = require('./firebase.js');

export default {
  name: 'App',
  data() {
    return {
      drawer: null,
    };
  },
  methods: {
    logout() {
      fb.auth
        .signOut()
        .then(() => {
          this.$store.dispatch('clearData');
          this.$router.push('/login');
        })
        // eslint-disable-next-line
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);
        });
    },
  },
  computed: {
    ...mapState(['currentUser']),
  },
};
</script>
