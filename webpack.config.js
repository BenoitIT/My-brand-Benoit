const path=require('path');
module.exports={
    mode:"development",
    entry:'./firebase/src/index.js',
    output:{
        path:path.resolve(__dirname,'dst'),
        filename:'bundler.js'
    },
    watch:true
}
