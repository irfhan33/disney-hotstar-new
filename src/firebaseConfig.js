// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQIxH-R01Um9VV1-BZ38ZhpmpYkJBI-RE",
  authDomain: "disney-hotstar-clone-16063.firebaseapp.com",
  projectId: "disney-hotstar-clone-16063",
  storageBucket: "disney-hotstar-clone-16063.appspot.com",
  messagingSenderId: "470808395371",
  appId: "1:470808395371:web:f5a0ac4fb542a865f8fb2e",
  measurementId: "G-XM0WJNEHBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
