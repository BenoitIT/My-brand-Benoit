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
      commenting.appendChild(commentdDscription);
      commentList.appendChild(commenting);
    }
  });;
}).catch(err=>{
    console.log(err)
})
}