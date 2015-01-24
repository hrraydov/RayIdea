var Project = require('./../../models/Project.js');

module.exports = function(req, res){
  Project.find({owner: req.user._id}, function(err, projects){
  	if(err){
  		return res.status(500).send(err);
  	}
  	return res.status(200).send({projects: projects});
  });
};