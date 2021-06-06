import firebase from "firebase/app";
import "firebase/firestore";
require('firebase/auth');

const firebaseConfig = {
    apiKey: "AIzaSyDYZSDc0XO-r8-ptGywvu6ZLIpXcxznWDc",
    authDomain: "movr-ec0a0.firebaseapp.com",
    projectId: "movr-ec0a0",
    storageBucket: "movr-ec0a0.appspot.com",
    messagingSenderId: "944679069344",
    appId: "1:944679069344:web:d3c64720a1c1c9fcdd4bc5",
    measurementId: "G-T6V3JMRN5G"
  };
  
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
export const db = fire.firestore();
export const auth = fire.auth();
