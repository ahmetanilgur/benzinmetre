var express = require('express');
var router = express.Router();
var db = require('../config/db');
var Entries = db.model('entries');
/* GET home page. */
router.get('/', function (req, res, next) {
  Entries.find(function (err, entries) {
    res.render('index', { entries: entries });
  });
});
router.post('/', function (req, res) {
  var post = new Entries({
    username: req.body.username,
    brand: req.body.brand,
    model: req.body.model,
    volume: req.body.volume,
    liter: req.body.liter,
  })
  post.save(function (err, saved_post) {
    if (err) console.log(err);
    else {
      Entries.find(function (err, entries) {
        res.render('index', { entries: entries });
      });
    }
  });
})
module.exports = router;
