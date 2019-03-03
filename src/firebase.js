import firebase from 'firebase';

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
