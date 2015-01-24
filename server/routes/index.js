module.exports = function(app){
	require('./account.js')(app);
	require('./profile.js')(app);
	require('./projects.js')(app);
	require('./skills.js')(app);
	require('./user.js')(app);
};