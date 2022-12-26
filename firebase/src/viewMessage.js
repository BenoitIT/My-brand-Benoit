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
let messages = [];
const colRef = collection(db, "messages");
onSnapshot(colRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    messages.push({ ...doc.data(), id: doc.id });
  });
  let tableData;

 messages.forEach((message,i)=>{
  tableData+=`<tr>
  <td>${i+1}</td>
  <td>${message.sender}</td>
  <td>${message.message.slice(0,30)+".."}</td>
  <td>${message.createdAt.toDate()}</td>
  <td><button class="viewBtn">view</button>
  </td>
  </tr>`;
})
let tableBODY=document.querySelector("#msgTbody");
tableBODY.innerHTML=tableData;
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



