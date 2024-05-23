const Post = require("../models/postmodel")
const Comment = require("../models/commentmodel")

//bussiness logic

exports.createComment = async(req,res) =>{
    try{
        //fetch data from the req body
         const{post,user,body} = req.body;
        //create object for comment
        const comment = new Comment({
            post,user,body
        });
        const savedcomment = await comment.save();

        //comment to saved to post 
         //new true because we need updated value
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedcomment._id}},{new:true} )
        .populate("comments")
        .exec()

        res.json({
            post:updatedPost,
        });
    
    }catch(error){
        return res.status(500).json({
            error:"Error while updating",
            message:error.message,
        });

    }
};