const express=require("express");
const { con } = require("../Config/db");
const {LoginMiddleware}=require("../Middlewares/LoginMiddleware")
const Post_Route=express.Router();
Post_Route.post("/post",LoginMiddleware,(req,res)=>{
const {description,image,userId}=req.body;
const postquery="INSERT INTO user_posts (description,image,userId) VALUES (?,?,?)";
con.query(postquery,[description,image,userId],(err,result)=>{
    if(err){
        res.send(err)
    }
    else if(result){
res.send("Post created successfully");
    }
    else{
        res.send("post unsuccessfull");
    }
})
})
module.exports={Post_Route}