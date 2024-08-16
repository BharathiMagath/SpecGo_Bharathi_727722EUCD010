import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ0sMm-B_oyQAmvroHiebDOnMQB1Hno3Q",
  authDomain: "fir-9e046.firebaseapp.com",
  projectId: "fir-9e046",
  storageBucket: "fir-9e046.appspot.com",
  messagingSenderId: "314774729184",
  appId: "1:314774729184:web:bdf7b6747b71221ba4bb85"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);