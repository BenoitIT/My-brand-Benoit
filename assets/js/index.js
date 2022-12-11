let logo=document.querySelector("#logo");
let home=document.querySelector("#home");
let lognForm=document.querySelector("#loginPage");
let menuIcon=document.querySelector(".menu-icon");
let closeIcon=document.querySelector(".close");
let mobileMenu=document.querySelector(".mobile-menus");
logo.addEventListener('click',function(){
    lognForm.classList.add('showLogn');
    lognForm.classList.remove('hideLogn');
});
home.addEventListener('click',function(){
    lognForm.classList.remove('showLogn');
    lognForm.classList.add('hideLogn');
});
menuIcon.addEventListener('click',()=>{
    closeIcon.classList.add('make-visible');
    mobileMenu.classList.add('make-visible');
    menuIcon.classList.remove('make-visible');
    mobileMenu.classList.remove('make-invisible');
    });
closeIcon.addEventListener('click',()=>{
    mobileMenu.classList.remove('make-visible');
    mobileMenu.classList.add('make-invisible');
    closeIcon.classList.remove('make-visible');
    menuIcon.classList.add('make-visible');
   });