const express = require("express");
const app = express();
const mongoose = require('mongoose');



const uri = "mongodb+srv://TOF:TOF1761@cluster0.mzkc4h3.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
    try{
        await mongoose.connect(uri);
        console.log('DB Connected successfully')
    }
    catch(err) {
        console.error(err);
    }
}
connect();

let account = require('./models/account');

let Adminacc = new account(
    {
        email: 'tofcat1@admin',
        password: '#TOF1761'
    }
)
Adminacc.save();




const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
