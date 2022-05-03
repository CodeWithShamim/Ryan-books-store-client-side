import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDgu7flcMfMAhGKvSv5jHyzEF-sdCfFaYA",
    authDomain: "ryan-books-store.firebaseapp.com",
    projectId: "ryan-books-store",
    storageBucket: "ryan-books-store.appspot.com",
    messagingSenderId: "362494761860",
    appId: "1:362494761860:web:13cc9c4d1c122ac40e5bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;