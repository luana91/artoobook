var express = require('express');
var router = express.Router();
var Users = require('./users.controller.js')

router.get('/', Users.getUsers);


module.exports = router;