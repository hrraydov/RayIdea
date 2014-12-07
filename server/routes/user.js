var controllers = require('./../controllers');

module.exports = function(app){
  
  app.get('/api/user/:username', controllers.user.getByUsername);
};