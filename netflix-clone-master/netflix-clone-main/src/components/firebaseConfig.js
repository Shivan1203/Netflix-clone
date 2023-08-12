import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5Ymf9L2D62jh8VXpezg3peRvK03kp9NM",
  authDomain: "netflix-clone0-bcaaa.firebaseapp.com",
  projectId: "netflix-clone0-bcaaa",
  storageBucket: "netflix-clone0-bcaaa.appspot.com",
  messagingSenderId: "280562609566",
  appId: "1:280562609566:web:acf77e72848d4a20b6ba8f",
  measurementId: "G-D2D66VSFLZ"

 // measurementId: "G-98E5YSE95K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
export { firebaseConfig, auth, db };