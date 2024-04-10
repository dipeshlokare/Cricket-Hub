import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyACeiUbj5KW5YpnnfIY7iuaOCuPH9QAqkk",
  authDomain: "cricket-60966.firebaseapp.com",
  projectId: "cricket-60966",
  storageBucket: "cricket-60966.appspot.com",
  messagingSenderId: "793980179974",
  appId: "1:793980179974:web:31684759acddc791239587"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);