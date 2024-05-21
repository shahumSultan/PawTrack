import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCYzd5nqR5gbIEklCOhUnovci7COu79sg",
  authDomain: "pawtrack-4e671.firebaseapp.com",
  projectId: "pawtrack-4e671",
  storageBucket: "pawtrack-4e671.appspot.com",
  messagingSenderId: "749892528749",
  appId: "1:749892528749:web:972c0ea047c02620d62d64"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);