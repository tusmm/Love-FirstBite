import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import '@firebase/auth';
import 'firebase/compat/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBhmcVvwTDfEbWW0E4VBZmm-tU0PbB-9Tw",
  authDomain: "loveatfirstbite-e8ec1.firebaseapp.com",
  projectId: "loveatfirstbite-e8ec1",
  storageBucket: "loveatfirstbite-e8ec1.appspot.com",
  messagingSenderId: "962853600638",
  appId: "1:962853600638:web:0669563b8f65e6878c472f",
  measurementId: "G-ZCY3X9RE14"
};

// const app = initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };