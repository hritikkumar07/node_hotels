const mongoose = require('mongoose');
require('dotenv').config(); 

// Define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/Restaurant'
// const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name

const mongoURl = process.env.MONGODB_URL
// "mongodb://127.0.0.1:27017/Restaurant"

// setup MongoDB connection
mongoose.connect(mongoURl,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected',() => {
    console.log('Connected to MongoDB server');
});

db.on('error',(err) => {
    console.log('MongoDB  connection error:', err);
});

db.on('disconnected',() => {
    console.log('MongoDB disconnected');
});

// Export  the database connection
module.exports  = db; 



// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/mydatabase", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log("MongoDB connection error:", err));