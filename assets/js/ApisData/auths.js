const userEmail=document.querySelector("#login-email");
const userPassword=document.querySelector("#login-password");
const loginBtn=document.querySelector("#lgn-btn");
const loginMessage=document.querySelector("#logn-notification");
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/admin/login',
{
method:'POST',
headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
},
body: JSON.stringify({
 email:userEmail.value,
 password:userPassword.value
}),
}).then(res=>res.json())
.then(data=>{
    console.log(data)
    const message=data.message;
     const accessToken=data.data;
     const isAdmin=data.role;
     loginMessage.textContent=message;
     setTimeout(()=>{
         if(message!=='welcome'){
             loginMessage.parentElement.style.backgroundColor='salmon';
             loginMessage.parentElement.classList.add('showup');
             userEmail.value='';
             userPassword.value='';
            }
            else{
                loginMessage.parentElement.style.backgroundColor='';
                loginMessage.parentElement.classList.add('showup')
            }
     },900)
    setInterval(()=>{
        loginMessage.parentElement.classList.remove('showup')
    },5000)
    if(accessToken){
        localStorage.setItem("accessToken",JSON.stringify(accessToken));
        if(isAdmin){
            window.location.href = 'http://127.0.0.1:5500//assets/admin/home.html';
        }else{
          window.location.href = 'http://127.0.0.1:5500/assets/blogs/singleBlog.html?id=63db4ab63b4b3b58d16b87f7';  
        }
    }
    });
})
