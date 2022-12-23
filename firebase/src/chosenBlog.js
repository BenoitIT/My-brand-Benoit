import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot,addDoc } from "firebase/firestore";
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
//blogs collections
const colRef = collection(db, "blogs");
const findblogid = () => {
  let parameter = new URLSearchParams(window.location.search);
  let foundId = parameter.get("id");
  return foundId;
};
let id = findblogid();
onSnapshot(colRef, (snapshot) => {
  let blogs = [];
  snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });

   blogs.find((blog) => {
    if (blog.id == id) {
      let blogBody = document.querySelector(".blog-body");
      let BodyDiv = document.querySelector(".dsc");
      let h1 = document.createElement("h1");
      h1.innerText = blog.Title;
      let img = document.createElement("img");
      img.src = blog.image;
      let h6 = document.createElement("h6");
      let span = document.createElement("span");
      span.innerText = blog.topic;
      h6.appendChild(span);
      let blogParagraph = document.createElement("p");
      blogParagraph.innerText = blog.description;
      let likeDiv = document.createElement("div");
      likeDiv.classList.add("like");
      let likeIcon = document.createElement("span");
      likeIcon.classList.add("material-icons");
      likeIcon.innerText = "thumb_up_off_alt ";
      likeDiv.appendChild(likeIcon);
      likeDiv.innerText = "like 38";

      BodyDiv.appendChild(h1);
      BodyDiv.appendChild(img);
      BodyDiv.appendChild(h6);
      BodyDiv.appendChild(blogParagraph);
      BodyDiv.appendChild(likeDiv);
      blogBody.appendChild(BodyDiv);
      return blogBody;
    }
  });
});
