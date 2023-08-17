const Post = require("../database/model/postSchema");

const addComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const newComment = {
      user: req.body.userId,
      comment: req.body.comment,
      avatar: req.body.avatar,
    };
    post.comments.unshift(newComment);
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = addComment;
