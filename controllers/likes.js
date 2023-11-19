const Like = require('../models/likeSchema');
const Post = require('../models/postSchema');

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like = new Like({ post, user });
        const likedEntry = await like.save();
        const likedpost = await Post.findByIdAndUpdate(post, { $push: { likes: likedEntry._id } }, { new: true })
            .populate('likes')
            .exec();
        res
            .status(200)
            .json({
                response: likedpost
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
        const { id, post } = req.body;
        const deletedLike = await Like.findOneAndDelete({ _id: id, post });
        const updatedPost = await Post.findOneAndUpdate({ _id: post }, { $pull: { likes: id } }, { new: true })
            .populate('likes')
            .exec();
        res
            .status(200)
            .json({
                response: updatedPost
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