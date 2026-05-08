import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEGnnO6acAnwBTiMphxrJnakNrhFNkOkY",
  authDomain: "movieapp-9f0ba.firebaseapp.com",
  projectId: "movieapp-9f0ba",
  storageBucket: "movieapp-9f0ba.firebasestorage.app",
  messagingSenderId: "445655375164",
  appId: "1:445655375164:web:5c7ea0f574f1bfae8a5239"
};

export const app = initializeApp(firebaseConfig);