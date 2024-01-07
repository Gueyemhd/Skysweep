// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCB8zE53vZXXhcSHcQxKCwFNvns0BqWseU",
  authDomain: "skysweep-200a8.firebaseapp.com",
  projectId: "skysweep-200a8",
  storageBucket: "skysweep-200a8.appspot.com",
  messagingSenderId: "773671528629",
  appId: "1:773671528629:web:7849c0b5c642a9fefd36fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;