import { initializeApp } from "firebase/app";
import {
  getFirestore,
  } from "firebase/firestore";
  import {
   getAuth,
   createUserWithEmailAndPassword,
   confirmPasswordReset,
   signInWithEmailAndPassword,
   connectAuthEmulator
    } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAr8kCqD4Wj-O70pZkT52l2ZTktKC85Fz4",
  authDomain: "my-brand-7cc53.firebaseapp.com",
  projectId: "my-brand-7cc53",
  storageBucket: "my-brand-7cc53.appspot.com",
  messagingSenderId: "9301501628",
  appId: "1:9301501628:web:09bed15352d193ad1c92b9",
};
const firebaseApp=initializeApp(firebaseConfig);
//load database
const auth=getAuth();
const loginForm=document.querySelector("#login-form");
const signUp=document.querySelector("#lognbtn");
//adding new user
const email=loginForm.username.value;
const password=loginForm.password.value;
console.log(email);
//login new user
loginForm.addEventListener('submit',e=>{
        e.preventDefault();
signInWithEmailAndPassword(auth,email,password).then(()=>{
    alert('welcome');
})
})