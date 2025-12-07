import firestore from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8tLONIaRm8dZxC45VDglNaPo4MstPYHQ",
  authDomain: "clone-5e17d.firebaseapp.com",
  projectId: "clone-5e17d",
  storageBucket: "clone-5e17d.firebasestorage.app",
  messagingSenderId: "866888288560",
  appId: "1:866888288560:web:ed0fd8f31ddbef293b20f5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()