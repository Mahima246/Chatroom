import firebase from 'firebase'
import firestore from 'firestore/firebase'
var firebaseConfig = {
    apiKey: "AIzaSyB9xrfwD17GNd9ON0kgzrKjJ4MXosBaMQA",
    authDomain: "chatroom-16774.firebaseapp.com",
    databaseURL: "https://chatroom-16774.firebaseio.com",
    projectId: "chatroom-16774",
    storageBucket: "chatroom-16774.appspot.com",
    messagingSenderId: "916899545399",
    appId: "1:916899545399:web:c05e21ddeed3b1b32e9ab2",
    measurementId: "G-WLGNWBRGBZ"
  };
  // Initialize Firebase
  const fba=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  fba.firestore().settings({ timestampsInSnapshots : true })

  export default fba.firestore()