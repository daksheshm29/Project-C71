import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyBtOqobODSdVKG4vy9oiVqlXvRLnYKs1Yw",
  authDomain: "complaint-forum-d335a.firebaseapp.com",
  projectId: "complaint-forum-d335a",
  storageBucket: "complaint-forum-d335a.appspot.com",
  messagingSenderId: "322882483684",
  appId: "1:322882483684:web:8e1bd24081efed6a3743f1"

};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

