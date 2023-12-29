const { Router } = require('express');
const router = Router();
const adminMiddleware = require('../middleware/admin')
const zod = require('zod');

router.get('/signup', adminMiddleware, async (req, res) => {
    
})