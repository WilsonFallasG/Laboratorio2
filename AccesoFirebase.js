// AccesoFirebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWJaglCFEr5RwHjOFKJKMkJbOnJv75bcA",
  authDomain: "prueba-f1803.firebaseapp.com",
  projectId: "prueba-f1803",
  storageBucket: "prueba-f1803.appspot.com",
  messagingSenderId: "591429906948",
  appId: "1:591429906948:web:9d77b0481945e3b9613b51",
  measurementId: "G-QR5RL9ZC4B"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);

export { db };
export default appFireBase;
