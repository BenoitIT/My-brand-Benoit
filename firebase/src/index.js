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
import { displayBlist } from "./displayFrontBlogs";
import { leftSideBlogs } from "./displayBleftSide";
import { getClickedBlog } from "./chosenBlog";
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
const subRef=collection(db,'subscribes');
let blogs = [];
const findblogid = () => {
  let parameter = new URLSearchParams(window.location.search);
  let foundId = parameter.get("id");
  return foundId;
};
let id = findblogid();
//get docoments data.........
onSnapshot(colRef, (snapshot) => {
   snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });
  if(!id){
    displayBlist(blogs);
  }
  leftSideBlogs(blogs);
 });
// //displaying document data.......................................
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
onSnapshot(colRef, (snapshot) => {
  let blogs = [];
  snapshot.docs.forEach((doc) => {
    blogs.push({ ...doc.data(), id: doc.id });
  });
   getClickedBlog(blogs,id)
    });
   //----adding subscription--
   let subscribes = [];
   onSnapshot(subRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
      subscribes.push({ ...doc.data(), id: doc.id });
    });
      });
   let subscribeBtn = document.querySelector("#subscribeBtn");
   let emailInput = document.querySelector("#emailForSub");
     subscribeBtn.addEventListener("click", (e) => {
     e.preventDefault();
     if(emailInput.value!==''){
      //checking if person have arleady subscribed...
      if(subscribes.findIndex(sub=>sub.email==emailInput.value)>-1){
        alert('you had arleady subscribed');
      }
      else{
        addDoc(subRef,{
          email: emailInput.value,
           created_at: serverTimestamp(),
            }).then(() => {
           alert("you successfull subscribed");
          emailInput.value='';
        });
      }}
 else{
   alert('enter your email');
 }});
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
    });
  });

