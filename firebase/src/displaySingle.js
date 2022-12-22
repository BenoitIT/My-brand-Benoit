import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    onSnapshot,
    addDoc,
    deleteDoc,
    serverTimestamp
  }from "firebase/firestore";
  const firebaseConfig = {
    apiKey: "AIzaSyAr8kCqD4Wj-O70pZkT52l2ZTktKC85Fz4",
    authDomain: "my-brand-7cc53.firebaseapp.com",
    projectId: "my-brand-7cc53",
    storageBucket: "my-brand-7cc53.appspot.com",
    messagingSenderId: "9301501628",
    appId: "1:9301501628:web:09bed15352d193ad1c92b9",
  };
  initializeApp(firebaseConfig);
  const db = getFirestore();
   let blogs = [];
    const colRef = collection(db, "blogs");
    onSnapshot(colRef, (snapshot) => {
           snapshot.docs.forEach((doc) => {
          blogs.push({ ...doc.data(), id: doc.id });
        });
    });
    export function displayBlogList(){
    let blogContainerr = document.querySelector(".blog-list");
      let blogDivsionn = document.createElement("div");
      let sortedArray = blogs.reverse();
      console.log(blogs+'hthose')
      //display data from local storage
      sortedArray.forEach((blog) => {
        //creating element to hol image source
        let img = document.createElement("img");
        img.src = blog.image;

        let topicDiv = document.createElement("div");
        topicDiv.classList.add("topic");
        topicDiv.innerHTML = blog.topic;
        //displaying blog text-title
        let TitleHeader = document.createElement("h1");
        let linktoSinglepage = document.createElement("a");
        linktoSinglepage.href = `/assets/blogs/singleBlog.html?id=${blog.id}`;
        linktoSinglepage.innerText = blog.Title;
        TitleHeader.appendChild(linktoSinglepage);
        //displaying blog text-contents
        let contentsListing = document.createElement("p");
        contentsListing.innerText = blog.description;
        let blogDiv = document.createElement("div");
        blogDiv.classList.add("blog");
        let blogDecriptionDiv = document.createElement("div");
        blogDecriptionDiv.classList.add("blog-description");
        blogDecriptionDiv.appendChild(topicDiv);
        blogDecriptionDiv.appendChild(TitleHeader);
        blogDecriptionDiv.appendChild(contentsListing);
        blogDiv.appendChild(img);
        blogDiv.appendChild(blogDecriptionDiv);
        blogDivsionn.appendChild(blogDiv);
      });
      blogContainerr.appendChild(blogDivsionn);
      return blogContainerr;
    }

