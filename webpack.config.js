const path=require('path');
module.exports={
    mode:"development",
    entry:{
        home:'./firebase/src/index.js',
        addBlog:'./firebase/src/addblog.js',
        deleteBlog:'./firebase/src/blogTable.js',
        chosenBlog:'./firebase/src/chosenBlog.js',
        frontPageBlog:'./firebase/src/displayFrontBlogs.js',
        subscribePage:'./firebase/src/subscribePage.js',
        addComment:'./firebase/src/addcomment.js',
        displayComment:'./firebase/src/Displaycomment.js',
        recordMessage:'./firebase/src/recordMessage.js',
        viewMessages:'./firebase/src/viewMessage.js',
      },
    output:{
        path:path.resolve(__dirname,'dst'),
        filename:'[name].bundler.js'
    },
    watch:true
}
