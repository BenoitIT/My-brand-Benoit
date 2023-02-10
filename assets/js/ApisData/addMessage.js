const senderName=document.querySelector("#senderNam");
const email=document.querySelector("#senderEmaill");
const subject=document.querySelector("#subject");
const message=document.querySelector("#editor");
const sendMsgBtn=document.querySelector("#sendMsg");
const loadel=document.querySelector('.loadel');
const messDiv=document.querySelector(".flashme");
const messSpan=document.querySelector(".welcome-mes");
sendMsgBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    loadel.classList.add('loadin');
    loadel.classList.remove('loadel');
fetch("https://dead-jade-coypu-cape.cyclic.app/Api/messages/new",
      {
      method:'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
      },
      body: JSON.stringify({
       senderEmail:email.value,
       senderName:senderName.value,
       message:message.textContent
      })
    }).then(res=>res.json())
    .then((data) => {
        setTimeout(()=>{
        loaderr.classList.add('stopLod');
        messSpan.innerText= data.message;
        messDiv.classList.add('showup') 
      },1000)
      setInterval(()=>{
        messDiv.classList.remove('showup')
        location.reload()     
       },8000)
      });
    senderName.value='';
})