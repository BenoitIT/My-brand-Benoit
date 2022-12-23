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
console.log(blogs)
let table=document.querySelector("#table-blog");
//creating table structure
let headers=["Topic","blog Title",,"blog Image","blog contents","Actions"];
let headerRow=document.createElement('tr');
   headerRow.style.backgroundColor='#504874';
   headerRow.style.color='white';
headers.forEach(header=>{
    let theader=document.createElement('th');
    let textNode=document.createTextNode(header);
     theader.appendChild(textNode);
    headerRow.appendChild(theader);
})
table.appendChild(headerRow);
let tbody=document.createElement('tbody');
//loading table data
let arrayOfBlogs = JSON.parse(localStorage.getItem("blogList") || "[]");
arrayOfBlogs.forEach(blog => {
let dataRow=document.createElement('tr');
Object.values(blog).forEach(text=>{
    if(typeof text!='number'){
    let cell=document.createElement('td');
    cell.classList.add('resize-cell');
    let textNode=document.createTextNode(text.slice(0,30)+"....");
     cell.appendChild(textNode);
     dataRow.appendChild(cell);
    }
    })
let cellbutton=document.createElement('td');
    let button=document.createElement('button');
    button.classList.add("table-button");
    button.innerText='delete';
    cellbutton.appendChild(button);
    dataRow.appendChild(cellbutton);
    button.addEventListener('click',()=>{
    let blogListings = JSON.parse(localStorage.getItem("blogList") || "[]");
    const Index = blogListings.findIndex((obj) => obj.id ===blog.id);
    if (Index > -1) {
        blogListings.splice(Index, 1);
      }

       }
)
tbody.appendChild(dataRow);
table.appendChild(tbody);
});

