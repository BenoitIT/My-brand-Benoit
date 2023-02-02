
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all',{ mode: 'cors' }).then(res=>res.json()
).then( articles => {
  let blogs = articles.data
  let blogContainer = document.querySelector("#blog-Container");
  let blogDivsion = document.createElement("div");
  if (blogs.length > 1) {
    let threeLatestBlog = blogs.slice(-3);
    threeLatestBlog.reverse()
    .forEach((blog) => {
      //creating element to hol image source
      let imeg = document.createElement("img");
      imeg.src = blog.blogImage;
      console.log(blog.blogImage);
      let topicDivsn = document.createElement("div");
      topicDivsn.classList.add("topic");
      topicDivsn.innerHTML = blog.title;
      //displaying blog text-title
      let TitleHeader = document.createElement("h1");
      TitleHeader.classList.add("blogHeader");
      let linktoSinglepage = document.createElement("a");
      linktoSinglepage.href = `/assets/blogs/singleBlog.html?id=${blog._id}`;
      linktoSinglepage.innerText = blog.category;
      TitleHeader.appendChild(linktoSinglepage);
      //displaying blog text-contents
      let contentsListing = document.createElement("p");
      contentsListing.classList.add("text-contents");
      contentsListing.innerText = blog.blogDescription;
      let blogDiv = document.createElement("div");
      blogDiv.classList.add("blog");
      let blogDecriptionDiv = document.createElement("div");
      blogDecriptionDiv.classList.add("blog-description");
      blogDecriptionDiv.appendChild(topicDivsn);
      blogDecriptionDiv.appendChild(TitleHeader);
      blogDecriptionDiv.appendChild(contentsListing);
      blogDiv.appendChild(imeg);
      blogDiv.appendChild(blogDecriptionDiv);
      blogDivsion.appendChild(blogDiv);
    });
    blogContainer.appendChild(blogDivsion);
  } else {
    let blogDiv = document.createElement("div");
    blogDiv.classList.add("blog");
    blogDiv.innerText = "no blog found";
    blogDivsion.appendChild(blogDiv);
    blogContainer.appendChild(blogDivsion);
  }
} ).catch(err=>{
    console.log(err)
})

  