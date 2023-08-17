// const filestack = require("../filestack/config");
const Post = require("../database/model/postSchema");

const addPost = async (req, res) => {
  try {
    // console.log(req.file);
    const image = req.file ? req.file.location : null;

    const newPost = new Post({
      userId: req.body.userId,
      post: image,
      avatar: req.body.avatar,
      content: req.body.content,
      postFormat: image ? req.file.contentType : null,
    });
    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = addPost;
