<template>
  <v-layout row wrap align-content-center>
    <v-form ref="form" v-model="valid" lazy-validation class="score-form">
      <v-text-field v-model="dnum" :rules="dnumRules" label="Debate No." required></v-text-field>
      <v-tabs slider-color="yellow" dark color="indigo" centered grow>
        <v-tab ripple>Proposition</v-tab>
        <v-tab ripple>Opposition</v-tab>
        <v-tab-item>
          <v-text-field v-model="prop" :rules="nameRules" :counter="5" label="Team Code Proposition" required></v-text-field>
          <v-tabs class="my-1" slider-color="yellow" dark color="indigo" centered grow>
            <v-tab ripple>Speaker 1</v-tab>
            <v-tab ripple>Speaker 2</v-tab>
            <v-tab-item class="my-1">
              <h3>Judge 1</h3>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge1.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
              <h3>Judge 2</h3>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker1.judge2.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
            </v-tab-item>
            <v-tab-item class="my-1">
              <h3>Judge 1</h3>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge1.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
              <h3>Judge 2</h3>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="pScoreObj.speaker2.judge2.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
            </v-tab-item>
          </v-tabs>
        </v-tab-item>
        <v-tab-item>
          <v-text-field v-model="opp" :rules="nameRules" :counter="5" label="Team Code Opposition" required></v-text-field>
          <v-tabs class="my-1" slider-color="yellow" dark color="indigo" centered grow>
            <v-tab ripple>Speaker 1</v-tab>
            <v-tab ripple>Speaker 2</v-tab>
            <v-tab-item class="my-1">
              <h3>Judge 1</h3>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge1.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
              <h3>Judge 2</h3>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker1.judge2.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
            </v-tab-item>
            <v-tab-item class="my-1">
              <h3>Judge 1</h3>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge1.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
              <h3>Judge 2</h3>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f1" :rules="scoreRules" label="Confidence" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f2" :rules="scoreRules" label="Organization Of Points" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f3" :rules="scoreRules" label="Quality Of Arguments" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f4" :rules="scoreRules" label="Engagement with Opposite Team" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f5" :rules="scoreRules" label="Analysis" required></v-text-field>
              <v-text-field type="number" v-model="oScoreObj.speaker2.judge2.f6" :rules="scoreRules" label="Rapport established with Partner" required></v-text-field>
            </v-tab-item>
          </v-tabs>
        </v-tab-item>
      </v-tabs>
      <div class="action-btn">
        <v-btn :disabled="!valid" @click="submit">
          submit
        </v-btn>
        <v-btn @click="clear">clear</v-btn>
      </div>
    </v-form>
    <v-container>
      <transition name="fade">
        <v-alert :value="performingRequest" type="info">
          Please Wait... Submitting Results to Server...
        </v-alert>
      </transition>
      <transition name="fade">
        <v-alert :value="errorMsg !== ''" type="error">
          {{ errorMsg }}
        </v-alert>
      </transition>
    </v-container>
  </v-layout>
</template>

<script>
import calc from '../private/calc';

const fb = require('../firebase.js');

export default {
  name: 'Submit',
  data: () => ({
    performingRequest: false,
    errorMsg: '',
    valid: true,
    dnum: '',
    prop: '',
    opp: '',
    pscore: '',
    pScoreObj: {
      speaker1: {
        judge1: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
        judge2: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
      },
      speaker2: {
        judge1: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
        judge2: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
      },
    },
    oScoreObj: {
      speaker1: {
        judge1: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
        judge2: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
      },
      speaker2: {
        judge1: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
        judge2: {
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
        },
      },
    },
    oscore: '',
    nameRules: [
      v => !!v || 'Team Code is required',
      v => (v && v.length === 5) || 'Team Code must be 5 characters',
    ],
    scoreRules: [
      v => !!v || 'Score is required',
      v => (v && v <= 4) || 'Score must be less than or equal to 4',
    ],
    dnumRules: [
      v => !!v || 'Debate Number is required',
      v => (v && v.length <= 2 && v >= 1) || 'Enter Valid Debate Number!',
    ],
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.performingRequest = true;
        this.calculate();
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
            this.performingRequest = false;
            this.$router.push('/home');
          })
          // eslint-disable-next-line
          .catch(err => {
            // eslint-disable-next-line
            console.log(err);
            this.errorMsg = err.message;
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    calculate() {
      this.pscore = calc(this.pScoreObj);
      this.oscore = calc(this.oScoreObj);
    },
  },
};
</script>

<style scoped lang="scss">
.score-form {
  width: 85%;
  margin: 1em auto;
}
.action-btn {
  margin: 0 auto;
  text-align: center;
}
</style>
