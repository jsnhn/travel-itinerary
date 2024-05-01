var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', passport.authenticate( // this method is going to return a middleware function that the router.get will use
  'google',
  {
    scope:['profile', 'email'],
    prompt: 'select_account' // if you only have one google, it will automatically log you in. wont take you to google
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/', // if everything go rithe we go to trips index
    failureRedirect: '/' // if they refuse to consent or lacking info, this is where you will be sent. could be the splash page
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
