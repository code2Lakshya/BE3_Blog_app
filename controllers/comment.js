const Comment=require('../models/commentSchema');
const Post=require('../models/postSchema');

exports.createComment=async(req,res)=>{
    try{
        const {post,user,body}=req.body;
        const comment=new Comment({post,user,body});
        const addedComment=await comment.save();
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments: addedComment._id}},{new: true})
        .populate('comments')
        .exec();
        res
        .status(200)
        .json({
            response: updatedPost
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