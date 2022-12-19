//elements from blogs form
let blogForm = document.querySelector("#blog-form");
let blogTopic = document.querySelector("#topic");
let blogTitle = document.querySelector("#Title");
let blogImage = document.querySelector("#image-upload");
let quillEditor = document.querySelector("#blog-editor");
let uploadBtn = document.querySelector("#upload");
let imgView = document.querySelector(".imge-preview");
let countBlog=document.querySelector("#count-blogs");
let blogs;
let image;
//loading animage
blogImage.addEventListener("change", (event) => {
  event.preventDefault();
  imgView.classList.add("show-preview");
  imgView.classList.remove("imge-preview");
  let reader = new FileReader();
  reader.addEventListener("load", () => {
    image = reader.result;
    imgView.src = image;
  });
  reader.readAsDataURL(blogImage.files[0]);
});
//recieving inputs
uploadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newBlog = {
    id: Date.now(),
    topic: blogTopic.value,
    Title: blogTitle.value,
    blog_Image: image,
    blogContents: quillEditor.textContent,
  };
  blogTopic.value = "";
  blogImage.value = "";
  blogTitle.value = "";
  blogs = JSON.parse(localStorage.getItem("blogList") || "[]");
  blogs.push(newBlog);
  alert("new blog saved in local storage");
  localStorage.setItem("blogList", JSON.stringify(blogs));
 });
 let blogFolder = JSON.parse(localStorage.getItem("blogList") || "[]");
 countBlog.innerText=blogFolder.length;
