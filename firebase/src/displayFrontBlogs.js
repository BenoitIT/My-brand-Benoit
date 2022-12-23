import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
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
//subscribe collection
onSnapshot(colRef, (snapshot) => {
  let blogs = [];
  snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });
  let blogContainer = document.querySelector("#blog-Container");
  let blogDivsion = document.createElement("div");
  if (blogs.length > 1) {
    let threeLatestBlog = blogs.slice(-3);
    threeLatestBlog.reverse().forEach((blog) => {
      //creating element to hol image source
      let imeg = document.createElement("img");
      imeg.src = blog.image;

      let topicDivsn = document.createElement("div");
      topicDivsn.classList.add("topic");
      topicDivsn.innerHTML = blog.topic;
      //displaying blog text-title
      let TitleHeader = document.createElement("h1");
      TitleHeader.classList.add("blogHeader");
      let linktoSinglepage = document.createElement("a");
      linktoSinglepage.href = `/assets/blogs/singleBlog.html?id=${blog.id}`;
      linktoSinglepage.innerText = blog.Title;
      TitleHeader.appendChild(linktoSinglepage);
      //displaying blog text-contents
      let contentsListing = document.createElement("p");
      contentsListing.classList.add("text-contents");
      contentsListing.innerText = blog.description;
      let blogDiv = document.createElement("div");
      blogDiv.classList.add("blog");
      let blogDecriptionDiv = document.createElement("div");
      blogDecriptionDiv.classList.add("blog-description");
      blogDecriptionDiv.appendChild(topicDivsn);
      blogDecriptionDiv.appendChild(TitleHeader);
      blogDecriptionDiv.appendChild(contentsListing);
      blogDiv.appendChild(imeg);
      blogDiv.appendChild(blogDecriptionDiv);
      blogDivsion.appendChild(blogDiv);
    });
    blogContainer.appendChild(blogDivsion);
  } else {
    let blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");
    blogDiv.innerText = "no blog found";
    blogDivsion.appendChild(blogDiv);
    blogContainer.appendChild(blogDivsion);
  }
});
