const mongoose = require('mongoose');
require('dotenv').config();
// this is our MongoDB database
mongoose.connect(`mongodb+srv://gauravsolanki28:${encodeURIComponent(process.env.MONGO_ATLAS_PWD)}@school-data-9dkut.mongodb.net/schooladmin?retryWrites=true&w=majority`,{useNewUrlParser: true});
var db = mongoose.connection;
/*check connecton */
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("db connected")
});