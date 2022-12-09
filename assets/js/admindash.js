//blog variables
let createBtn = document.querySelector("#create");
let mngBlogBtn = document.querySelector("#mnge-blog");
let UpdateBtn = document.querySelector("#update");
let editForm = document.querySelector(".edit-form");
let createBlogForm = document.querySelector(".create-blog");
let ManageBlogTable = document.querySelector(".blog-table");
let menuIcon=document.querySelector("#hurmbug");
let menuDiv=document.querySelector(".menu-icon");
//portifolio section variable
let addpojectBtn = document.querySelector("#new-project");
let mngProjectBtn = document.querySelector("#projects");
let createProjectForm = document.querySelector(".create-project");
let ManageProjectTable = document.querySelector(".project-table");
let UpdateprojectBtn = document.querySelector("#update-project");
//swiching menus varibales
let portifolioBtn = document.querySelector("#portifolio-menu");
let blogBtn = document.querySelector("#blog-menu");
let SkillBtn = document.querySelector("#skills-menu");
let portifolioSCTN = document.querySelector(".portifolio-section");
let blogSCTN = document.querySelector(".blogs-section");
let skillSCTN = document.querySelector(".skills-section");
let rightContents = document.querySelector(".right-contents");
let sideBar = document.querySelector(".side-bar");
blogBtn.addEventListener("click", () => {
  portifolioSCTN.classList.remove("show-section");
  blogSCTN.classList.add("show-section");
  blogSCTN.classList.remove("hide-section");
  portifolioSCTN.classList.add("hide-section");
  skillSCTN.classList.add("hide-section");
  sideBar.classList.add("hide-side-bar");
  rightContents.classList.remove("hide-side-bar");
  });
  portifolioBtn.addEventListener("click", () => {
   portifolioSCTN.classList.remove("hide-section");
   portifolioSCTN.classList.add("show-section");
   skillSCTN.classList.add("hide-section");
   sideBar.classList.add("hide-side-bar");
   rightContents.classList.remove("hide-side-bar");
    });
    SkillBtn.addEventListener("click", () => {
      skillSCTN.classList.remove("hide-section");
      skillSCTN.classList.add("show-section");
      sideBar.classList.add("hide-side-bar");
      rightContents.classList.remove("hide-side-bar");
       });
  menuIcon.addEventListener("click" ,()=>{
    sideBar.classList.add("show-side-bar");
    rightContents.classList.add("hide-side-bar");
    menuDiv.classList.add("hide-section");
      });
  console.log(menuIcon)
//manage blog button
mngBlogBtn.addEventListener("click", () => {
  createBlogForm.classList.add("hide-blog-form");
  ManageBlogTable.classList.add("blog-table-show");
  ManageBlogTable.classList.remove("hide-blogs");
});
//create blog button
createBtn.addEventListener("click", () => {
  ManageBlogTable.classList.remove("blog-table-show");
  ManageBlogTable.classList.add("hide-blogs");
  createBlogForm.classList.add("show-blog");
  createBlogForm.classList.remove("hide-blog-form");
});
// update button
UpdateBtn.addEventListener("click", () => {
  editForm.classList.add("show-blog");
  editForm.classList.remove("hide-blogs");
});
//add project button
addpojectBtn.addEventListener("click", () => {
  ManageProjectTable.classList.remove("project-table-show");
  ManageProjectTable.classList.add("hide-project");
  createProjectForm.classList.add("show-project");
  createProjectForm.classList.remove("hide-project-form");
});
//manage project button
mngProjectBtn.addEventListener("click", () => {
  createProjectForm.classList.add("hide-project-form");
  ManageProjectTable.classList.add("project-table-show");
  ManageProjectTable.classList.remove("hide-project");
});
// update project button
UpdateprojectBtn.addEventListener("click", () => {
  editForm.classList.add("show-project");
  editForm.classList.remove("hide-project");
});
