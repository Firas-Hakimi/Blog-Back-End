const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb://localhost/mean')
    .then(() => {
        console.log('connected to database');
    }).catch(() => {
        console.log('Connection to database failed')
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/img', express.static(path.join(__dirname,'/images')));

app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
        );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
})

app.use('/posts', postsRoutes);
app.use('/user', userRoutes);




module.exports = app;