const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const contentSchema = new mongoose.Schema(
  {
    section: String, // like 'about', 'footer', 'services'
    title: String,
    body: String,
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

router.get("/:section", async (req, res) => {
  const content = await Content.findOne({ section: req.params.section });
  res.json(content);
});

router.post("/", async (req, res) => {
  const content = await Content.create(req.body);
  res.status(201).json(content);
});

router.put("/:section", async (req, res) => {
  const updated = await Content.findOneAndUpdate(
    { section: req.params.section },
    req.body,
    { new: true, upsert: true }
  );
  res.json(updated);
});

module.exports = router;
