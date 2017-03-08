var express = require('express');
var router = express.Router();
var Users = require('./users.controller.js');

//LISTA UTENTI
router.get('/', Users.getUsers);

//CREAZIONE UTENTE
router.post('/', Users.createUsers);

//DETTAGLIO UTENTE
router.get('/:id', Users.detailUsers);

//ELIMINAUTENTE
router.delete('/:id', Users.deleteUsers);

//AGGIORNA
router.put('/:id', Users.updateUsers);

module.exports = router;