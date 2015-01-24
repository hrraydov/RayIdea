var Project = require('./../../models/Project.js');
var User = require('./../../models/User.js');

module.exports = function(req, res){
  var projectId = req.params.projectId;
  var userId = req.params.userId;

  Project.findById(projectId, function(err, project){
    if(err){
      return res.status(500).send(err);
    }
    if(!req.user._id.equals(project.owner)){
      return res.status(401).send("Unauthorized");
    }
    if(project.memberCandidates.indexOf(userId) !== -1){
      project.memberCandidates.pull(userId);
    }
    project.members.push(userId);
    project.save(function(err, project){
      if(err){
        return res.status(500).send(err);
      }
      User.findById(userId, function(err, user){
        if(err){
          return res.status(500).send(err);
        }
        if(user.projects.candidateFor.indexOf(projectId) !== -1){
          user.projects.candidateFor.pull(projectId);
        }
        user.projects.memberOf.push(projectId);
        user.save(function(err, user){
          if(err){
            return res.status(500).send(err);
          }
          return res.status(200).send(project);
        });
      });
    });
  });
};