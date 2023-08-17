const Post = require("../database/model/postSchema");

const getAllPost = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  try {
    const totalCount = await Post.countDocuments();
    const totalPages = Math.ceil(totalCount / pageSize);

    const posts = await Post.find({ isBlocked: false })
      .sort({ date: -1 })
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.json({
      posts,
      currentPage: page,
      totalPages,
      totalCount,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
module.exports = getAllPost;
