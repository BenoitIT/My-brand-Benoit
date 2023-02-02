const loginBtn=document.querySelector("#lgn-btn");
const userEmail=document.querySelector("#login-email");
const userName=document.querySelector("#login-username");
const userPassword=document.querySelector("#login-password");
const loginMessage=document.querySelector("#logn-notification");
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/admin/register',
{
method:'POST',
headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
},
body: JSON.stringify({
 userName:userName.value,
 email:userEmail.value,
 password:userPassword.value
}),
}).then(res=>res.json())
.then(data=>{
    console.log(data)
    const message=data.message;
     const accessToken=data.data;
     loginMessage.textContent=message;
     setTimeout(()=>{
         if(message!=='account successfully created'){
             loginMessage.parentElement.style.backgroundColor='salmon';
             loginMessage.parentElement.classList.add('showup');
             userEmail.value='';
             userPassword.value='';
            }
            else{
                loginMessage.parentElement.style.backgroundColor='';
                loginMessage.parentElement.classList.add('showup')
            }
     },1000)
    setInterval(()=>{
        loginMessage.parentElement.classList.remove('showup')
    },5000)
    });
})