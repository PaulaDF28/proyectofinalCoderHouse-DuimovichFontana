import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0tQJMqJ_LKFjV-9JNnGJwqWDZ8OCbkp4",
  authDomain: "e-commerce24-e3599.firebaseapp.com",
  projectId: "e-commerce24-e3599",
  storageBucket: "e-commerce24-e3599.appspot.com",
  messagingSenderId: "744006716929",
  appId: "1:744006716929:web:aff504acaa4946f18bfa00",
  measurementId: "G-VZWE8ME1L3"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
const analytics = getAnalytics(app);