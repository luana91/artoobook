var express = require('express');
var router = express.Router();
var Users = require('./users.controller.js');

//LISTA UTENTI
router.get('/', Users.getUsers);

//CREAZIONE UTENTE
router.post('/', Users.createUsers);

//DETTAGLIO UTENTE
router.get('/id/:id', Users.detailUsers);

//ELIMINAUTENTE
router.delete('/id/:id', Users.deleteUsers);

//AGGIORNA
router.put('/id/:id', Users.updateUsers);

//RICERCA PER NOME O COGNOME
router.get('/cerca/', Users.cercaUsers);

module.exports = router;