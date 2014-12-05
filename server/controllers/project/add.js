var User = require('./../../models/User.js');
var Project = require('./../../models/Project.js');

module.exports = function(req, res){
  var title = req.body.title;
  var description = req.body.description;
  var type = req.body.type;
  var ownerId = req.user._id;

  var project = new Project({
    title: title,
    description: description,
    type: type,
    owner: ownerId
  });

  project.save(function(err, project){
    if(err){
      return res.status(500).send(err);
    }
    req.user.ownerOf.push(project._id);
    req.user.save(function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      return res.status(201).send(project);
    });
  });

};