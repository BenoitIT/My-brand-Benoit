const express=require('express')
const mongoose=require("mongoose")
const bodyParser = require('body-parser')
const dotenv=require("dotenv")
const {ConnectDb}=require('./connections/mongDBconnect')
const Router=require('./blogs/blogs')
const app=express()
dotenv.config()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json({extended:false}))
app.use(Router)
const PORT=process.env.PORT
mongoose.set('strictQuery', true)
const startApp=async()=>{
    const dBConn= await ConnectDb(process.env.mongoDbURL)
    if(dBConn){
        console.log('database connected successfully');
        app.listen(PORT, console.log(`application is listening to port ${PORT}....`))
    }
    else{
        console.log('failed to connected to the server')
    }
   }
startApp()

