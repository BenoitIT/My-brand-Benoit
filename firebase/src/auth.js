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
//login new user
loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
    const email=loginForm.username.value;
    console.log(email);
     const password=loginForm.password.value;
  //   createUserWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
  //  const user=userCredentials.user;
  //  alert('new user created successfully');
  //  }).catch((error)=>{
  //   const erorCode=error.code;
  //   const message=error.message;
  //   alert(message)
  // });
  signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
    const user=userCredentials.user;
    alert(`${user.email} logged successfully`);
    window.location.href = 'https://benn-dev-brand.netlify.app//assets/admin/home.html';
    }).catch((error)=>{
     const erorCode=error.code;
     const message=error.message;
     alert(message)
   });
});