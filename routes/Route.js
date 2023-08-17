const express = require("express");
const addPost = require("../controller/addPost");
// const deletePost = require("../controller/deletePost");
const getAllPost = require("../controller/getAllPost");
const uploadVideo = require("../multer/postMulter");
const getSinglePost = require("../controller/getSinglePost");
const likePost = require("../controller/likePost");
const unlikePost = require("../controller/unlikePost");
const addComment = require("../controller/addComment");
const removeComment = require("../controller/deleteComment");
const updateComment = require("../controller/updateComment");
const getLikes = require("../controller/likeCount");
const getComments = require("../controller/getComments");
const router = express.Router();

router.post("/api/post", uploadVideo.single("post"), addPost);
// router.delete("/api/post/:id", deletePost);
router.get("/api/post", getAllPost);
router.get("/api/post/:id", getSinglePost);
router.get("/api/post/:userid", getSinglePost);
router.get("/api/post/:id/getlikes", getLikes);
router.get("/api/post/:id/getcomments", getComments);

router.put("/like/:id", likePost);
router.put("/unlike/:id", unlikePost);
router.post("/comment/:id", addComment);
router.delete("/comment/:id/:comment_id", removeComment);

router.put("/comment/:id/:comment_id", updateComment);

module.exports = router;
