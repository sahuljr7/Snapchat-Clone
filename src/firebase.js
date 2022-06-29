import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCjqGXyobfnLtbUj6VSLN40qMWwxxp1JD4",
  authDomain: "snapchat-clone-yt-c12f4.firebaseapp.com",
  projectId: "snapchat-clone-yt-c12f4",
  storageBucket: "snapchat-clone-yt-c12f4.appspot.com",
  messagingSenderId: "865567601097",
  appId: "1:865567601097:web:28d7c54afb94cc5f887818"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
