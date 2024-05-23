const express = require("express");
const router = express.Router();

//Import controller
const { dummylink } = require("../controller/Likecontroller");
const { createComment } = require("../controller/Commentcontroller")
const{ likecreate,unlikePost } = require("../controller/Likecontroller")
const { postcreate,getpost } = require("../controller/Postcontroller")

//Mapping Create
router.get("/dummylink",dummylink);
router.post("/comments/create",createComment);
router.post("/like/create",likecreate);
router.delete("/unlike/unlike",unlikePost);
router.post("/post/create",postcreate);
router.get("/get/post",getpost);

//export
module.exports = router;