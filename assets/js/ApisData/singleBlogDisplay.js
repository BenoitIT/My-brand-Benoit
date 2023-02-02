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
          likeIcon.innerText = "thumb_up_off_alt ";
          likeDiv.appendChild(likeIcon);
          likeDiv.innerText = "like 38";
    
          BodyDiv.appendChild(h1);
          BodyDiv.appendChild(img);
          BodyDiv.appendChild(h6);
          BodyDiv.appendChild(blogParagraph);
          BodyDiv.appendChild(likeDiv);
          blogBody.appendChild(BodyDiv);
          return blogBody;
        }
      });
}).catch(err=>{
    console.log(err)
})