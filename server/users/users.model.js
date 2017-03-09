var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
    nome: {type: String, required:[true, 'devi inserire il nome']},
    cognome: {type: String, required:[true, 'devi inserire il cognome']},
    sesso: {type: String, required:[true, 'devi inserire il sesso']},
    età: {type: Number, required:[true, 'devi inserire l\'età']},
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;