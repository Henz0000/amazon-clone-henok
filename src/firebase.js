import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXFxX3zPb8Xeo-ewRSL-tc1bjlLpdaCpg",
  authDomain: "heni-86244.firebaseapp.com",
  projectId: "heni-86244",
  storageBucket: "heni-86244.appspot.com",
  messagingSenderId: "721993915100",
  appId: "1:721993915100:web:8a818a4acf6c85a69ff219",
  measurementId: "G-TS9WRNBF2Z"
};

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export  { db, auth };