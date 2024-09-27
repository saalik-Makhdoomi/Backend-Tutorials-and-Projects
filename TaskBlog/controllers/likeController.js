
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) => {
    try {
        const {post, user} = req.body
        const like = new Like({
            post, user
        });
        const savedLike = await like.save();
        // update the post collection basis on this:
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new: true})
        .populate("likes").exec();
        
        res.json({
            post:updatedPost,
        })
    }
     catch (error) {
        
    }return res.status(400).json({
        error: "Error while liking post",
    })
}


// unlike a post:
exports.unlikePost = async (req,res) => {
    try {
        const {post, like} = req.body
        // find and deletethe like collection mai sy:
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        // update the post collection:

        const updatedPost = await Post.findByIdAndUpdate(post,
                                                         {$pull: {likes: deletedLike._id}}, 
                                                         {new: true})

        res.json({
            post:updatedPost,
        });


    } catch (error) {
        return res.status(400).json({
            error: "Error while unliking post"
        });
    }
}




exports.dummyLink = (req,res) => {
    res.send("This is dummy Page")
};