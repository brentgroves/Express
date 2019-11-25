var express = require('express');
const path = require('path');
var router = express.Router();
const config = require('../../Config13318/config.json')
/* GET home page. */

router.get('/', function(req, res, next) {
	
  const data = {
    BPGServicesURI: config.BPGServicesURI,
  };

  res.render('Kep13318', data);
});


/*
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'..','/public/index.html'));
});
*/
module.exports = router;
