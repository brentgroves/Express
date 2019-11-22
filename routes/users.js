var express = require('express');
const path = require('path');
var router = express.Router();
const config = require('../../Config13318/config.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
  const data = {
    WebSocket: config.WebSocket
  };

  res.render('index', data);


});

module.exports = router;
