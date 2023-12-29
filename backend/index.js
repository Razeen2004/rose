const adminMiddleware = require('./middlewares/admin');
const userMiddleware = require('./middlewares/user');
const express = require('express');
const app = express()
const cors = require('cors');

app.use(cors())

app.use(express.json());

app.get('/admin' , adminMiddleware);
app.get('/user' , userMiddleware);


app.listen(port, ()=> {
    console.log(`Server Listening at port ${port}`)
})