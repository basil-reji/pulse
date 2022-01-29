var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {nav:true, footer:true});
});

router.get('/login', function(req, res, next) {
  res.render('login', {nav:false, footer:false});
});

module.exports = router;
