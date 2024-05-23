const Post = require("../models/postmodel")
const Like = require("../models/likemodel")



exports.dummylink=(req,res)=>{
    res.send("This is dummy link");
};

exports.likecreate = async(req,res) => {
    try{
        const{ post,user } = req.body;
        const like = new Like({
            post,user
        });
        const savelike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes:savelike._id}},{new:true} )
        .populate("likes")
        .exec()

        res.status(200).json({
            meesage:"Like success",
            post:updatedPost,
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }

};

exports.unlikePost = async(req,res) => {
    try{
        const {post,like} = req.body;
        const deletelike = await Like.findOneAndDelete({post:post,_id:like}); 

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletelike._id}},{new:true})
        .populate("likes")
        .exec()

        res.status(200).json({
            message:"Unile Successful",
            post:updatedPost,
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}