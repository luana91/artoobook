var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    nome: {type: String, required:[true, 'devi inserire il nome']},
    cognome: {type: String, required:[true, 'devi inserire il cognome'], unique:[true, "cognome già esistente"]},
    sesso: {type: String, enum:["Male", 'Female']},
    età: {type: Number, required: true, min:[18, "devi essere maggiorenne"]}
});


userSchema.pre('save', function (next) {
  this.nome = this.nome.charAt(0).toUpperCase() 
              + this.nome.substring(1).toLowerCase();
this.cognome = this.cognome.charAt(0).toUpperCase() 
              + this.cognome.substring(1).toLowerCase();
  next();
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;