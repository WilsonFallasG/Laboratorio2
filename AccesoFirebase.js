// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsgLNMKcQMouluX6t18OMkSozTGU_VWWM",
  authDomain: "appfruit-7907e.firebaseapp.com",
  projectId: "appfruit-7907e",
  storageBucket: "appfruit-7907e.appspot.com",
  messagingSenderId: "819935578395",
  appId: "1:819935578395:web:0225c69f22d4bfeef0ebbe"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);

const auth = initializeAuth(appFireBase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { db, auth };
export default appFireBase;
