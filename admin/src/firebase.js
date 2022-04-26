// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjcunf9HXsJ0Y-Og15CPAXRk2HmDQfIUQ",
  authDomain: "naemazon-1a613.firebaseapp.com",
  projectId: "naemazon-1a613",
  storageBucket: "naemazon-1a613.appspot.com",
  messagingSenderId: "103132709964",
  appId: "1:103132709964:web:d5738dcddc08db2c9820e9",
  measurementId: "G-FEPRZQVTMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
