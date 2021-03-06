// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://LeoR31:lomond123@ds137661.mlab.com:37661/alib';

var mongoDB = process.env.MONGODB_URI || dev_db_url;

//mongoose.connect(mongoDB);
mongoose.connect('mongodb://LeoR31:lomond123@ds137661.mlab.com:37661/alib', { useNewUrlParser: true })
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

var port = process.env.PORT || 3000;

app.listen(port, function () {
 console.log('app listening on port !');
});