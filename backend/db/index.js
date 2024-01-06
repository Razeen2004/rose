const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ROSE");


const AdminSchema = mongoose.Schema({
    username: String,
    password: String,
})

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    tag: String,
    price: Number,
})

const Admin = new mongoose.model('Admin', AdminSchema);
const Product = new mongoose.model('Product', productSchema);

module.exports = { 
    Admin: Admin,
    Product: Product
};