var express = require('express');
var router = express.Router();
const config = require('../../Config13318/config.json');
/* GET home page. */

router.get('/', function(req, res, next) {
  const data = {
    KepSock13318URI: config.KepSock13318URI,
  };

  res.render('KepSock13318', data);
});

module.exports = router;
