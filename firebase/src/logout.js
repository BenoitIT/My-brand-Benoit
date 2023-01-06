import { initializeApp } from "firebase/app";
import {
  getFirestore,
  } from "firebase/firestore";
  import {
   getAuth,
   signOut
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
const logout=document.querySelector("#logout");
//adding new user
//login new user
logout.addEventListener('click',(e)=>{
  e.preventDefault();
signOut(auth).then(()=>{
    alert('you are logged out');
}).catch((error)=>{
    const errorCode=error.code;
    const message=error.message;
    alert(message)
})
});