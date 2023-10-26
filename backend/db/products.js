require('./mongodb')
const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: String,
    price: Number,
    tag: String,
    color: String
})

const Products = mongoose.model("products" , Product);

module.exports = Products;