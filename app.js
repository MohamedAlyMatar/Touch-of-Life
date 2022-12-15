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
app.use(express.static(__dirname + '/public'));

// let account = require('./models/account');
// let animal = require('./models/animal');
app.set('view engine','ejs');
app.get('/',(req,res) => {
    res.render('index')
});
app.get('/adopt',(req,res) => {
   // res.render('adopt')
   res.send("adopt page");
});
app.get('/login',(req,res) => {
    res.render('login')
 });


const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
