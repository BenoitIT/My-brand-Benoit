export function saveIntoLocalStorage(value){
    if (value !== "") {
        let subscribess = JSON.parse(localStorage.getItem("subsList") || "[]");
        const checkEmail = subscribess.findIndex((sub) => sub.email == value);
        if (checkEmail === -1) {
            let newSubb = {
                 email: value,
              };
          console.log(newSubb);
          subscribess.push(newSubb);
          localStorage.setItem("subsList", JSON.stringify(subscribess));
            }
        }
}
export function sendComment(subs,localSub){
    let email;
   subs.forEach(sub=> {
       if(sub.email===localSub[0].email){
         email = sub.email
       }
   });
   return email;
   }