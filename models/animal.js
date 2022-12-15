let mongoose = require("mongoose");
const animalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    specie: {
        type: String,
        required: true,
        //EX: dog, donkey , cat ,...

    },
    breed: { 
        type: String
        //EX: german shepard
    },
    age : { type: Number},
    imgUrl: String,



});
const Animal = mongoose.model('Animal',animalSchema);

module.exports = Animal;