// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLtGJ3958iQBZBMrBd4TnFnnQYvZ2ZX4",
  authDomain: "serviney-8512c.firebaseapp.com",
  projectId: "serviney-8512c",
  storageBucket: "serviney-8512c.firebasestorage.app",
  messagingSenderId: "852192614164",
  appId: "1:852192614164:web:05052d9e5f9061485b9401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);