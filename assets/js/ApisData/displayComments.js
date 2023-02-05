const findblogId = () => {
    let parameter = new URLSearchParams(window.location.search);
    let foundId = parameter.get("id");
    return foundId;
  };
  const token=JSON.parse(localStorage.getItem('accessToken'));
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
      const loader=document.createElement('div');
      loader.classList.add('smallLoader');
      const innerLine=document.createElement('div');
      innerLine.classList.add('inner');
      innerLine.classList.add('one');
      const outerLine=document.createElement('div');
      outerLine.classList.add('inner');
      outerLine.classList.add('three');
      loader.appendChild(innerLine);;
      loader.appendChild(outerLine);
      let actionDiv=document.createElement('div');
      actionDiv.classList.add('commentActions');
      let deleteSpan=document.createElement('span');
          deleteSpan.innerText='delete';
          deleteSpan.style.color='orange';
      let UpdateSpan=document.createElement('span');
      deleteSpan.addEventListener('click',()=>{
        commenting.appendChild(loader);
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/comments/delete/${comm._id}`,{
        method:'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`
      },
    })
        .then(res=>res.json())
        .then(message=>{
         commenting.removeChild(loader)
          alert(message.message);
          setTimeout(()=>{
            location.reload()
          },500);
          console.log(message)
        });
      })
      UpdateSpan.innerText='update';
      UpdateSpan.style.color='blue';
      UpdateSpan.addEventListener('click',()=>{
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/comments/${comm._id}`,{
          headers: {
            "Authorization": `Bearer ${token}`
          },
        })
        .then(res=>res.json())
        .then(message=>{
          
          let form = document.createElement("form");
          ///commnting form
          form.classList.add("logn");
          let input = document.createElement("input");
          input.type = "text";
          input.name = "comment";
          input.id = "comment";
          input.value= message.data.comment;
          input.classList.add("text-input");
          form.appendChild(input);
          let button = document.createElement("button");
          button.type="button";
          button.id = "comment-btn";
          button.classList.add("lgn-btn");
          button.innerText = "edit";
          button.addEventListener('click',()=>{
            commenting.appendChild(loader);
            fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/comments/update/${comm._id}`,{
            method:'PATCH',
            headers: {
              "Authorization": `Bearer ${token}`
          },
          body:JSON.stringify({
            comment:input.value
          }),
        })
            .then(res=>res.json())
            .then(message=>{
              commenting.removeChild(loader)
              alert(message.message)
              setTimeout(()=>{
                location.reload()
              },500);
              console.log(message)
            });

          })
          form.appendChild(button);
          commentList.appendChild(form);
          console.log(message)
        });  
        commenting.appendChild(loader);
      })
      actionDiv.appendChild(deleteSpan);
      actionDiv.appendChild(UpdateSpan);
      commenting.appendChild(commentdDscription);
      commenting.appendChild(actionDiv);
      commentList.appendChild(commenting);
    }
  });
}).catch(err=>{
    console.log(err)
})
}