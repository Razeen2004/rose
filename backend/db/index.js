const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ROSE");


const AdminSchema = mongoose.Schema({
    username: String,
    password: String,
})

const Admin = new mongoose.model('Admin', AdminSchema);

module.exports = Admin;