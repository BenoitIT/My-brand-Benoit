import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import {sendComment } from "./localStorageSub";
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
//comment collection
const commentRef = collection(db, "comments");
let subbscribes = [];
const findblogid = () => {
  let parameter = new URLSearchParams(window.location.search);
  let foundId = parameter.get("id");
  return foundId;
};
let id = findblogid();
//get subscribes data.........
onSnapshot(subRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      subbscribes.push({ ...doc.data(), id: doc.id });
    });
  });
//get docoments data.........
let commentInput = document.querySelector("#comment");
let commenBtn = document.querySelector("#comment-btn");
//get subscribe from clinet side
let subscribess = JSON.parse(localStorage.getItem("subsList") || "[]");
//colling the function to check whether a person subcribed or not
let userEmail = sendComment(subbscribes, subscribess);
commenBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('event triggered');
  let commText = commentInput.value;
  if (!userEmail) {
    alert("subscribe first please!");
  }
  addDoc(commentRef, {
    email: userEmail,
    Bcoment: commText,
    blogId: id
  }).then(() => {
    alert("you commented to this post");
    commText = "";
  });
});