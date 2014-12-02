var controllers = require('./../controllers');
var passport = require('passport');

module.exports = function(app){
	app.put('/api/profile/edit', passport.authenticate('bearer', {session: false}), controllers.profile.edit);
};