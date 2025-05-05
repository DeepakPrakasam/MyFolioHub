const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const likeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  itemId: mongoose.Schema.Types.ObjectId, // could be project or post ID
  itemType: { type: String, enum: ['project', 'post'] }
}, { timestamps: true });

const Like = mongoose.model('Like', likeSchema);

router.post('/', async (req, res) => {
  const like = await Like.create(req.body);
  res.status(201).json(like);
});

router.get('/:itemId', async (req, res) => {
  const likes = await Like.find({ itemId: req.params.itemId });
  res.json({ count: likes.length });
});

module.exports = router;
