$(document).ready(function(){
    $("#miaform").submit(function(e){
        e.preventDefault();
        var nome = $("#nome").val();
        console.log(nome);
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
    });
});