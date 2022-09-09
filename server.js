const express = require('express');
var http=require('http');
const mongoose=require('mongoose');
const app = express();
const bodyParser=require('body-parser')

app.use(bodyParser.json());

const taskRoute=require('./routes/task')

app.use('/',taskRoute);


require('dotenv/config');

var host = '127.0.0.1'
var port = process.env.PORT||8080


//connect to db 

mongoose.connect(
    process.env.DB_COONECTION, 
    {useNewUrlParser: true})

    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));


app.listen(port,err=>{
    if(err){
        return console.log("ERROR",err);
    }
    console.log(`Listening on port ${port}`);
});


		