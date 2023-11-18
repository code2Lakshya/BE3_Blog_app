const express=require('express');
const router=express.Router();

const {dummyController}=require('../controllers/dummyController');
const {createComment}=require('../controllers/commentController');
const {createPost,getAllPosts}=require('../controllers/postController');
const {likePost,unlikePost}=require('../controllers/likeController');


router.get('/dummyRoute',dummyController);
router.post('/createComment',createComment);
router.post('/createPost',createPost);
router.get('/getAllPosts',getAllPosts);
router.post('/likePost',likePost);
router.put('/unlikepost',unlikePost);

module.exports=router;