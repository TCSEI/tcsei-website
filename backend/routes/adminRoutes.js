const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/create-user', authMiddleware, roleMiddleware(['admin']), adminController.createUser);
router.post('/create-course', authMiddleware, roleMiddleware(['admin']), adminController.createCourse);

module.exports = router;