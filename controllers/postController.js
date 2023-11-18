const Post=require('../models/postModel');

exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({title,body});
        const response=await post.save();
        res
        .status(200)
        .json({
        response
        })
    }
    catch(error){
        res
        .status(505)
        .json({
            response: error.message
        })
    }
}

exports.getAllPosts=async(req,res)=>{
try{
    const response=await Post.find().populate("comments").exec();
    res
    .status(200)
    .json({
        response
    }) 
}
catch(error){
    res
    .status(505)
    .json({
        response: error.message
    }) 
}
}