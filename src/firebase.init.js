// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRi6qSwbe3kZhm4ULMPw5BvA5lwbl_m2o",
  authDomain: "mens-world.firebaseapp.com",
  projectId: "mens-world",
  storageBucket: "mens-world.appspot.com",
  messagingSenderId: "1092176604094",
  appId: "1:1092176604094:web:513c994ceb82c8ac43a7ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app)

 export default auth;