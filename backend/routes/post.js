// backend/routes/post.js

const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

// Create post
router.post("/", auth, async (req, res) => {
  const { title, content } = req.body;

  const post = await Post.create({
    user: req.user.username,
    title,
    content
  });

  res.json(post);
});

// Get posts
router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});


router.post("/like/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/comment/:id", async (req, res) => {
  try {
    const { user, text } = req.body;

    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: { user, text }
        }
      },
      { new: true }
    );

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

module.exports = router;