// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6r1YkNOVoygxOfycnXZIMkNEmDljfgbU",
  authDomain: "hackathonpractise.firebaseapp.com",
  projectId: "hackathonpractise",
  storageBucket: "hackathonpractise.firebasestorage.app",
  messagingSenderId: "442908890208",
  appId: "1:442908890208:web:48104cdc9ae85ad8b5df05",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  console.log(app, db);
});

// const docRef = await addDoc(collection(db, "tasks"), {
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815,
// });
// console.log(docRef);

const querySnapshot = await getDocs(collection(db, "tasks"));
querySnapshot.forEach((doc) => {
  const data = doc.data()
  for(let key in data){
    console.log(key, data[key])
  }
});
