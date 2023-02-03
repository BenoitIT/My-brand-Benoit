const token=JSON.parse(localStorage.getItem('accessToken'));
const findblogid = () => {
    let parameter = new URLSearchParams(window.location.search);
    let foundId = parameter.get("id");
    return foundId;
  };
  let id = findblogid();
  fetch('https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all',{ mode: 'cors' }).then(res=>res.json()
  ).then( articles => {
    let blogs=articles.data;
    blogs.find((blog) => {
      //blog body
        if (blog._id == id) {
          let blogBody = document.querySelector(".blog-body");
          let BodyDiv = document.querySelector(".dsc");
          let h1 = document.createElement("h1");
          h1.innerText = blog.title;
          let img = document.createElement("img");
          img.src = blog.blogImage;
          let h6 = document.createElement("h6");
          let span = document.createElement("span");
          span.innerText = blog.category;
          h6.appendChild(span);
          let blogParagraph = document.createElement("p");
          blogParagraph.innerText = blog.blogDescription;
          let likeDiv = document.createElement("div");
          likeDiv.classList.add("like");
          let likeIcon = document.createElement("span");
          likeIcon.classList.add("material-icons");
          let form = document.createElement("form");
          ///commnting form
    form.classList.add("logn");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "comment";
    input.id = "comment";
    input.placeholder = "write a comment";
    input.classList.add("text-input");
    form.appendChild(input);
    let button = document.createElement("button");
    button.type="button";
    button.id = "comment-btn";
    button.classList.add("lgn-btn");
    button.innerText = "comment";
    let messDiv=document.createElement('div');
    let messSpan=document.createElement('span');
    messSpan.classList.add('welcome-mess');
    messSpan.innerText='hhdhdjdhdhjsjss';
    messDiv.classList.add('flashy');
    button.addEventListener("click",(e)=>{
      e.preventDefault();
      console.log('clicked')
      const commText = input.value
      fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/${id}/addcomment/`,
      {
      method:'POST',
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
       comment:commText
      }),
    }).then(res=>res.json()).then(message=>{
      console.log(message)
      setTimeout(()=>{
      messSpan.innerText=message.message;
      messDiv.classList.add('showup')      
      },2000)
     setInterval(()=>{
      messDiv.classList.remove('showup')
     },8000)
      })
    });
    messDiv.appendChild(messSpan);
    form.appendChild(button);
          BodyDiv.appendChild(h1);
          BodyDiv.appendChild(img);
          BodyDiv.appendChild(h6);
          BodyDiv.appendChild(blogParagraph);
          BodyDiv.appendChild(likeDiv);
          blogBody.appendChild(BodyDiv);
          blogBody.appendChild(form);
          blogBody.appendChild(messDiv);
          return blogBody;
        }
      });
}).catch(err=>{
    console.log(err)
})