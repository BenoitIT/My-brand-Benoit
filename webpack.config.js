const path=require('path');
module.exports={
    mode:"development",
    entry:{
        home:'./firebase/src/index.js',
        addBlog:'./firebase/src/addblog.js',
        deleteBlog:'./firebase/src/blogTable.js'
      },
    output:{
        path:path.resolve(__dirname,'dst'),
        filename:'[name].bundler.js'
    },
    watch:true
}
