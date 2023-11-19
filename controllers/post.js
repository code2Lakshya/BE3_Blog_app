const Comment = require('../models/commentSchema');
const Like = require('../models/likeSchema');
const Post=require('../models/postSchema');

exports.createPost=async(req,res)=>{
    try{
        const {title,body}=req.body;
        const post=new Post({title,body});
        const addedPost=await post.save();
        res
        .status(200)
        .json({
            response: addedPost
        })
    }
    catch(error){
        res
        .status(500)
        .json({
            response: error.message
        })
    }
}

exports.deletePost=async(req,res)=>{
    try{
        const {post}=req.body;
        const deletedPost=await Post.findByIdAndDelete(post);
        deletedPost.likes.forEach(async(id) =>{
             await Like.findByIdAndDelete(id);
            } )
        deletedPost.comments.forEach(async(id) =>{
             await Comment.findByIdAndDelete(id);
            } )
            res
            .status(200)
            .json({
                response: deletedPost
            })
    }
    catch(error){
        res
        .status(500)
        .json({
            response: error.message
        })
    }
}

