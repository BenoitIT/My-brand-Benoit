

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";
import { getStorage, ref,uploadBytesResumable,getDownloadURL} from "firebase/storage";
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
const colRef = collection(db, "blogs");
//get docoments data
onSnapshot(colRef, (snapshot) => {
  let blogs = [];
  snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });
  //displaying document data
  console.log(blogs);
  let blogContainer=document.querySelector(".container");
  let blogDivsion=document.createElement('div');
  if(blogs.length>1){
    let threeLatestBlog=blogs.slice(-3);
    threeLatestBlog.reverse().forEach(blog => {
        //creating element to hol image source
      let img=document.createElement('img');
         img.src = blog.image;

      let topicDiv=document.createElement('div');
      topicDiv.classList.add('topic');
      topicDiv.innerHTML=blog.topic;
      //displaying blog text-title
      let TitleHeader=document.createElement('h1');
      TitleHeader.classList.add('blogHeader');
      let linktoSinglepage=document.createElement('a');
      linktoSinglepage.href=`/assets/blogs/singleBlog.html?id=${blog.id}`;
      linktoSinglepage.innerText=blog.Title;
       TitleHeader.appendChild(linktoSinglepage);
          //displaying blog text-contents
      let contentsListing=document.createElement('p');
      contentsListing.classList.add('text-contents');
      contentsListing.innerText=blog.description;
      let blogDiv=document.createElement('div');
      blogDiv.classList.add('blog');
      let blogDecriptionDiv=document.createElement('div');
      blogDecriptionDiv.classList.add('blog-description');
      blogDecriptionDiv.appendChild(topicDiv);
      blogDecriptionDiv.appendChild(TitleHeader);
      blogDecriptionDiv.appendChild(contentsListing);
      blogDiv.appendChild(img);
      blogDiv.appendChild(blogDecriptionDiv);
      blogDivsion.appendChild(blogDiv)
      });
      blogContainer.appendChild(blogDivsion);
    }
    else{
      let blogDiv=document.createElement('div');
      blogDiv.classList.add('blog');
      blogDiv.innerText='no blog found';
      blogDivsion.appendChild(blogDiv);
       blogContainer.appendChild(blogDivsion);
    }
});
let reader=new FileReader();
let imgView = document.querySelector(".imge-preview");
let blogImage = document.querySelector("#image-upload");
let blogTopic = document.querySelector("#topic");
let blogTitle = document.querySelector("#Title");
let quillEditor = document.querySelector("#blog-editor");
let image;
let fileItem;
let fileName;
let uploadedImageURL;
//function to becalled
function getFile(e) {
  fileItem = e.target.files[0];
  fileName = fileItem.name;
}
blogImage.addEventListener("change", (event) => {
    event.preventDefault();
    imgView.classList.add("show-preview");
    imgView.classList.remove("imge-preview");
       getFile(event);
       reader.addEventListener("load", () => {
        image=reader.result
        imgView.src =image ;
      });
      reader.readAsDataURL(fileItem);
      });

// ===== Adding blog ====
const UploadBlogForm = document.querySelector("#blog-form");
UploadBlogForm &&
  UploadBlogForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const storage=getStorage();
   let storageRef = ref(storage, "images/" + fileName);

    const uploadTask = uploadBytesResumable(storageRef, fileItem);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload get paused");
          break;
        case "running":
          console.log("Upload is running...");
          break;
      }
    },
    (error) => {

      console.log(error);
      alert("Some internal problems while uploading..");
      return false;

    },
    () => {
  // On successful image uploads
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        uploadedImageURL = downloadURL;
      addDoc(colRef,{
      topic: blogTopic.value,
      Title: blogTitle.value,
      description: quillEditor.textContent,
      created_at: serverTimestamp(),
      image: uploadedImageURL,
        }).then(() => {

      UploadBlogForm.reset();
      alert("new blog saved hhhh");
      imgView.classList.remove("imge-preview");
       UploadBlogForm.reset();

    });
 });
    }
  );

  });
