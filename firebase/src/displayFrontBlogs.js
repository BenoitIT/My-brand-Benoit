export function displayBlist(arr){
let blogContainer=document.querySelector(".container");
     let blogDivsion=document.createElement('div');
  if(arr.length>1){
    let threeLatestBlog=arr.slice(-3);
    threeLatestBlog.reverse().forEach(blog => {
        //creating element to hol image source
      let imeg=document.createElement('img');
         imeg.src = blog.image;

      let topicDivsn=document.createElement('div');
      topicDivsn.classList.add('topic');
      topicDivsn.innerHTML=blog.topic;
      //displaying blog text-title
      let TitleHeader=document.createElement('h1');
      TitleHeader.classList.add('blogHeader');
      let linktoSinglepage=document.createElement('a');
      linktoSinglepage.href=`/assets/blogs/singleBlog.html?id=${blog.id}`;
      linktoSinglepage.innerText=blog.Title;
       TitleHeader.appendChild(linktoSinglepage);
          //displaying blog text-contents
      let contentsListing=document.createElement('p');
      contentsListing.classList.add('text-contents');
      contentsListing.innerText=blog.description;
      let blogDiv=document.createElement('div');
      blogDiv.classList.add('blog');
      let blogDecriptionDiv=document.createElement('div');
      blogDecriptionDiv.classList.add('blog-description');
      blogDecriptionDiv.appendChild(topicDivsn);
      blogDecriptionDiv.appendChild(TitleHeader);
      blogDecriptionDiv.appendChild(contentsListing);
      blogDiv.appendChild(imeg);
      blogDiv.appendChild(blogDecriptionDiv);
      blogDivsion.appendChild(blogDiv)
      });
      blogContainer.appendChild(blogDivsion);
    }
    else{
      let blogDiv=document.createElement('div');
      blogDiv.classList.add('blog');
      blogDiv.innerText='no blog found';
      blogDivsion.appendChild(blogDiv);
       blogContainer.appendChild(blogDivsion);
    }
    return blogContainer
}