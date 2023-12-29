const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user')

router.get('/signup', userMiddleware, async (req, res) => {
    
})