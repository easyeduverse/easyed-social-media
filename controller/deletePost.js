// const Post = require("../database/model/postSchema");
// const filestackClient = require("../filestack/config");

// const deletePost = async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     console.log(post.post);
//     // console.log(filestackClient.remove());

//     console.log(post);
//     if (!post) {
//       return res.status(404).json({ msg: "Post not found" });
//     }
//     await post.deleteOne();
//     res.json({ msg: "Post removed" });
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === "ObjectId") {
//       return res.status(404).json({ msg: "Post not found" });
//     }
//     res.status(500).send("Server Error");
//   }
// };
// module.exports = deletePost;
