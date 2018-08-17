<template>
  <v-layout row wrap align-content-center>
    <v-form ref="form" v-model="valid" lazy-validation class="score-form">
      <v-text-field v-model="dnum" :rules="dnumRules" label="Debate No." required></v-text-field>
      <v-flex xs12>
        <v-text-field v-model="prop" :rules="nameRules" :counter="5" label="Team Code Proposition" required></v-text-field>
        <v-text-field v-model="pscore" :rules="scoreRules" :counter="2" label="Score" required></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field v-model="opp" :rules="nameRules" :counter="5" label="Team Code Opposition" required></v-text-field>
        <v-text-field v-model="oscore" :rules="scoreRules" :counter="2" label="Score" required></v-text-field>
      </v-flex>
      <v-btn :disabled="!valid" @click="submit">
        submit
      </v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-form>
  </v-layout>
</template>

<script>
const fb = require('../firebase.js');

export default {
  name: 'Submit',
  data: () => ({
    valid: true,
    dnum: '',
    prop: '',
    opp: '',
    pscore: '',
    oscore: '',
    nameRules: [
      v => !!v || 'Team Code is required',
      v => (v && v.length === 5) || 'Team Code must be 5 characters',
    ],
    scoreRules: [
      v => !!v || 'Score is required',
      v => (v && v.length <= 2 && v <= 20) || 'Team Score must be less than 20',
    ],
    dnumRules: [
      v => !!v || 'Debate Number is required',
      v => (v && v.length <= 2 && v >= 1) || 'Enter Valid Debate Number!',
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        fb.scores
          .add({
            dnum: this.dnum,
            prop: this.prop,
            pscore: this.pscore,
            opp: this.opp,
            oscore: this.oscore,
          })
          // eslint-disable-next-line
          .then(ref => {
            this.clear();
            this.$router.push('/home');
          })
          // eslint-disable-next-line
          .catch(err => {
            // eslint-disable-next-line
            console.log(err);
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped lang="scss">
.score-form {
  width: 75%;
  margin: 2em auto;
}
</style>
