const { Router } = require('express');
const router = Router();
const adminMiddleware = require('../middleware/admin')
const zod = require('zod');


const username = zod.string();
const password = zod.string().min(6);

router.get('/signup', adminMiddleware, async (req, res) => {
    const usernameResponse = req.headers.username;
    const passwordResponse = req.headers.password;


    const newAdmin = Admin.create({
        username: 
    })
    
})