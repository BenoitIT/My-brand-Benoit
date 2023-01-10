const Blog=require("../models/blogs")
const{asyncWrapper}=require('../middlewares/asyncWrapper')
const {uploads} =require("../cloudinary/cloudinary")
 const createBlog= asyncWrapper(async(req,res)=>{
    //finding cloudinary path
    const uploader=async(path)=>await uploads(path,'blogimages')
    const actualPath= req.file
   //initializing cloudinary path
   const newPath= await uploader(actualPath)
      await Blog.create({
       title:req.body.title,
       category:req.body.category,
       blogImage:newPath.url,
       blogDescription:req.body.blogDescription
  });
    return res.json({message:'post blogs sent'})
  });
  const listBlogs = asyncWrapper(async (req, res) => {
    const blogs = await Blog.find({});
    res.status(200).json({blogsList: blogs});
  });
  module.exports={createBlog,listBlogs}