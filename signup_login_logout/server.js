const path = require('path');
const express=require('express');
const mongoose= require('mongoose');
const bodyparser=require('body-parser');
const cookieParser=require('cookie-parser');
const connectDB = require("./config/db")
const dotenv =require('dotenv').config
const { errorHandler } = require('./middlewares/error');
const { default: db } = require('./config/db');
const port = process.env.PORT || 5000;
// app use

//connecting to db 
//connectionDB()

const app = express();


app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());
app.use(cookieParser());

app.use('/api/projects', require('./routes/projectRoute'));
app.use('/api/users', require('./routes/userRoute'));
 
app.use('/',function(req,res){
    res.status(200).send(`Welcome to login , sign-up api`);
});

// listening port

app.listen(port,()=>{
    console.log(`app is live at ${port}`);
});

