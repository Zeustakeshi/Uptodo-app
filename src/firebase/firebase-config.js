// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1RMpNuyu_z-5d7ty062sJl2yqnYOogag",
    authDomain: "uptodo-f5411.firebaseapp.com",
    projectId: "uptodo-f5411",
    storageBucket: "uptodo-f5411.appspot.com",
    messagingSenderId: "495198668068",
    appId: "1:495198668068:web:af94ce421b0f0db9ba5fb1",
    measurementId: "G-VE4CCTZY9E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
