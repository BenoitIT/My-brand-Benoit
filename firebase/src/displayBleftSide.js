 export function leftSideBlogs(arr){
     // //displaying left side blog list...................................
  let blogContainerr = document.querySelector(".blog-list");
   let blogDivsionn = document.createElement("div");
  let sortedArray = arr.reverse();
  //display data from local storage
  sortedArray.forEach((blog) => {
    //creating element to hol image source
    let img = document.createElement("img");
    img.src = blog.image;

    let topicDiv = document.createElement("div");
    topicDiv.classList.add("topic");
    topicDiv.innerHTML = blog.topic;
    //displaying blog text-title
    let TitleHeader = document.createElement("h1");
    let linktoSinglepage = document.createElement("a");
    linktoSinglepage.href = `/assets/blogs/singleBlog.html?id=${blog.id}`;
    linktoSinglepage.innerText = blog.Title;
    TitleHeader.appendChild(linktoSinglepage);
    //displaying blog text-contents
    let contentsListing = document.createElement("p");
    contentsListing.innerText = blog.description;
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


 }