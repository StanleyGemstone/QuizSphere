// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOF-Z_ZFQhuoxPtHQWc58-Iqpouz-4pz0",
  authDomain: "quizsphere-ec61b.firebaseapp.com",
  projectId: "quizsphere-ec61b",
  storageBucket: "quizsphere-ec61b.appspot.com",
  messagingSenderId: "851061081928",
  appId: "1:851061081928:web:f6bb85e0d0270449fc957d",
  measurementId: "G-ZJ4WKMDH0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { auth };