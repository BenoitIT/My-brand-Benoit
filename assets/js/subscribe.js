let subscribeBtn = document.querySelector("#subscribeBtn");
let emailInput = document.querySelector("#emailForSub");

subscribeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(emailInput.value!==""){
    console.log('event cliked');
    let newSub = {
      SubId: Date.now(),
      email: emailInput.value
       };

    emailInput.value="";
    let subscribes = JSON.parse(localStorage.getItem("subsList") || "[]");
    const checkEmail=subscribes.findIndex(sub=>sub.email==newSub.email);
      if(checkEmail<1){
        console.log(newSub)
        subscribes.push(newSub);
        localStorage.setItem("subsList", JSON.stringify(subscribes));
        alert("you successfully subcribed");
     }
     else{
        alert('you have already subscribed');
     }
    }else{
        alert('enter you email please');
    }
}
);
