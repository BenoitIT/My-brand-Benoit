//elements from blogs form
let blogForm = document.querySelector("#blog-form");
let blogTopic = document.querySelector("#topic");
let blogTitle = document.querySelector("#Title");
let blogImage = document.querySelector("#image-upload");
let quillEditor = document.querySelector("#blog-editor");
let uploadBtn = document.querySelector("#upload");
let imgView = document.querySelector("#test-img");
let image;
//loading animage
blogImage.addEventListener("change", (event) => {
  event.preventDefault();
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
  let blogs = JSON.parse(localStorage.getItem("blogList") || "[]");
  console.log(blogs);
  blogs.push(newBlog);
  alert("new blog saved in local storage");
  localStorage.setItem("blogList", JSON.stringify(blogs));
});
