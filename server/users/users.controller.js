var mongoose = require ('mongoose');
var Users = require ('./users.model.js');

module.exports = (function(){
    var getUsers = function(req, res) {
        Users.find()
        .exec()
        .then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };

    var createUsers = function(req, res) {
        var utente = req.body;
        var newUtente = new Users(utente);
        newUtente.save().then(function(data){
            res.status(200).send(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };

    var detailUsers = function(req, res) {
        var id = req.params.id;
        Users.findById(id).exec().then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };

    var deleteUsers = function(req, res) {
        var id = req.params.id;
       Users.findByIdAndRemove(id).exec().then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };

    var updateUsers = function(req, res) {
        var id = req.params.id;
        var newData = req.body;
        Users.findByIdAndUpdate(id,newData).then(function(data){
            res.status(200).json(data);
        }).catch(function(err){
            res.status(500).send(err);
        });
    };

    return {
        getUsers: getUsers,
        createUsers: createUsers,
        detailUsers: detailUsers,
        deleteUsers: deleteUsers,
        updateUsers: updateUsers,
    }
})();