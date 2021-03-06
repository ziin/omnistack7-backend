const Post = require("../models/Post");

module.exports = {
  async create(req, res) {
    const { id } = req.params;

    const post = await Post.findById(id);
    post.likes += 1;

    await post.save();

    req.io.emit("like", post);

    res.send(post);
  }
};
