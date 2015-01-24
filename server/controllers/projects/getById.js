var Project = require('./../../models/Project.js');
module.exports = function(req, res){
  Project.findById(req.params.id)
  .populate({path: 'owner', select: 'account.username'})
  .populate({path: 'memberCandidates', select: 'account.username'})
  .populate({path: 'members', select: 'account.username'})
  .exec(function(err, data){
    if(err){
      return res.ststus(500).send(err);
    }
    return res.status(200).send(data);
  });
};