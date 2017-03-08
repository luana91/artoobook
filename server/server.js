var express = require('express');
var path = require('path');
var app = express();
const PORT = 3000;


//bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, "..", "node_modules", "bootstrap", "dist")))
app.use('/jquery', express.static(path.join(__dirname, "..", "node_modules", "jquery", "dist")))

//serviamo la index
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"..", "client", "index.html"));
});

//start del server
app.listen(PORT,function(err){
    console.log('server connesso su http://localhost' + PORT);
});