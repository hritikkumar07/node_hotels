const express = require('express');
const router = express.Router();
const Person = require('../models/Person');


//POST route to add a person
router.post("/person", async (req, res) => {
  try{
      const data = req.body; // Assuming the body contains the person data

  // Create a new person document using the Mongoose model
  const newPerson = new Person(data);

  //Save the new person to the database
   const savedPerson = await newPerson.save();
   console.log('data saved');
   res.status(200).json(response);
  

  }catch{err}{
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});

  }


});


// GET method to get the person
router.get('/person', async (req,res) =>{
  try{
     const data = await Person.find();
     console.log('data fetched ');
    res.status(200).json(data);

  }catch(err){
      console.log(err);
    res.status(500).json({error:'Internal Server Error'});

  }
}

);

router.get('/person/:workType', async(req,res) =>{
  try{
    const workType = req.params.workType; // // Extract the work type from the URL parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);

      
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

  }


});

router.put('./:id', async (req, res) =>{
  try{

    const personId = req.params.id; //Extract the id from the URl parameter
    const updatedPersonData = req.body; // Updated data for the person

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData, {
      new: true, // Return the updated document
      runValidators: true,// Run Mongoose validation
    })
    
    console.log('data updated');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.delete('/:id',async(req,res)=>{
  try{
       const personId = req.params.id;
       const response = await Person.findBYIdAndRemove(pesonId);
       if(!response){
        return res.status(404).json({error: 'Person not found'});
       }

       console.log('data delete');
       res.status(200).json({message: 'Person Deleted Succesfully'});

  }catch{err}{
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

  }
})


// Import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/',personRoutes);

module.exports = router;