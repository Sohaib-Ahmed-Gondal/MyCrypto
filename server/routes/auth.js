const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1d' });
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ error: 'User exists' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ error: 'Invalid credentials' });
  const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;