import { getAuth } from "firebase/auth";
import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyD1RMpNuyu_z-5d7ty062sJl2yqnYOogag",
    authDomain: "uptodo-f5411.firebaseapp.com",
    projectId: "uptodo-f5411",
    storageBucket: "uptodo-f5411.appspot.com",
    messagingSenderId: "495198668068",
    appId: "1:495198668068:web:af94ce421b0f0db9ba5fb1",
    measurementId: "G-VE4CCTZY9E",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
