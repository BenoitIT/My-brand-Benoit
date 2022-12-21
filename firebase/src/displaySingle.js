import {
    getFirestore,
    collection,
    onSnapshot,
     } from "firebase/firestore";
  const db = getFirestore();
//get collection
const colRef = collection(db, "blogs");
onSnapshot(colRef, (snapshot) => {
    let blogs = [];
    snapshot.docs.forEach((doc) => {
      blogs.push({ ...doc.data(), id: doc.id });
    });
    const findblogid = () => {
        let parameter = new URLSearchParams(window.location.search);
        let foundId = parameter.get("id");
        return foundId;
      };
      let id = findblogid();
       let find = blogs.find((blog) => {
        if (blog.id == id) {
          let blogBody = document.querySelector(".blog-body");
          let h1 = document.createElement("h1");
          h1.innerText = blog.Title;
          let img = document.createElement("img");
          img.src = blog.image;
          let h6 = document.createElement("h6");
          let span = document.createElement("span");
          span.innerText = blog.topic;
          h6.appendChild(span);
          let blogParagraph = document.createElement("p");
          blogParagraph.innerText = blog.description;
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
});