var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  app.put('/api/skills', passport.authenticate('bearer', {session: false}), controllers.skills.edit);
  app.get('/api/skills', passport.authenticate('bearer', {session: false}), controllers.skills.get);
};