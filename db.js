const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:2701//Restaurant'

// setup MongoDB connectionl
mongoose.connect(mongoURL,{
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