import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIGbUx2RjkT_Eo6CRzBe5edHTG-8YAi1U",
  authDomain: "to-do-list-by-abdul.firebaseapp.com",
  databaseURL: "https://to-do-list-by-abdul.firebaseio.com",
  projectId: "to-do-list-by-abdul",
  storageBucket: "to-do-list-by-abdul.appspot.com",
  messagingSenderId: "744238853352",
  appId: "1:744238853352:web:483850336f5c733c4ded5d",
  measurementId: "G-MZ6E0EDVVR"
});

const db = firebaseApp.firestore();

export default db;
