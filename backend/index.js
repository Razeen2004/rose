const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Authentication routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// // Product routes
// const productRoutes = require('./routes/products');
// app.use('/api/products', productRoutes);

app.listen(8000)