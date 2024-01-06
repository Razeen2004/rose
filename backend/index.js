const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtSecret = "jwt-secret";
const mongoose = require('mongoose');
const { Admin, Product } = require("./db/index");
const zod = require('zod');

const usernameModel = zod.string();
const passwordModel = zod.string();

app.use(express.json());

app.post('/admin/createAdmin', async function (req, res) {
    const usernameParse = usernameModel.safeParse(req.body.username);
    const passwordParse = passwordModel.safeParse(req.body.password);

    const admin = await Admin.create({
        username: usernameParse,
        password: passwordParse
    })
    await admin.save();

    res.status(200).json({
        msg: "Successfully created Admin",
    })

})

app.get('/products', async (req, res) => {
    const products = await Product.find();

    await res.status(200).json({
        msg: products
    })
})

app.post('/addProduct', async (req, res) => {

    const admin = await Admin.find({
        username: req.headers.username,
        password: req.headers.password
    })


    const product = await Product.create({
        name: req.body.name,
        description: req.body.description,
        tag: req.body.tag,
        price: req.body.price,
    })

    await product.save();

    res.status(200).json({
        msg: "Product Added Sucessfully"
    })
})

app.listen(8000, () => {
    console.log("listening on port 8000");
});
