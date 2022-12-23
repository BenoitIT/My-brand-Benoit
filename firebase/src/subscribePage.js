import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
   serverTimestamp,
} from "firebase/firestore";
import { saveIntoLocalStorage, sendComment } from "./localStorageSub";
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
//get collection
//subscribe collection
const subRef = collection(db, "subscribes");
//----adding subscription--
let subscribeBtn = document.querySelector("#subscribeBtn");
let subscribes = [];
onSnapshot(subRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    subscribes.push({ ...doc.data(), id: doc.id });
  });
  //subscribe button
  let emailInput = document.querySelector("#emailForSub");
subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('check the button');
  saveIntoLocalStorage(emailInput.value);
  if (emailInput.value !== "") {
    //checking if person have arleady subscribed...
    if (subscribes.findIndex((sub) => sub.email == emailInput.value) > -1) {
      alert("you had arleady subscribed");
    } else {
      addDoc(subRef, {
        email: emailInput.value,
        created_at: serverTimestamp(),
      }).then(() => {
        alert("you successfull subscribed");
        emailInput.value = "";
      });
    }
  } else {
    alert("enter your email");
  }
});
});


