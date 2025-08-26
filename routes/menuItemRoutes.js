const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menuItem');

// post route to add menuItem
router.post('/',async(req,res) =>{
  try{
    const data = req.body;

    const newMenuItem = new MenuItem(data);

    const savedMenuitem = await newMenuItem.save();
    console.log('data saved');
    res.status(200).json(savedMenuItem);


  }catch{err}{
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }

});

// GET method to get the menuItem
router.get('/',async(req,res) =>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});


// comment added for testing  purposes 
module.exports = router;