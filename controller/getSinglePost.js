const Post = require("../database/model/postSchema");
const getSinglePost = async (req, res) => {
  try {
    const post = await Post.find({ userId: req.params.id });
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
};
module.exports = getSinglePost;
