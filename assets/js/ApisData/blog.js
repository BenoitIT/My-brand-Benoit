fetch('http://localhost:8080/Api/blogs/all').then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})