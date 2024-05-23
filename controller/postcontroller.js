const Like  = require("../models/likemodel")
const Comment = require("../models/commentmodel")
const Post = require("../models/postmodel")

exports.postcreate = async(req,res) =>{
    try{
        const { title,body,likes,comments } = req.body;
    const post  = new Post({
        title,body,likes,comments
    });
    const updatedpost = post.save();
    
    res.status(200).json({
        message:"Post created successfully",
    })
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }

};

exports.getpost = async(req,res) => {
    try{
        const getposts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            getposts,
        })
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}