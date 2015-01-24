var Project = require('./../../models/Project.js');

module.exports = function(req, res){
  Project.findOneAndRemove({_id: req.params.id, owner: req.user._id}, function(err, project){
    if(err){
      return res.status(500).send(err);
    }
    req.user.projects.ownerOf.pull(req.params.id);
    req.user.save(function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      return res.status(200).send(project);
    });     
  });
};