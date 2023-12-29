const Users = require('./db/user')
const express = require('express');
const app = express()
const cors = require('cors');
const adminMiddleware = require('./middlewares/admin');
const userMiddleware = require('./middlewares/user');

app.use(cors())

app.use(express.json());

app.get('/admin' , adminMiddleware);
app.get('/user' , userMiddleware);


app.listen(port, ()=> {
    console.log(`Server Listening at port ${port}`)
})