import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw41P5MxaZchdAEMR0yCPUqf0SbrseIgI",
  authDomain: "khiljee-industries.firebaseapp.com",
  projectId: "khiljee-industries",
  storageBucket: "khiljee-industries.firebasestorage.app",
  messagingSenderId: "10019143300",
  appId: "1:10019143300:web:a0ff265243eb1a4e2b4cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);