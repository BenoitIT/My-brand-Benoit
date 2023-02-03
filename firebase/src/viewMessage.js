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
  const messageNumber = document.querySelectorAll('#count-Msg');
  messageNumber.innerText=messages.length;
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
//working on view single message
const viewBtn = document.querySelectorAll('.viewBtn');
const ViewMessgForm=document.querySelector('.message-View');
const MsgTable=document.querySelector('.table');
const close=document.querySelector('#message-close');
const senderName=document.querySelector('#nam');
const senderEmail=document.querySelector('#iml');
const senderMsg=document.querySelector('#messg');
let upbuttonIndex;
viewBtn.forEach((el, i)=>{
  el.addEventListener('click', function(){
    upbuttonIndex=i;
    messages.forEach((element, i)=>{
      if(i===upbuttonIndex){
//adding values in inputs
   console.log(senderEmail)
     ViewMessgForm.classList.remove('remove-updateForm');
     ViewMessgForm.classList.add('show-updateForm');
     MsgTable.style.opacity='15%';
     senderName.innerText=element.sender;
     senderEmail.innerText=element.email;
     senderMsg.innerText=element.message;
     close.addEventListener('click',()=>{
      ViewMessgForm.classList.add('remove-updateForm');
      ViewMessgForm.classList.remove('show-updateForm');
      MsgTable.style.opacity='100%';
      })
      }
    })
  })
})
});



