import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBXYefjeScheaPVal5Udo12xVH6nNXAJGk",
  authDomain: "jira-ea834.firebaseapp.com",
  databaseURL: "https://jira-ea834-default-rtdb.firebaseio.com",
  projectId: "jira-ea834",
  storageBucket: "jira-ea834.appspot.com",
  messagingSenderId: "1063540445639",
  appId: "1:1063540445639:web:9a8c6665ad7c0f84a9c9e2",
  measurementId: "G-6D6ZPKZPE1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const storage = getStorage(app);

export {
  db,
  auth,
  storage
}