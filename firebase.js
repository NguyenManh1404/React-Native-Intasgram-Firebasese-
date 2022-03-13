
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyD_-obJZAGpU8yrJkn1fX-O_pTwqYg-vQw",
  authDomain: "rn-instagram-clone-625e8.firebaseapp.com",
  databaseURL: "https://rn-instagram-clone-625e8-default-rtdb.firebaseio.com",
  projectId: "rn-instagram-clone-625e8",
  storageBucket: "rn-instagram-clone-625e8.appspot.com",
  messagingSenderId: "900955254642",
  appId: "1:900955254642:web:ae698aea5005edc3bdb7eb"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);  
const auth = getAuth(app);
export { storage, auth };