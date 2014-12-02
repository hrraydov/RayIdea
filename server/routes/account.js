var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  app.post('/api/account/register', controllers.account.register);
  app.post('/api/account/login', controllers.account.login);
  app.get('/api/account/logout', passport.authenticate('bearer', {session: false}), controllers.account.logout);
};