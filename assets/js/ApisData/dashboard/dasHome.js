const token=JSON.parse(localStorage.getItem('accessToken'));
const deleteBtn=document.querySelector("#deleteMs");
const loader=document.querySelector('.load');
loader.classList.add('loading');
loader.classList.remove('load');
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/messages/all',{
    headers: {"Authorization": `Bearer ${token}`}
},{ mode: 'cors' })
.then(res=>res.json()
).then( messages => {
  loader.classList.add('stopLoad');
  let messagesArr = messages.message;
  let tableData=" ";
  messagesArr.forEach((message,i)=>{
    tableData+=`<tr>
    <td>${i+1}</td>
    <td>${message.senderName}</td>
    <td>${message.senderEmail}</td>
    <td>${message.message.slice(0,30)+".."}</td>
    <td><button class="viewBtn">view</button>
    </td>
    </tr>`;
  })
  let tableBODY=document.getElementById("msgTbody");
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
      messagesArr.forEach((element, i)=>{
        if(i===upbuttonIndex){
  //adding values in inputs
     console.log(senderEmail)
       ViewMessgForm.classList.remove('remove-updateForm');
       ViewMessgForm.classList.add('show-updateForm');
       MsgTable.style.opacity='15%';
       senderName.innerText=element.senderName;
       senderEmail.innerText=element.senderEmail;
       senderMsg.innerText=element.message;
       deleteBtn.addEventListener('click',()=>{
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/messages/message/delete/${element._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) =>{
         if(res){
           ViewMessgForm.classList.add('remove-updateForm');
           ViewMessgForm.classList.remove('show-updateForm');
           MsgTable.style.opacity='100%';
           alert('message deleted');
           location.reload();
         }
        })
       });
       close.addEventListener('click',()=>{
        ViewMessgForm.classList.add('remove-updateForm');
        ViewMessgForm.classList.remove('show-updateForm');
        MsgTable.style.opacity='100%';
        })
        }
      })
    })
  })
} ).catch(err=>{
    console.log(err)
})

  