module.exports = (function(){
    var getUsers = function(req, res) {
        res.send("lista utenti");
    };
    return {
        getUsers: getUsers
    }
})();