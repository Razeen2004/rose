const { Router } = require('express');
const router = Router();
const adminMiddleware = require('../middleware/admin')

router.get('/signup', adminMiddleware, async (req, res) => {
})