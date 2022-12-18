let mongoose = require("mongoose");
const animalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true

    },
    id: {
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
    keyWords : {type : String , default :""}



});
let animalKeys = Object.keys(animalSchema.paths);

animalSchema.pre("save" , async function(next)
{
    for(key of animalKeys)
    { 
        if(typeof( this[key]) === "string")
            { 
                this[key] = this[key].toLowerCase();
            }
    }

    for(key of animalKeys)
    {
        this.keyWords += "  " + (this[key]);
    }

    next();
});


animalSchema.index({ "keyWords": "text"}); // at most one index :: what is this!!!!
animalSchema.index({ "specie": "text"}); // at most one index :: what is this!!!!
animalSchema.index({ "breed": "text"}); // at most one index :: what is this!!!!



const Animal = mongoose.model('Animal',animalSchema);
module.exports = Animal;