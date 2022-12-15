let blogContainer=document.querySelector(".container");
let blogDivsion=document.createElement('div');
//display data from local storage
let blogs = JSON.parse(localStorage.getItem("blogList") || "[]");
blogs.forEach(blog => {
    //creating element to hol image source
  let img=document.createElement('img');
     img.src = blog.blog_Image;

  let topicDiv=document.createElement('div');
  topicDiv.classList.add('topic');
  topicDiv.innerHTML=blog.topic;
  //displaying blog text-title
  let TitleHeader=document.createElement('h1');
  TitleHeader.classList.add('blogHeader');
  let linktoSinglepage=document.createElement('a');
  linktoSinglepage.href=`/assets/blogs/singleBlog.html?id=${blog.id}`;
  linktoSinglepage.innerText=blog.Title;
   TitleHeader.appendChild(linktoSinglepage);
      //displaying blog text-contents
  let contentsListing=document.createElement('p');
  contentsListing.classList.add('text-contents');
  contentsListing.innerText=blog.blogContents;
  let blogDiv=document.createElement('div');
  blogDiv.classList.add('blog');
  let blogDecriptionDiv=document.createElement('div');
  blogDecriptionDiv.classList.add('blog-description');
  blogDecriptionDiv.appendChild(topicDiv);
  blogDecriptionDiv.appendChild(TitleHeader);
  blogDecriptionDiv.appendChild(contentsListing);
  blogDiv.appendChild(img);
  blogDiv.appendChild(blogDecriptionDiv);
  blogDivsion.appendChild(blogDiv)
  });
  blogContainer.appendChild(blogDivsion);

