// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtvpE1iv_WQ_5YfxCHQLonsG5nVAReDo",
  authDomain: "my-brand-website-e9d2d.firebaseapp.com",
  databaseURL: "https://my-brand-website-e9d2d-default-rtdb.firebaseio.com",
  projectId: "my-brand-website-e9d2d",
  storageBucket: "my-brand-website-e9d2d.appspot.com",
  messagingSenderId: "723139237907",
  appId: "1:723139237907:web:a3a87845e53527858547e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {
  getDatabase,
  set,
  get,
  update,
  remove,
  ref,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getStorage,
  ref as Refs,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
const db = getDatabase();
let blogForm = document.querySelector("#blog-form");
let blogTopic = document.querySelector("#topic");
let blogTitle = document.querySelector("#Title");
let blogImage = document.querySelector("#image-upload");
let quillEditor = document.querySelector("#blog-editor");
let uploadBtn = document.querySelector("#upload");
const insertNewData = () => {
  set(ref(db, "blogs/" + blogTitle.value), {
    Topic: blogTopic.value,
    Title: blogTitle.value,
    Image: blogImage.value,
    blogDescription: quillEditor.textContent,
  })
    .then(() => {
      alert("new blog saved successfully");
    })
    .catch((err) => {
      alert(err);
    });
};
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  insertNewData();
});
