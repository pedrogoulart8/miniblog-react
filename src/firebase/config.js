// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDObLyWd04X_4NgGg-Ly6qpMN5PwhGZ-fg",
  authDomain: "mini-blog-e68a1.firebaseapp.com",
  projectId: "mini-blog-e68a1",
  storageBucket: "mini-blog-e68a1.appspot.com",
  messagingSenderId: "378317584786",
  appId: "1:378317584786:web:bad652da4d6dcdb8c3a94b",
  measurementId: "G-4MFC49S9GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export { db }