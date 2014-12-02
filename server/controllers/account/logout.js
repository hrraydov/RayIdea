var User = require('./../../models/User.js');

module.exports = function(req, res){
  req.user.generateToken();
  req.user.save(function(err, user){
  	if(err){
  		return res.status(500).send(err);
  	}
  	return res.status(200).send();
  });
};