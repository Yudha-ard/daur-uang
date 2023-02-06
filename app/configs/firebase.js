import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAjf0QAVDs5nEeHyXwcmZlT4nfdvMn1ywE",
    authDomain: "daur-uang-92f3d.firebaseapp.com",
    projectId: "daur-uang-92f3d",
    storageBucket: "daur-uang-92f3d.appspot.com",
    messagingSenderId: "836480657795",
    appId: "1:836480657795:web:edbafc3062bf90189f6eb6",
    measurementId: "G-E4P526ZYPH"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth()
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { auth, db, timestamp }