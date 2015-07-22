var express = require('express');
var router = express.Router();
var db = require('../config/db');
var Entries = db.model('entries');

/* GET users listing. */
router.post('/', function(req, res, next) {
Entries.find({username:
	{ "$regex":req.body.searchbox , "$options": "i" }
	}, 
	function(err,results){
	res.render('index',{entries:results})
})
});
module.exports = router;