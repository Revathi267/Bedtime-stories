import firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyAqJsPCV6VOLNWKB2gQe1fjtpu8LnMqvGc",
    authDomain: "story-hub-48551.firebaseapp.com",
    projectId: "story-hub-48551",
    storageBucket: "story-hub-48551.appspot.com",
    messagingSenderId: "960737411520",
    appId: "1:960737411520:web:9abaad752341e225684825"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();