const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const likedPost = await Like.create({ post, user });
        const response = await Post.findByIdAndUpdate(post, { $push: { likes: likedPost._id } }, { new: true })
            .populate('likes')
            .exec();
        res
            .status(200)
            .json({
                response
            })

    }
    catch (error) {
        res
            .status(500)
            .json({
                response: error.message
            })
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const { likeId , post } = req.body;
        const deletedLike = await Like.findByIdAndDelete(likeId);
        const posts = await Post.findByIdAndUpdate(post, { $pull: { likes: likeId } }, { new: true })
        res
            .json({
                posts
            })
    }
    catch (error) {
        res
            .json({
                posts: error.message
            })
    }
}