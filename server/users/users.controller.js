
module.exports = (function(){
    var getUsers = function(req, res) {
        res.send("lista utenti");
    };

    var createUsers = function(req, res) {
        res.send("creazioni utenti");
    };

    var detailUsers = function(req, res) {
        var id = req.params.id;
        res.send("dettaglio utente con id:" + id);
    };

    var deleteUsers = function(req, res) {
        var id = req.params.id;
        res.send("eliminato utente con id:" + id);
    };

    var updateUsers = function(req, res) {
        var id = req.params.id;
        res.send("aggiornato utente con id:" + id);
    };

    return {
        getUsers: getUsers,
        createUsers: createUsers,
        detailUsers: detailUsers,
        deleteUsers: deleteUsers,
        updateUsers: updateUsers,
    }
})();