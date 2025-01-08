// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALzOVFNvkhmAzQEIauPbedngrrtT-h4SA",
  authDomain: "dynamic-route-67774.firebaseapp.com",
  projectId: "dynamic-route-67774",
  storageBucket: "dynamic-route-67774.appspot.com",
  messagingSenderId: "733758416820",
  appId: "1:733758416820:web:0d14e48bb62bef628a34e1",
  measurementId: "G-5RHSG4NSX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)