const express = require('express');
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());
let Animal = require('../models/animal');

router.get('/', async (req, res) => {


    // console.log("adopt requested");
    // console.log("adopt query" , req.query.search);
    //     //Search bar 
    //     try{

    //         let resultProducts = await Animal.find(
    //             { $text: { $search: toString(req.query.search)  } },
    //             { score: { $meta: "textScore" } }
    //             ).sort(
    //             { score: { $meta: "textScore" } }
    //         );
    //     console.log(resultProducts , "result Products....");
    //     console.log(JSON.stringify(resultProducts),result)
    //     //res.send(JSON.stringify(resultProducts));
    //     }

    //     catch(error){
    //         console.log("error search/text GET",error);
    //     }   
    //     // + algilo in the future 
    //     res.render('adopt',{data: 0});
    my_animals = []
    try {
        my_animals = await Animal.find();

        console.log(my_animals, "my_animals")
        res.render('adopt', { cats: my_animals });

    }
    catch (error) {
        console.log("error", error)
        res.render('adopt', { cats: [] });

    }
    res.render('adopt', { cats: [] });

});







module.exports = router; //always forget