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
        })
    }
        return{
            creaUtente: creaUtente
        }

})();