// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Z4nahKThaiYme2vQr3RNV8jCiKrUqiA",
  authDomain: "webartsfac.firebaseapp.com",
  projectId: "webartsfac",
  storageBucket: "webartsfac.appspot.com",
  messagingSenderId: "905400064395",
  appId: "1:905400064395:web:d0e6fb32c762614415378e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;