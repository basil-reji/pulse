var express = require('express');
var router = express.Router();
var constants = require('../config/constants')
var chat = require('../scripts/script-helper')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/user-nav', {nav:false, footer:false});
});

router.get('/nav', function(req, res, next) {
  res.render('users/user-nav', {nav:false, footer:false});
});

router.get('/welcome', function(req, res, next) {
  res.render('users/welcome', {nav:false, footer:false});
});

router.get('/about', function(req, res, next) {
  res.render('users/about', {nav:false, footer:false});
});

router.get('/chatbot', function(req, res, next) {
  res.render('users/chatbot', {nav:false, footer:false, title: 'Chat Bot',bot_name: constants.BOT_NAME });
});

router.post('/dashboard/api/messageBot', function(req, res, next) {
  console.log(req.body.data)
  chat.chatwithBot(req.body.data, (response)=>{
    //console.log(response)
    res.send(response)
  })
});

module.exports = router;
