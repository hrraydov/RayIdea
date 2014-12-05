module.exports = function(app){
	require('./account.js')(app);
	require('./profile.js')(app);
	require('./project.js')(app);
};