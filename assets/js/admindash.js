let createBtn=document.querySelector("#create");
let mngBlogBtn=document.querySelector("#mnge-blog");
let UpdateBtn=document.querySelector("#update");
let editForm=document.querySelector(".edit-form");
let createBlogForm=document.querySelector(".create-blog");
let ManageBlogTable=document.querySelector(".blog-table");
//manage blog button
 mngBlogBtn.addEventListener('click',()=>{
    createBlogForm.classList.add('hide-blog-form');
    ManageBlogTable.classList.add('blog-table-show');
    ManageBlogTable.classList.remove('hide-blogs');
 });
 //create blog button
 createBtn.addEventListener('click',()=>{
    ManageBlogTable.classList.remove('blog-table-show');
    ManageBlogTable.classList.add('hide-blogs');
    createBlogForm.classList.add('show-blog');
     createBlogForm.classList.remove('hide-blog-form');
});
 // update button
UpdateBtn.addEventListener('click',()=>{
 editForm.classList.add('show-blog');
 editForm.classList.remove('hide-blogs');
});