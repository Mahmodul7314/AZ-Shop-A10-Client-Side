
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKWY7Ss1wRH0LbhKkvyN1hRnYBsE9PCY",
  authDomain: "az-shop-project.firebaseapp.com",
  projectId: "az-shop-project",
  storageBucket: "az-shop-project.appspot.com",
  messagingSenderId: "934952532104",
  appId: "1:934952532104:web:4ed00f9d199e9d7581c73d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;