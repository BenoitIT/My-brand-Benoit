const token = JSON.parse(localStorage.getItem("accessToken"));
const loader = document.querySelector(".loade");
loader.classList.add("loading");
loader.classList.remove("loade");
fetch("https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all", { mode: "cors" })
  .then((res) => res.json())
  .then((articles) => {
    loader.classList.add("stopLoad");
    let blogs = articles.data;
    let tableData;
    blogs.forEach((blog, i) => {
      tableData += `<tr>
  <td>${blog.title}</td>
  <td>${blog.category.slice(0, 15) + ".."}</td>
  <td>${blog.blogDescription.slice(0, 30) + ".."}</td>
  <td>${blog.blogImage.slice(0, 15) + ".."}</td>
  <td><button class="dlt-btn">delete</button><button class="update" id="update">update</button>
  </td>
  </tr>`;
    });
    let tableBODY = document.querySelector("#table-body");
    tableBODY.innerHTML = tableData;

    const deleteBtn = document.querySelectorAll(".dlt-btn");
    const updateBtn = document.querySelectorAll(".update");
    let buttonIndex;
    deleteBtn.forEach((el, i) => {
      el.addEventListener("click", function () {
        loader.classList.add("loading");
        loader.classList.remove("loade");
        buttonIndex = i;
        blogs.forEach((element, i) => {
          if (i === buttonIndex) {
            fetch(
              `https://dead-jade-coypu-cape.cyclic.app/Api/blog/${element._id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setTimeout(() => {
                  loader.classList.add("stopLoad");
                  location.reload();
                }, 900);
              });
          }
        });
      });
    });
    const updateForm = document.querySelector(".update-blog-form");
    const blogTable = document.querySelector("#table-blog");
    const updateFormNative = document.querySelector(".update-form");
    const editBtn = document.querySelector("#editBtn");
    let upbuttonIndex;
    updateBtn.forEach((el, i) => {
      el.addEventListener("click", function () {
        upbuttonIndex = i;
        blogs.forEach((element, i) => {
          if (i === upbuttonIndex) {
            //adding values in inputs
            updateForm.classList.remove("remove-updateForm");
            updateForm.classList.add("show-updateForm");
            blogTable.style.opacity = "5%";
            updateFormNative.blogtopic.value = element.title;
            updateFormNative.BlogTitle.value = element.category;
            updateFormNative.contents.value = element.blogDescription;
            const formDat = new FormData();
            const blogImag = document.querySelector("#image");
            const quillEdit = document.querySelector("#content");
            blogImag.addEventListener("change", (event) => {
              event.preventDefault();
              const fille = blogImag.files[0];
              formDat.append("blogImage", fille);
            });
            editBtn.addEventListener("click", () => {
              loader.classList.add("loading");
              loader.classList.remove("loade");
              formDat.append("title", updateFormNative.blogtopic.value);
              formDat.append("category", updateFormNative.BlogTitle.value)
              formDat.append("blogDescription", quillEdit.value);
              fetch(
                `https://dead-jade-coypu-cape.cyclic.app/Api/blog/${element._id}`,
                {
                  method: "PATCH",
                  headers: {
                    "Authorization": `Bearer ${token}`,
                  },
                  body: formDat,
                }
              )
                .then((res) => res.json())
                .then((data) => {
                  alert(data.message);
                  loader.classList.add("stopLoad");
                  updateForm.classList.add("remove-updateForm");
                  updateForm.classList.remove("show-updateForm");
                  blogTable.style.opacity = "100%";
                  location.reload();
                });
            });
          }
        });
      });
    });
  });
