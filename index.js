const express = require('express');
const app=express();
const path=require('path');
const routes=require('./routes/router');
const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
mongoose.connect('mongodb://localhost:27017/ordermanagement_july25')
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err));
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));
app.use('/',routes);
const port=8000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});