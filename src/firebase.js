
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVbxUKFnkkJ2dzfxp0uE_ljKH-6aB8SkQ",
  authDomain: "clone-5ee20.firebaseapp.com",
  projectId: "clone-5ee20",
  storageBucket: "clone-5ee20.appspot.com",
  messagingSenderId: "896857348014",
  appId: "1:896857348014:web:ef3f661903a4b5626f5a3f",
  measurementId: "G-XW5Y40T9HQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
