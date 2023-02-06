const loginBtn=document.querySelector("#lgn-btn");
const userEmail=document.querySelector("#login-email");
const userName=document.querySelector("#login-username");
const userPassword=document.querySelector("#login-password");
const loginMessage=document.querySelector("#logn-notification");
const loader=document.querySelector('.loader');
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    loader.classList.add('loading');
    loader.classList.remove('loader');
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
.then(responses=>{
    console.log(responses)
    const message=responses.message;
     const accessToken=responses.data;
     const isAdmin=responses.role;
     loginMessage.textContent=message;
     setTimeout(()=>{
        loader.classList.add('stopLoad');
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
    if(accessToken){
        localStorage.setItem("accessToken",JSON.stringify(accessToken));
        if(isAdmin){
            window.location.href = 'https://benn-dev-brand.netlify.app/assets/admin/home.html';
        }else{
          window.location.href = 'https://benn-dev-brand.netlify.app/assets/blogs/singleBlog.html?id=63db4ab63b4b3b58d16b87f7';  
        }
    }
    });
})