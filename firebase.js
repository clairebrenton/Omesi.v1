// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajVGnPHdfI2qWUMHbBMPIcBPraZ3jzDs",
  authDomain: "omesi-3c5b9.firebaseapp.com",
  projectId: "omesi-3c5b9",
  storageBucket: "omesi-3c5b9.appspot.com",
  messagingSenderId: "249862472010",
  appId: "1:249862472010:web:0eb7d349740d2bd2d901b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
export { db, auth };