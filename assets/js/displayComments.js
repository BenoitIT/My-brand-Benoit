const fiblogid=()=>{
    let parameter=new URLSearchParams(window.location.search);
    let foundId=parameter.get("id");
    return foundId;
}
let Bid=fiblogid();
console.log(Bid);
let commentList=document.querySelector('.comment-list');
let comments = JSON.parse(localStorage.getItem("comment-List") || "[]");
comments.forEach(comm=>{
    if (comm.blogId==Bid){
    let commenting=document.createElement('div');
    commenting.classList.add('comment');
  let commentdDscription=document.createElement('comment-description');
  commentdDscription.classList.add('comment-description');
      let h1=document.createElement('h1');
      h1.innerText=comm.email;
      let p=document.createElement('p');
      p.innerText=comm.Bcoment;
      commentdDscription.appendChild(h1);
      commentdDscription.appendChild(p);
      commenting.appendChild(commentdDscription);
    commentList.appendChild(commenting);
       return commentList;
       location.reload();
        }
   })

