import firebase from "firebase"

import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCR2wOYpVaNHUAXLHSnp2mI58vF8skArPc",
    authDomain: "react-native-firebase-6ea8c.firebaseapp.com",
    projectId: "react-native-firebase-6ea8c",
    storageBucket: "react-native-firebase-6ea8c.appspot.com",
    messagingSenderId: "192705508299",
    appId: "1:192705508299:web:0729ebb35e4d9753bfbc4e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default{
    firebase,
    db,
  }