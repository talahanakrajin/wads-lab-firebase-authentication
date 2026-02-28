// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ36ADMSgVtgkVeG_11Nmm2NmwMEnh33g",
  authDomain: "fir-auth-athallah.firebaseapp.com",
  projectId: "fir-auth-athallah",
  storageBucket: "fir-auth-athallah.firebasestorage.app",
  messagingSenderId: "34088031187",
  appId: "1:34088031187:web:c292e4a8898e289ba21526"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);