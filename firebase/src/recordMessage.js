import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAr8kCqD4Wj-O70pZkT52l2ZTktKC85Fz4",
  authDomain: "my-brand-7cc53.firebaseapp.com",
  projectId: "my-brand-7cc53",
  storageBucket: "my-brand-7cc53.appspot.com",
  messagingSenderId: "9301501628",
  appId: "1:9301501628:web:09bed15352d193ad1c92b9",
};
initializeApp(firebaseConfig);
//load database
const db = getFirestore();
const messageRef=collection(db,'messages');
const contactForm=document.querySelector('.contact-message');
let quillEditor = document.querySelector("#editor");
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
       addDoc(messageRef,{
        sender:contactForm.name.value,
        email:contactForm.email.value,
        subject:contactForm.subject.value,
        message:quillEditor.textContent,
        createdAt:serverTimestamp()
    }).then(()=>{
        alert('you sent a message');
        contactForm.name.value='',
        contactForm.email.value='',
        contactForm.subject.value='',
        quillEditor.textContent='type....'
    }).catch(err=>{
        alert(err);
    })
})
