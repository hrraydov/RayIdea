var User = require('./../../models/User.js');

module.exports = function(req, res){
  User.findOne({username: req.params.username}).populate('ownerOf').exec(function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    if(!user){
    	return res.status(404).send();
    }
    return res.status(200).send(user.toProfile());
  });
};