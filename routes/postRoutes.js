const express=require('express');
const router=express.Router();

const {createPost,deletePost}=require('../controllers/post');
const {createComment}=require('../controllers/comment');
const {likePost,unlikePost}=require('../controllers/likes');

router.post('/createpost',createPost);
router.post('/createcomment',createComment);
router.post('/likepost',likePost);
router.delete('/unlikepost',unlikePost);
router.delete('/deletepost',deletePost);

module.exports=router;