const express = require('express');
var cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const API_PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({
  credentials: true,
  origin:"http://localhost:3000"
}));
const userRoute = require('./api/routes/users');

// this is our MongoDB database
require('./mongo')
// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*api routes*/
app.use("/users", userRoute )

 // this is our get method
app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

// launch our backend into a port
app.listen(API_PORT, "0.0.0.0");