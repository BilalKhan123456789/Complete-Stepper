import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3R3rH33tz7lgyRXPtm4fhWi_o4dk7Pcw",
  authDomain: "hosting-project-c92b4.firebaseapp.com",
  projectId: "hosting-project-c92b4",
  storageBucket: "hosting-project-c92b4.appspot.com",
  databaseURL: "https://hosting-project-c92b4-default-rtdb.firebaseio.com",
  messagingSenderId: "799451298848",
  appId: "1:799451298848:web:74a30b8524a7bb69261045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getDatabase(app)
const stg = getStorage(app)


export {auth,db,stg}