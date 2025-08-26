
const express = require('express')
const app = express();
app.use(express.json());
const db = require('./db');

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;

const Person = require('./models/Person');
const MenuItem = require('./models/menuItem');

app.get("/", (req, res) => {
  res.send("Welcome to my Hotel.... How i can help you ?");
});


// Import the router files
// const personRoutes = require('./routes/personRoutes');

// const menuItemRoutes = require('./routes/menuItemRoules');

// Use the routers
// app.use('/person',personRoutes);
// app.use('/menu', menuItemRoutes);



app.listen(PORT , () => {
  console.log("listening on port 3000");
});
