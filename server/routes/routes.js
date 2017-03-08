module.exports = function(app,express,path) {

//bootstrap e jquery
app.use('/bootstrap', express.static(path.join(__dirname, "..", "..", "node_modules", "bootstrap", "dist")));
app.use('/jquery', express.static(path.join(__dirname, "..", "..", "node_modules", "jquery", "dist")));

//css e js
app.use('/css', express.static(path.join(__dirname, "..", "..", "client", "css")));
app.use('/js', express.static(path.join(__dirname, "..", "..", "client", "js")));

//serviamo la index
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, "..", "..", "client", "index.html"));
});

var users= require('./../users/index.js');
app.use('/users', users);

};