var User = require('./../../models/User.js');

module.exports = function(req, res){
  User.findOne({'account.username': req.params.username}).populate('projects.ownerOf').exec(function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    if(!user){
      return res.status(404).send();
    }
    return res.status(200).send({projects: user.projects, profile: user.profile, skills: user.skills, username: user.account.username, 'profile.name.full': user.profile.name.full});
  });
};