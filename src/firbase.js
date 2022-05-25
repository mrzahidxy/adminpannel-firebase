
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5z40HKMiANKOfmvAiJW7wl0pVELMFHsY",
  authDomain: "admin-pannel-43431.firebaseapp.com",
  projectId: "admin-pannel-43431",
  storageBucket: "admin-pannel-43431.appspot.com",
  messagingSenderId: "644707432682",
  appId: "1:644707432682:web:9c65ddbcf8137f19e97f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
