var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
const PORT = 3000;


//connessione al db
require('./config/database.js')(mongoose);

//rotte principali
require("./routes/routes.js")(app, express, path);

//start del server
app.listen(PORT,function(err){
    console.log('server connesso su http://localhost' + PORT);
});