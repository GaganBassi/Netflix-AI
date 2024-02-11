// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWCwkwsjwU-5fKcqtzzTEFhIQQC9PjaZU",
  authDomain: "netflixai-89c9e.firebaseapp.com",
  projectId: "netflixai-89c9e",
  storageBucket: "netflixai-89c9e.appspot.com",
  messagingSenderId: "284193263936",
  appId: "1:284193263936:web:4eda94d61fc5732554eaa5",
  measurementId: "G-SQ054B850W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();// As in docs of google firebase auth from getAuth() is used in fetching all the apis 
//so we will place it at a common location