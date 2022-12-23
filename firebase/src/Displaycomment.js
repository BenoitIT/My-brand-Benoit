import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
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
//comment collection
const commentRef = collection(db, "comments");
    let parameter = new URLSearchParams(window.location.search);
    let foundId = parameter.get("id");
    let commentList = document.querySelector(".comment-list");
onSnapshot(commentRef, (snapshot) => {
    let comments = [];
    snapshot.docs.forEach((doc) => {
      comments.push({ ...doc.data(), id: doc.id });
});
comments.reverse().forEach((comm) => {
    if (comm.blogId == foundId) {
      let commenting = document.createElement("div");
      commenting.classList.add("comment");
      let commentdDscription = document.createElement("comment-description");
      commentdDscription.classList.add("comment-description");
      let h1 = document.createElement("h1");
      h1.innerText = comm.email;
      let p = document.createElement("p");
      p.innerText = comm.Bcoment;
      commentdDscription.appendChild(h1);
      commentdDscription.appendChild(p);
      commenting.appendChild(commentdDscription);
      commentList.appendChild(commenting);
    }
  })
});








