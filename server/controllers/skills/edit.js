var User = require('./../../models/User.js');

module.exports = function(req, res){
  var skills = req.body;

  req.user.skills = skills;

  req.user.save(function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).send();
  });

};