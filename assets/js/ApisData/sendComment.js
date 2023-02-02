const findblogid = () => {
    let parameter = new URLSearchParams(window.location.search);
    let foundId = parameter.get("id");
    return foundId;
  };
  let id = findblogid();
  fetch(`https://dead-jade-coypu-cape.cyclic.app/Api/blog/${id}/addcomment/`,{ mode: 'cors' }).then(res=>res.json()
  ).then( articles => {
    let comments=articles.data;
    
}).catch(err=>{
    console.log(err)
})