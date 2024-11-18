import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.API_KEY,
  authDomain: "chat-app-e9190.firebaseapp.com",
  projectId: "chat-app-e9190",
  storageBucket: "chat-app-e9190.firebasestorage.app",
  messagingSenderId: "751246138754",
  appId: "1:751246138754:web:88c8e4a538b9c0625b039b",
  measurementId: "G-ZBN2NJKND9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
