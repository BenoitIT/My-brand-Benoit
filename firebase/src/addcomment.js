import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
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
const findblogid = () => {
  let parameter = new URLSearchParams(window.location.search);
  let foundId = parameter.get("id");
  return foundId;
};
let id = findblogid();
//get subscribes data.........
if (id) {
  //get docoments data.........
  let commentInput = document.querySelector("#comment");
  let commenBtn = document.querySelector("#comment-btn");
  let nameInput = document.querySelector("#name-sender");
  //get subscribe from clinet side
  commenBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let commText = commentInput.value;
    if (nameInput.value === "") {
      alert("please enter your name");
    } else {
      addDoc(commentRef, {
        email: nameInput.value,
        Bcoment: commText,
        blogId: id,
      }).then(() => {
        commText = "";
        nameInput.value = "";
        alert("you commented to this post");
      });
    }
  });
}
