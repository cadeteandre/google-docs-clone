// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpItbvEffFa_A5D9ya4zRXGl724l-BfbY",
  authDomain: "docs-clone-486d1.firebaseapp.com",
  projectId: "docs-clone-486d1",
  storageBucket: "docs-clone-486d1.firebasestorage.app",
  messagingSenderId: "341085003902",
  appId: "1:341085003902:web:204df3e484e10673e0f82f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);