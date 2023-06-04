// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLddyBIFtLzM8e9PrHMsisf9ghm6hYjg",
  authDomain: "mensworld-1eefd.firebaseapp.com",
  projectId: "mensworld-1eefd",
  storageBucket: "mensworld-1eefd.appspot.com",
  messagingSenderId: "1076256906631",
  appId: "1:1076256906631:web:bda3cfda7f040001808722"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)

 export default auth;