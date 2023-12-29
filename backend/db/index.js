const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0://27017/Rose");

const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedDrinks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drinks'
    }]
})

const DrinksSchema = new mongoose.Schema({
    name: String,
    description: String,
    tag: String,
    image: String,
    price: Number,
})

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Drink = mongoose.model("Drink", DrinksSchema);

module.exports = {
    Admin,
    User,
    Drink
}