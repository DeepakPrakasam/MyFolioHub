const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  proficiency: { type: Number, min: 0, max: 100 },
  icon: String,
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
