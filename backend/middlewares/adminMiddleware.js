const { router } = require('express');
const zod = require('zod');

const username = zod.string().min(1);
const password = zod.string().min(6);



function adminMiddleware(req, res, next) {
    const usernameParse = req.body.username;
    const passwordParse = req.body.password;

    

}

module.exports = adminMiddleware;