$(document).ready(function(){
    $("#miaform").submit(function(e){
        e.preventDefault();
        var nome = $("#nome").val();
        var cognome = this.cognome.value;
        var sesso = this.sesso.value;
        var età = $("#età").val();   //rallenta le prestazioni, meglio quello col this.
        var nuovo = {
            nome: nome,
            cognome: cognome,
            sesso: sesso,
            età: età
        }
       Users.creaUtente(nuovo);
       this.reset();
       disegna();
    });


    function disegna(){
        var str= "";

    Users.getUsers().then(function(users){
       for(let i=0; i<users.length; i++ ){
           str +="<tr>" +
           "<td>" + users[i].nome + "</td>" +
           "<td>" + users[i].cognome + "</td>" +
           "<td>" + users[i].sesso + "</td>" +
           "<td>" + users[i].età + "</td>" +
           "<td><span idutente='"+ users[i]._id +"' class='glyphicon glyphicon-trash' style='cursor : pointer'></span></td>" +
           "<td><span idmodifica='"+ users[i]._id +"' class='glyphicon glyphicon-pencil' style='cursor : pointer'></span></td>" +
           "</tr>";
       }

       $("#tbody").html(str);
    }).catch();
};

disegna();
});