import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiObdI7cwxU6CQH735JBIkp3suZA5ik8U",
  authDomain: "doctor-booking-b3b91.firebaseapp.com",
  projectId: "doctor-booking-b3b91",
  storageBucket: "doctor-booking-b3b91.appspot.com",
  messagingSenderId: "994124099557",
  appId: "1:994124099557:web:7a1bbbe992745a1e9a090c",
  measurementId: "G-VRD6445FST"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;