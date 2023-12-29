const zod = require('zod');
const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();

app.use(express.json());

let username = zod.string();
let password = zod.string().min(6);

