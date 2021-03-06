var Users = (function(){

    var creaUtente = function(nuovo){
        return $.ajax({
            url:'http://localhost:3000/users',
            method: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(nuovo)

        }).then(function(risposta){
            console.log(risposta);
        }).catch(function(err){
            console.log(err);
        });
    }

    var getUsers=function(){
        return $.ajax({
            url:"http://localhost:3000/users",
            method: "GET",
            contentType: "application/json",
            dataType: "json",
        });
    }


    var deleteUsers = function(id){
        return $.ajax({
                url:'http://localhost:3000/users/id/' +id,
                method: "DELETE",
                contentType: "application/json",
                dataType: "json",
        });
    }

    var modificaUsers = function(id){
        return $.ajax({
                url:'http://localhost:3000/users/id/' +id,
                method: "GET",
                contentType: "application/json",
                dataType: "json",
        });
    }

    var aggiornaUsers = function(id,data){
        return $.ajax({
                url:'http://localhost:3000/users/id/' +id,
                method: "PUT",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(data),
        });
    }

        return{
            creaUtente: creaUtente,
            getUsers: getUsers,
            deleteUsers:deleteUsers,
            modificaUsers: modificaUsers,
            aggiornaUsers: aggiornaUsers,
        }

})();