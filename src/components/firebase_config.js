import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { getDatabase, ref, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAxrrFC-4ckuK7s25ZRbgDg-ZRQst1oqoc",
  authDomain: "nexus-888ac.firebaseapp.com",
  projectId: "nexus-888ac",
  storageBucket: "nexus-888ac.firebasestorage.app",
  messagingSenderId: "32863052368",
  appId: "1:32863052368:web:19b6ed13ea0c920c5de755",
  measurementId: "G-DHMVZEMV38"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);
export { app, db ,database, ref, onValue};