import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
//import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDqX5qoDon623Ch2QzTMriOZvk05J3aDFA",
  authDomain: "netflix-clone-5cd59.firebaseapp.com",
  projectId: "netflix-clone-5cd59",
  storageBucket: "netflix-clone-5cd59.appspot.com",
  messagingSenderId: "446398887266",
  appId: "1:446398887266:web:623dfbaf7a5df5ab80a83b",
  measurementId: "G-HMR0HWFZVL",
});
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();
export { db, auth, storage };
