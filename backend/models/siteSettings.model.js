const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  aboutMe: String,
  profileImageUrl: String,
  resumeUrl: String,
  location: String,
  email: String,
  phone: String,
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    portfolio: String
  },
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
