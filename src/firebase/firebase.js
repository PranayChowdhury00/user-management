// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBncDS3W6mEtDt3j1UqpDEp8FqCwrrmj3g",
  authDomain: "practice-firebase-again.firebaseapp.com",
  projectId: "practice-firebase-again",
  storageBucket: "practice-firebase-again.firebasestorage.app",
  messagingSenderId: "567233573578",
  appId: "1:567233573578:web:fa60ea95e3e61c3e043a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;