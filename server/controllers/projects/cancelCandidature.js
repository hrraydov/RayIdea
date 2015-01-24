var Project = require('./../../models/Project.js');

module.exports = function(req, res){
  var id = req.params.id;
  var user = req.user;

  Project.findById(id, function(err, project){
    if(err){
      return res.status(500).send(err);
    }   
    user.projects.candidateFor.pull(project._id);
    user.save(function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      project.memberCandidates.pull(user._id);
      project.save(function(err, project){
        if(err){
          return res.status(500).send(err);
        }
        return res.status(200).send(project);
      });
    });
  });
};