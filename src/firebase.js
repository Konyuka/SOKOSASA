import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

  // Soko Sasa's Firebase configuration
  var firebaseConfig = {

    apiKey: "AIzaSyDxGU0zrdbEsa4y3_-k8tp6jDksS3O0tWs",
    authDomain: "sokosasa-53a16.firebaseapp.com",
    databaseURL: "https://sokosasa-53a16.firebaseio.com",
    projectId: "sokosasa-53a16",
    storageBucket: "sokosasa-53a16.appspot.com",
    messagingSenderId: "751364117909",
    appId: "1:751364117909:web:bbb14dcb5c0c8212a1529c",
    measurementId: "G-T1JFQFETMP"

  };

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {fb,db}
