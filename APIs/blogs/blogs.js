const express=require("express")
const {upload}=require("../cloudinary/multer")
const Router=express.Router()
const{createBlog,listBlogs}=require('../controllers/blogs')
Router.get('/blogs',listBlogs)
Router.post('/blogs',upload.single('blogImg'),createBlog)
module.exports=Router