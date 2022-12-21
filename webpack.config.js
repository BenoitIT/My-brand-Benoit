const path=require('path');
module.exports={
    mode:"development",
    entry:['./firebase/src/index.js','./firebase/src/displaySingle.js'],
    output:{
        path:path.resolve(__dirname,'dst'),
        filename:'bundler.js'
    },
    watch:true
}
