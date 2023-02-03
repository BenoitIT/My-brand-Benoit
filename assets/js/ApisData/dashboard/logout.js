const logout=document.querySelector("#logout");
logout.addEventListener('click',(e)=>{
  e.preventDefault();
   localStorage.setItem("accessToken","");;
    window.location.href="http://127.0.0.1:5500/";
    alert('you are logged out');

});