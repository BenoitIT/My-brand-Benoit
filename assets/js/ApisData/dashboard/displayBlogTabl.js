const token=JSON.parse(localStorage.getItem('accessToken'));
const loader=document.querySelector('.loader');
fetch('https://dead-jade-coypu-cape.cyclic.app/Api/blogs/all',
{ mode: 'cors' })
.then(res=>res.json()
).then( articles => {
  let blogs = articles.data;
  let tableData;
 blogs.forEach((blog,i)=>{
  tableData+=`<tr>
  <td>${blog.title}</td>
  <td>${blog.category.slice(0,15)+".."}</td>
  <td>${blog.blogDescription.slice(0,30)+".."}</td>
  <td>${blog.blogImage.slice(0,15)+".."}</td>
  <td><button class="dlt-btn">delete</button><button class="update" id="update">update</button>
  </td>
  </tr>`;
})
let tableBODY=document.querySelector("#table-body");
tableBODY.innerHTML=tableData;

const deleteBtn = document.querySelectorAll('.dlt-btn')
const updateBtn =document.querySelectorAll('.update')
let buttonIndex;
deleteBtn.forEach((el, i)=>{
  el.addEventListener('click', function(){
    loader.classList.add('loading');
    loader.classList.remove('loader');
    buttonIndex=i;
    blogs.forEach((element, i)=>{
      if(i===buttonIndex){
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/${element._id}`,
        {
        method:'DELETE',
        headers: {
          "Authorization": `Bearer ${token}`
      },
    }).then(res=>res.json())
        .then(data=>{
          console.log(data)
          loader.classList.add('stopLoad');
          setTimeout(()=>{
            location.reload()
          },500);
      });
      }
    })
  })
})
const updateForm=document.querySelector('.update-blog-form');
const blogTable=document.querySelector('#table-blog');
const updateFormNative=document.querySelector('.update-form');
const editBtn=document.querySelector('#editBtn');
let upbuttonIndex;
updateBtn.forEach((el, i)=>{
  el.addEventListener('click', function(){
    loader.classList.add('loading');
    loader.classList.remove('loader');
    upbuttonIndex=i;
    blogs.forEach((element, i)=>{
      if(i===upbuttonIndex){
       
//adding values in inputs
      updateForm.classList.remove('remove-updateForm');
      updateForm.classList.add('show-updateForm');
      blogTable.style.opacity='5%';
      updateFormNative.blogtopic.value=element.title;
      updateFormNative.BlogTitle.value=element.category;
      updateFormNative.image.value=element.blogImage;
      updateFormNative.contents.value=element.blogDescription;
      editBtn.addEventListener('click',()=>{
        fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/${element._id}`,
        {
        method:'PATCH',
        headers: {
            "Authorization": `Bearer ${token}`
        },
      }).then(res=>res.json())
      .then(data=>{
        console.log(data)
        loader.classList.add('stopLoad');
        
      });
      updateForm.classList.add('remove-updateForm');
      updateForm.classList.remove('show-updateForm');
      blogTable.style.opacity='100%';
      })
      }
    })
  })
})
} )

  