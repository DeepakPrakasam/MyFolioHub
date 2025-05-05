const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const ratingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  stars: { type: Number, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });

const Rating = mongoose.model('Rating', ratingSchema);

router.post('/', async (req, res) => {
  const rating = await Rating.create(req.body);
  res.status(201).json(rating);
});

router.get('/project/:projectId', async (req, res) => {
  const ratings = await Rating.find({ projectId: req.params.projectId });
  res.json(ratings);
});

module.exports = router;
