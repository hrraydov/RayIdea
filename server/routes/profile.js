var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  
  app.get('/api/profile', passport.authenticate('bearer', {session: false}), controllers.profile.get);
  app.put('/api/profile', passport.authenticate('bearer', {session: false}), controllers.profile.edit);
  
};