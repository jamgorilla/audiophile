// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC0deBvY0pXO33NiJWCL0X-a1ZflRUZ5sE',
  authDomain: 'audiophile-1c952.firebaseapp.com',
  projectId: 'audiophile-1c952',
  storageBucket: 'audiophile-1c952.appspot.com',
  messagingSenderId: '216672370923',
  appId: '1:216672370923:web:e6ab1b1ffe1c4d028abeae',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
