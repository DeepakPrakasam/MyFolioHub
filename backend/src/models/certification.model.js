const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: String,
  platform: String,
  issueDate: Date,
  certificateUrl: String,
  badgeImageUrl: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Certification', certificationSchema);
