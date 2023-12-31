const {User} = require('../db');

const userMiddleware = async (req, res, next) => {
    // edited some routes
    const username = req.headers.username;
    const password = req.headers.password;

    let value = await User.findOne({
        username: username, 
        password: password
    })

    if(value){
        res.status(200).json({
            msg: 'Account Created Successfully'
        })
        next()
    }else{
        res.status(403).json({
            msg: 'Invalid username or password'
        })
    }

}

module.exports = userMiddleware;