const Users = require('./db/user')
require('./db/mongodb')
const mongoose = require('mongoose')
const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors())

let port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is Started')
})

app.post('/register', async (req, res) => {
    // let data =  await Users.find();
    let data = await Users.collection.insertOne({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    let result = await data.save();
    // let data = await Products.collection.deleteOne({name : req.params.name})
    console.log(result);
    res.send(result);
})

app.listen(port, ()=> {
    console.log(`Server Listening at port ${port}`)
})