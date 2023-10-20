import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDV0cfWI1cQodtxx0AR1AJNcFPUrMyjZpc",
  authDomain: "lifedev-oj.firebaseapp.com",
  projectId: "lifedev-oj",
  storageBucket: "lifedev-oj.appspot.com",
  messagingSenderId: "125539635168",
  appId: "1:125539635168:web:9c4712949fcdb5d15e6585",
  measurementId: "G-7QXG9E56VF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};