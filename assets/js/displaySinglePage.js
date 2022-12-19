const findblogid = () => {
  let parameter = new URLSearchParams(window.location.search);
  let foundId = parameter.get("id");
  return foundId;
};
let id = findblogid();
let blogs = JSON.parse(localStorage.getItem("blogList") || "[]");
let find = blogs.find((blog) => {
  if (blog.id == id) {
    let blogBody = document.querySelector(".blog-body");
    let h1 = document.createElement("h1");
    h1.innerText = blog.Title;
    let img = document.createElement("img");
    img.src = blog.blog_Image;
    let h6 = document.createElement("h6");
    let span = document.createElement("span");
    span.innerText = blog.topic;
    h6.appendChild(span);
    let blogParagraph = document.createElement("p");
    blogParagraph.innerText = blog.blogContents;
    let likeDiv = document.createElement("div");
    likeDiv.classList.add("like");
    let likeIcon = document.createElement("span");
    likeIcon.classList.add("material-icons");
    likeIcon.innerText = "thumb_up_off_alt ";
    likeDiv.appendChild(likeIcon);
    likeDiv.innerText = "like 38";
    let form = document.createElement("form");
    form.classList.add("logn");
    let input = document.createElement("input");
    input.type = "text";
    input.name = "comment";
    input.id = "comment";
    input.placeholder = "write a comment";
    input.classList.add("text-input");
    form.appendChild(input);
    let button = document.createElement("button");
    button.id = "comment-btn";
    button.classList.add("lgn-btn");
    button.innerText = "comment";
    form.appendChild(button);
    blogBody.appendChild(h1);
    blogBody.appendChild(img);
    blogBody.appendChild(h6);
    blogBody.appendChild(blogParagraph);
    blogBody.appendChild(likeDiv);
    blogBody.appendChild(form);
    return blogBody;
  }
});
//displaying left side contents
let blogContainer = document.querySelector(".blog-list");
let blogDivsion = document.createElement("div");
let sortedArray = blogs.reverse();
//display data from local storage
sortedArray.forEach((blog) => {
  //creating element to hol image source
  let img = document.createElement("img");
  img.src = blog.blog_Image;

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
  contentsListing.innerText = blog.blogContents;
  let blogDiv = document.createElement("div");
  blogDiv.classList.add("blog");
  let blogDecriptionDiv = document.createElement("div");
  blogDecriptionDiv.classList.add("blog-description");
  blogDecriptionDiv.appendChild(topicDiv);
  blogDecriptionDiv.appendChild(TitleHeader);
  blogDecriptionDiv.appendChild(contentsListing);
  blogDiv.appendChild(img);
  blogDiv.appendChild(blogDecriptionDiv);
  blogDivsion.appendChild(blogDiv);
});
blogContainer.appendChild(blogDivsion);
