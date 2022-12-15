const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/' , async (req, res) => {
        console.log("train page requested");
        res.render('Admin');
   
    
});
module.exports = router; //always forget