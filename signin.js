// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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

const email = "";
const password = "";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log("Sign in succeeded!", userCredential);
    console.log("Email:", userCredential.user.email);
    console.log("UID:", userCredential.user.uid);
    console.log("Access Token:", userCredential.user.stsTokenManager.accessToken);
    console.log("Refresh Token:", userCredential.user.stsTokenManager.refreshToken);
    console.log("Expiration Time:", userCredential.user.stsTokenManager.expirationTime);
  })
  .catch((error) => {
    console.log("Sign in failed!", error);
  });
