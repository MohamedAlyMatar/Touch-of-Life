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
let animal = require('./models/animal');

let demoCat = new animal (
    {
        name : 'Oreo',
        specie : 'Cat',
        breed : 'ragdoll',
        age : 6,
        imgUrl : 'https://images.ctfassets.net/440y9b545yd9/3G6QLmILVQSIrwYa4Od6CB/624a1b31b7a27032c2902173365d3c82/183Ragdollcat.jpg'
    }
)
demoCat.save();



const port =  process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ",port));
