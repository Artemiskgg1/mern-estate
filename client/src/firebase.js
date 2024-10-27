// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e2a96.firebaseapp.com",
  projectId: "mern-estate-e2a96",
  storageBucket: "mern-estate-e2a96.appspot.com",
  messagingSenderId: "1035227945945",
  appId: "1:1035227945945:web:c3093af4209f0d3cad17c8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);