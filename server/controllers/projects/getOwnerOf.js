var User = require('./../../models/User.js');

module.exports = function(req, res){
  User.populate(req.user, 'projects.ownerOf', function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).send(user.projects.ownerOf);
  });
};