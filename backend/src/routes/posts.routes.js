const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  imageUrl: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  published: { type: Boolean, default: false },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
});

router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

router.put('/:id', async (req, res) => {
  const updated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: 'Post deleted' });
});

module.exports = router;
