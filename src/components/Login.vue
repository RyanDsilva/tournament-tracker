<template>
  <div>
    <div class="display-2 text-xs-center">
      Login
    </div>
    <v-form class="login-form-crmd">
      <v-text-field v-model="email" type="email" :rules="emailRules" label="E-mail" required validate-on-blur></v-text-field>
      <v-text-field v-model="password" type="password" :rules="passRules" label="Password" required validate-on-blur></v-text-field>
      <v-btn class="my-4" @click="login">
        submit
      </v-btn>
    </v-form>
    <v-container>
      <transition name="fade">
        <v-alert :value="performingRequest" type="info">
          Please Wait... Logging You In...
        </v-alert>
      </transition>
      <transition name="fade">
        <v-alert :value="errorMsg !== ''" type="error">
          {{ errorMsg }}
        </v-alert>
      </transition>
    </v-container>
  </div>
</template>

<script>
const fb = require('../firebase.js');

export default {
  name: 'Login',
  data() {
    return {
      performingRequest: false,
      errorMsg: '',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      passRules: [v => !!v || 'Password is required'],
    };
  },
  methods: {
    login() {
      this.performingRequest = true;
      fb.auth
        .signInWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line
        .then(user => {
          this.$store.commit('setCurrentUser', user);
          this.performingRequest = false;
          this.$router.push('/submit');
        })
        // eslint-disable-next-line
        .catch(err => {
          this.performingRequest = false;
          // eslint-disable-next-line
          console.log(err);
          this.errorMsg = err.message;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login-form-crmd {
  width: 75%;
  margin: 2em auto;
}
</style>
