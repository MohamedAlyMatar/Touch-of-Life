const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({

    name: {

        type: String,


    },
    phone: {
        type : String,
        minlength:5,
    },
    animal : {

        type: String,

    }
    


});
const request = mongoose.model('request',requestSchema);
module.exports = request;