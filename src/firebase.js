import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBG5KqYufAFVPwG9dB8Jknaqu7OBC1QSgk',
  authDomain: 'crmd-18-stuco.firebaseapp.com',
  databaseURL: 'https://crmd-18-stuco.firebaseio.com',
  projectId: 'crmd-18-stuco',
  storageBucket: 'crmd-18-stuco.appspot.com',
  messagingSenderId: '984258467854',
};
firebase.initializeApp(config);

const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const settings = {
  timestampsInSnapshots: true,
};
db.settings(settings);

const scores = db.collection('scores');

export { db, auth, currentUser, scores };
