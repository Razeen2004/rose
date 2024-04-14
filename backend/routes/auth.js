const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Admin } = require('../db');

const jwtSecret = 'your_jwt_secret';

// Register a new admin user
router.post('/register', async (req, res) => {
    try {
      const { username, password, firstname, lastname } = req.body;
  
      // Check if admin already exists
      const existingAdmin = await Admin.findOne({ username });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Admin already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new admin user
      const admin = new Admin({
        username,
        firstname,
        lastname,
        password: hashedPassword,
      });
      await admin.save();
  
      res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
      console.error('Error registering admin:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Find admin user by username
      const admin = await Admin.findOne({ username });
      if (!admin) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Check password
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ username: admin.username, id: admin._id }, jwtSecret);
  
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  module.exports = router;
  // adding the comment