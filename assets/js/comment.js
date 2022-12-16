let subscribes = JSON.parse(localStorage.getItem("subsList") || "[]");
let blogsArr = JSON.parse(localStorage.getItem("blogList") || "[]");
let commentInput=document.querySelector("#comment");
let commenBtn=document.querySelector("#comment-btn");
  commenBtn.addEventListener('click',(e)=>{
    e.preventDefault();
 if(subscribes.length<1){
    alert("please first of subscribe!");
 }
 let commText=commentInput.value;
 let emailposition=subscribes[0];
 let email=emailposition.email;
 let blogIdposition=blogsArr[0]
 let blogId=blogIdposition.id;
 let newComment={
   id:Date.now(),
   email:email,
   Bcoment:commText,
   blogId:blogId
 };
 commentInput.value="";
 let comments = JSON.parse(localStorage.getItem("comment-List") || "[]");
 comments.push(newComment);
  alert("you commented this post");
  localStorage.setItem("comment-List", JSON.stringify(comments));
})