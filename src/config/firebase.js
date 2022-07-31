import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "moviedts2022.firebaseapp.com",
  projectId: "moviedts2022",
  storageBucket: "moviedts2022.appspot.com",
  messagingSenderId: "740486136436",
  appId: "1:740486136436:web:d6a45b324b8dcc17548721",
};

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { auth, googleProvider, twitterProvider };