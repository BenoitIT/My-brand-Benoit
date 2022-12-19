let senderNam=document.getElementById("senderNam");
let senderEmaill=document.querySelector("#senderEmaill");
let subjectTxt=document.querySelector("#subjec");
let Msg=document.querySelector("#editor");
let sendMsgBtn=document.querySelector("#sendMsg");
sendMsgBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(senderNam.innerHTML);
    let newMesage={
    senderName:senderNam.Value,
    senderEmail:senderEmaill.Value,
    subject:subjectTxt.Value,
    Message:Msg.Value
   };
   let MessageFile=JSON.parse(localStorage.getItem("messages")||"[]");
     MessageFile.push(newMesage);
     alert('message sent!');
     localStorage.setItem("messages",JSON.stringify(MessageFile));
});