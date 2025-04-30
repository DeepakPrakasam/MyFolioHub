const express = require('express');
const router = express.Router();

// Import controllers (you need to create these)
const userController = require('../controllers/user.controller');
const projectController = require('../controllers/project.controller');
const skillController = require('../controllers/skill.controller');
const contactController = require('../controllers/contact.controller');
const settingsController = require('../controllers/siteSettings.controller');
const certificationController = require('../controllers/certification.controller');

// ✅ USER ROUTES
router.post('/users/register', userController.register);
router.post('/users/login', userController.login);
router.get('/users', userController.getAllUsers);

// ✅ PROJECT ROUTES
router.get('/projects', projectController.getAllProjects);
router.post('/projects', projectController.createProject);
router.get('/projects/:id', projectController.getProjectById);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);

// ✅ SKILL ROUTES
router.get('/skills', skillController.getAllSkills);
router.post('/skills', skillController.createSkill);
router.put('/skills/:id', skillController.updateSkill);
router.delete('/skills/:id', skillController.deleteSkill);

// ✅ CONTACT MESSAGE ROUTES
router.get('/messages', contactController.getAllMessages);
router.post('/contact', contactController.sendMessage);
router.put('/messages/:id/read', contactController.markAsRead);

// ✅ SITE SETTINGS ROUTES
router.get('/settings', settingsController.getSettings);
router.put('/settings', settingsController.updateSettings);

// ✅ CERTIFICATION ROUTES
router.get('/certifications', certificationController.getAllCertifications);
router.post('/certifications', certificationController.createCertification);
router.delete('/certifications/:id', certificationController.deleteCertification);

module.exports = router;
