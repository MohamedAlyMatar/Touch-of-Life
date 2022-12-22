const express = require('express');
const router = express.Router();


router.use(express.urlencoded({ extended: true }));
router.use(express.json());
let request = require('../models/requests');

router.get('/', async (req, res) => {

    
    res.render('areqs',{rqs : [1,2,3]});

});







module.exports = router; //always forget