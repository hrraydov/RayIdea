var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
  app.get('/api/projects', controllers.project.getAll);
  app.get('/api/project/:id', controllers.project.getById);
  app.post('/api/projects', passport.authenticate('bearer', {session: false}), controllers.project.add);
};