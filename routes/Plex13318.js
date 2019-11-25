var express = require('express');
var router = express.Router();
const config = require('../../Config13318/config.json');
/* GET home page. */

router.get('/', function(req, res, next) {
  const data = {
    BPGServicesURI: config.BPGServicesURI,
  };

  res.render('Plex13318', data);
});

module.exports = router;
