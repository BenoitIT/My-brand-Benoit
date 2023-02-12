const logout=document.querySelector("#logout");
logout.addEventListener('click',(e)=>{
  e.preventDefault();
   localStorage.setItem("accessToken","");;
    window.location.href="https://benn-dev-brand.netlify.app/";
    alert('you are logged out');

});