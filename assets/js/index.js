let logo=document.querySelector("#logo");
let home=document.querySelector("#home");
let lognForm=document.querySelector("#loginPage");
let menuIcon=document.querySelector(".menu-icon");
let closeIcon=document.querySelector(".close");
let mobileMenu=document.querySelector(".mobile-menus");
let body=document.querySelector(".body");
home.addEventListener('click',function(){
    lognForm.classList.remove('showLogn');
    lognForm.classList.add('hideLogn');
    body.classList.remove("add-overflow");
});
menuIcon.addEventListener('click',()=>{
    closeIcon.classList.add('make-visible');
    mobileMenu.classList.add('make-visible');
    menuIcon.classList.remove('make-visible');
    mobileMenu.classList.remove('make-invisible');
    body.classList.remove("add-overflow");
    });
closeIcon.addEventListener('click',()=>{
    mobileMenu.classList.remove('make-visible');
    mobileMenu.classList.add('make-invisible');
    closeIcon.classList.remove('make-visible');
    menuIcon.classList.add('make-visible');
    body.classList.remove("add-overflow");
   });