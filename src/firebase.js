import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS1CIzbGpT9tXIQyKJRYabNXvIO7AOR5Q",
  authDomain: "clone-a5cb9.firebaseapp.com",
  projectId: "clone-a5cb9",
  storageBucket: "clone-a5cb9.appspot.com",
  messagingSenderId: "673663910699",
  appId: "1:673663910699:web:9d25566288ed5a8e1b3b6e",
  measurementId: "G-27KBT0QFT1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// const provider = auth.GoogleAuthProvider();
var provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
