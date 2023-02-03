let reader = new FileReader();
let imgView = document.querySelector(".imge-preview");
let blogImage = document.querySelector("#image-upload");
let blogTopic = document.querySelector("#topic");
let blogTitle = document.querySelector("#Title");
let quillEditor = document.querySelector("#blog-editor");
let image;
let fileItem;
let fileName;
let uploadedImageURL;
//function to becalled
function getFile(e) {
  fileItem = e.target.files[0];
  fileName = fileItem.name;
}
blogImage.addEventListener("change", (event) => {
  event.preventDefault();
  imgView.classList.add("show-preview");
  imgView.classList.remove("imge-preview");
  getFile(event);
  reader.addEventListener("load", () => {
    image = reader.result;
    imgView.src = image;
  });
  reader.readAsDataURL(fileItem);
});
// ===== Adding blog ====
const UploadBlogForm = document.querySelector("#blog-form");
UploadBlogForm &&
  UploadBlogForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("https://dead-jade-coypu-cape.cyclic.app/Api/blogs/new",
      {
      method:'POST',
      headers: {
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        title: blogTopic.value,
        category: blogTitle.value,
        blogDescription: quillEditor.textContent,
        blogImage:image,
      }),
    }).then(res=>res.json())
     .then(data=>console.log(data));
  });
