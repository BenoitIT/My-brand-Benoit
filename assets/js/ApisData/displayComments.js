const findblogId = () => {
    let parameter = new URLSearchParams(window.location.search);
    let foundId = parameter.get("id");
    return foundId;
  };
  let Id = findblogId();
  if(Id){
  fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blogs/blog/${Id}`,{ mode: 'cors' }).then(res=>res.json()
  ).then( articles => {
   let comments=articles.data.comments;
   let commentList = document.querySelector(".comment-list");
   comments.reverse().forEach((comm) => {
     if (comm.blog== Id) {
      let commenting = document.createElement("div");
      commenting.classList.add("comment");
      let commentdDscription = document.createElement("comment-description");
      commentdDscription.classList.add("comment-description");
      let h1 = document.createElement("h1");
      h1.innerText = comm.user;
      let p = document.createElement("p");
      p.innerText = comm.comment;
      commentdDscription.appendChild(h1);
      commentdDscription.appendChild(p);
      let actionDiv=document.createElement('div');
      actionDiv.classList.add('commentActions');
      let deleteSpan=document.createElement('span');
          deleteSpan.innerText='delete';
          deleteSpan.style.color='orange';
      let UpdateSpan=document.createElement('span');
      deleteSpan.addEventListener('click',()=>{
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/comments/delete/${comm._id}`,{
        method:'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`
      },
    })
        .then(res=>res.json())
        .then(message=>{
          alert(message.message)
          console.log(message)
        });
      })
      UpdateSpan.innerText='update';
      UpdateSpan.style.color='blue';
      UpdateSpan.addEventListener('click',()=>{
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/comments/update/${comm._id}`,{
        method:'PATCH',
        headers: {
          "Authorization": `Bearer ${token}`
      },
    })
        .then(res=>res.json())
        .then(message=>{
          alert(message.message)
          console.log(message)
        });
      })
      actionDiv.appendChild(deleteSpan);
      actionDiv.appendChild(UpdateSpan);
      commenting.appendChild(commentdDscription);
      commenting.appendChild(actionDiv);
      commentList.appendChild(commenting);
    }
  });;
}).catch(err=>{
    console.log(err)
})
}