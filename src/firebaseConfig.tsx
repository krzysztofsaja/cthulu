import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);