// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQQxLwfJk3heMDYftIzwO0-mvnTDsZjI4",
  authDomain: "g-auth-85d19.firebaseapp.com",
  projectId: "g-auth-85d19",
  storageBucket: "g-auth-85d19.appspot.com",
  messagingSenderId: "976947848452",
  appId: "1:976947848452:web:4bee2017aa639690b7dc51",
  measurementId: "G-F2RCYNTX32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
