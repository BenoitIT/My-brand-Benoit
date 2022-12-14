import { initializeApp } from "firebase/app";
import {
getFirestore,
collection,
onSnapshot,
deleteDoc,
doc,
updateDoc
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
  let tableData;

 blogs.forEach((blog,i)=>{
  tableData+=`<tr>
  <td>${blog.topic}</td>
  <td>${blog.Title.slice(0,15)+".."}</td>
  <td>${blog.description.slice(0,30)+".."}</td>
  <td>${blog.image.slice(0,15)+".."}</td>
  <td><button class="dlt-btn">delete</button><button class="update" id="update">update</button>
  </td>
  </tr>`;
})
let tableBODY=document.querySelector("#table-body");
tableBODY.innerHTML=tableData;

const deleteBtn = document.querySelectorAll('.dlt-btn')
let buttonIndex;
deleteBtn.forEach((el, i)=>{
  el.addEventListener('click', function(){
    buttonIndex=i;
    blogs.forEach((element, i)=>{
      if(i===buttonIndex){
      const docRef=doc(db,'blogs',element.id);
       deleteDoc(docRef).then(()=>{
        alert('blog is deleted');
       })
      }
    })
  })
})
const updateBtn = document.querySelectorAll('.update');
const updateForm=document.querySelector('.update-blog-form');
const blogTable=document.querySelector('#table-blog');
const updateFormNative=document.querySelector('.update-form');
const editBtn=document.querySelector('#editBtn');
let upbuttonIndex;
updateBtn.forEach((el, i)=>{
  el.addEventListener('click', function(){
    upbuttonIndex=i;
    blogs.forEach((element, i)=>{
      if(i===upbuttonIndex){
        const docRef=doc(db,'blogs',element.id);
//adding values in inputs
      updateForm.classList.remove('remove-updateForm');
      updateForm.classList.add('show-updateForm');
      blogTable.style.opacity='5%';
      updateFormNative.blogtopic.value=element.topic;
      updateFormNative.BlogTitle.value=element.Title;
      updateFormNative.contents.value=element.description;
      editBtn.addEventListener('click',()=>{
        updateDoc(docRef,{
         topic:updateFormNative.blogtopic.value,
         Title:updateFormNative.BlogTitle.value,
         description: updateFormNative.contents.value
        }).then(()=>{
          alert('update success');
        })
        updateForm.classList.add('remove-updateForm');
        updateForm.classList.remove('show-updateForm');
        blogTable.style.opacity='100%';
      })
      }
    })
  })
})
});



