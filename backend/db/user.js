require('./mongodb')
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    })

const Users = mongoose.model("users" , User);

module.exports = Users;