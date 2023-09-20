// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Create a dummy user
const email = "";
const password = "";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Sign up succeeded!", userCredential);
  })
  .catch((error) => {
    console.log("Sign in failed!", error);
  });
