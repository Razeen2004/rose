const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ROSE");

const adminSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const productSchema = mongoose.Schema({
  name: String,
  description: String,
  tag: String,
  image: String,
  price: Number,
  bottleSize: Number,
  bottleHash: String,
  type: String,
  admin: { type: mongoose.Types.ObjectId, ref: 'Admin' },
});

const Admin = new mongoose.model("Admin", adminSchema);
const Product = new mongoose.model("Product", productSchema);

module.exports = {
  Admin: Admin,
  Product: Product,
};