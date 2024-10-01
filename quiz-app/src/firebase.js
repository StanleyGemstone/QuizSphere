// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeW-VbVDE20n3AhXW7Aa6CReGJSreletk",
  authDomain: "quizapp-7a8e4.firebaseapp.com",
  projectId: "quizapp-7a8e4",
  storageBucket: "quizapp-7a8e4.appspot.com",
  messagingSenderId: "131678683918",
  appId: "1:131678683918:web:537545c230bf6d6cc38d5f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export default firebase;
