var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  
  app.get('/api/profile/:username', controllers.profile.getByUsername);
  app.get('/api/profile/current', passport.authenticate('bearer', {session: false}), controllers.profile.getCurrent);
  app.put('/api/profile', passport.authenticate('bearer', {session: false}), controllers.profile.edit);
};