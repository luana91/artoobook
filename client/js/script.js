$(document).ready(function(){
    $("#miaform").submit(function(e){
        e.preventDefault();
        var nome = $("#nome").val();
        var cognome = this.cognome.value;
        var sesso = this.sesso.value;
        var eta = $("#eta").val();   //rallenta le prestazioni, meglio quello col this.
        var nuovo = {
            nome: nome,
            cognome: cognome,
            sesso: sesso,
            eta: eta
        }
       Users.creaUtente(nuovo);
       this.reset();
       $(".table").show();
       $("#miaform").addClass("hidden");
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
           "<td>" + users[i].eta + "</td>" +
           "<td><span idutente='"+ users[i]._id +"' class='glyphicon glyphicon-trash elimina' style='cursor : pointer'></span></td>" +
           "<td><span idmodifica='"+ users[i]._id +"' class='glyphicon glyphicon-pencil modifica' style='cursor : pointer'></span></td>" +
           "</tr>";
       }

       $("#tbody").html(str);
       $('.elimina').click(function(){
           var id = $(this).attr("idutente");
           elimina(id);
       })
       $('.modifica').click(function(){
           var id = $(this).attr("idmodifica");
           modifica(id);
       })
    }).catch();
};

$("#nuovo").click(function(){
    $("#miaform").removeClass("hidden");
    $("#aggiornaform").addClass("hidden");
     $(".table").hide();
    
});


function elimina(id){
  Users.deleteUsers(id).then(function(data){
      console.log(data);
      disegna();
  }).catch(function(err){
      console.log(err);
  });
}

function modifica(id){
  Users.modificaUsers(id).then(function(user){
      $("#aggiornaform [name=nome]").val(user.nome);
      $("#aggiornaform [name=cognome]").val(user.cognome);
      if(user.sesso == "Female"){
      $("#Female").prop("checked",true);
        }
    if(user.sesso == "Male"){
      $("#Male").prop("checked",true);
      }
      $("#aggiornaform [name=eta]").val(user.eta);
      $("#aggiornaform").removeClass("hidden");
      $("#miaform").addClass("hidden");
      $(".table").hide();
      $("#aggiornaform").submit(function(e){
        e.preventDefault();
        var nome = this.nome.value;
        var cognome = this.cognome.value;
        var sesso = this.sesso.value;
        var eta = this.eta.value   //rallenta le prestazioni, meglio quello col this.
        var aggiornato = {
            nome: nome,
            cognome: cognome,
            sesso: sesso,
            eta: eta
        }
       Users.aggiornaUsers(id,aggiornato).then(function(data){
            $(".table").show();
             $("#aggiornaform").addClass("hidden");
       }).catch();
       this.reset();
       disegna();
    });
  }).catch(function(err){
      console.log(err);
  });
}

disegna();
});