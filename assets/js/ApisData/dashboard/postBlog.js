const imgView = document.querySelector(".imge-preview");
const blogImage = document.querySelector("#image-upload");
const blogTopic = document.querySelector("#topic");
const blogTitle = document.querySelector("#Title");
const quillEditor = document.querySelector("#blog-editor");
const formData = new FormData();
blogImage.addEventListener("change", (event) => {
  event.preventDefault();
  const file = blogImage.files[0];

  if (file) {
    formData.append("blogImage", file);
    imgView.classList.add("show-preview");
    imgView.classList.remove("imge-preview");
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      imgView.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});
// ===== Adding blog ====
const UploadBlogForm = document.querySelector("#blog-form");
UploadBlogForm &&
  UploadBlogForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formData.append("title", blogTitle.value);
    formData.append("category", blogTopic.value);
    formData.append("blogDescription", quillEditor.textContent);

    fetch("https://dead-jade-coypu-cape.cyclic.app/Api/blogs/new", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message)
      });
  });
