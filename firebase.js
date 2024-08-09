// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP4HmV6RVHb5-2cQ9btpxoZr-Qoin1VEo",
  authDomain: "inventory-management-a08f1.firebaseapp.com",
  projectId: "inventory-management-a08f1",
  storageBucket: "inventory-management-a08f1.appspot.com",
  messagingSenderId: "613700891857",
  appId: "1:613700891857:web:b508b17434e130356401f0",
  measurementId: "G-19TT92B3S7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}