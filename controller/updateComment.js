const Post = require("../database/model/postSchema");

const updateComment = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // Pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }
    // Check user
    if (comment.user.toString() !== req.body.userId) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    // Get update index
    const updateIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.body.userId);
    post.comments[updateIndex].comment = req.body.comment;
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = updateComment;
