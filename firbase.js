// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_tN1ieYUnnHIt00Xa8ZQ6-ghjxY2VsYA",
  authDomain: "ai-pantry-d0c44.firebaseapp.com",
  projectId: "ai-pantry-d0c44",
  storageBucket: "ai-pantry-d0c44.appspot.com",
  messagingSenderId: "843817791053",
  appId: "1:843817791053:web:5bf8a24d2cfec1966cf604",
  measurementId: "G-816WGSBP4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export{firestore}