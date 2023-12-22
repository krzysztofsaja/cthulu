import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDW0tYPfqf5V95CgcAHQgyuhxX-oX5YnE",
    authDomain: "call-of-cthulu-paprykarz.firebaseapp.com",
    projectId: "call-of-cthulu-paprykarz",
    storageBucket: "call-of-cthulu-paprykarz.appspot.com",
    messagingSenderId: "194413661419",
    appId: "1:194413661419:web:26d09a8a7941f0f2dd02ae",
    measurementId: "G-NGZ50CNVS6"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();