const User = require('../models/User');
const Course = require('../models/Course');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  const { email, password, role, adminType, division } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role, adminType, division });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createCourse = async (req, res) => {
  const { title, description, division } = req.body;
  try {
    const course = new Course({ title, description, division });
    await course.save();
    res.status(201).json({ message: 'Course created' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};