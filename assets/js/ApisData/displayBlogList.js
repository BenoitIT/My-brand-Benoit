
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all',{ mode: 'cors' }).then(res=>res.json()
).then( articles => {
  let blogs = articles.data
  let blogContainerr = document.querySelector(".blog-list");
  let blogDivsionn = document.createElement("div");
 let sortedArray = blogs.reverse();
 //display data from local storage
 sortedArray.forEach((blog) => {
   //creating element to hol image source
   let img = document.createElement("img");
   img.src = blog.blogImage;

   let topicDiv = document.createElement("div");
   topicDiv.classList.add("topic");
   topicDiv.innerHTML = blog.category;
   //displaying blog text-title
   let TitleHeader = document.createElement("h1");
   let linktoSinglepage = document.createElement("a");
   linktoSinglepage.href = `/assets/blogs/singleBlog.html?id=${blog._id}`;
   linktoSinglepage.innerText = blog.title;
   TitleHeader.appendChild(linktoSinglepage);
   //displaying blog text-contents
   let contentsListing = document.createElement("p");
   contentsListing.innerText = blog.blogDescription;
   let blogDiv = document.createElement("div");
   blogDiv.classList.add("blog");
   let blogDecriptionDiv = document.createElement("div");
   blogDecriptionDiv.classList.add("blog-description");
   blogDecriptionDiv.appendChild(topicDiv);
   blogDecriptionDiv.appendChild(TitleHeader);
   blogDecriptionDiv.appendChild(contentsListing);
   blogDiv.appendChild(img);
   blogDiv.appendChild(blogDecriptionDiv);
   blogDivsionn.appendChild(blogDiv);
 });
 blogContainerr.appendChild(blogDivsionn);

})

  