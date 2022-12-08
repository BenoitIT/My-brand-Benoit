let logo=document.querySelector("#logo");
let home=document.querySelector("#home");
let lognForm=document.querySelector("#loginPage");
logo.addEventListener('click',function(){
    lognForm.classList.add('showLogn');
    lognForm.classList.remove('hideLogn');
});
home.addEventListener('click',function(){
    lognForm.classList.remove('showLogn');
    lognForm.classList.add('hideLogn');
});
