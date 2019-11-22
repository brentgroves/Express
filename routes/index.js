var express = require('express');
const path = require('path');
var router = express.Router();
const config = require('../../Config13318/config.json')
/* GET home page. */

router.get('/', function(req, res, next) {
	
  const data = {
    WebSocket: config.WebSocket
  };

  res.render('index', data);
});


/*
router.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'..','/public/index.html'));
});
*/
module.exports = router;
