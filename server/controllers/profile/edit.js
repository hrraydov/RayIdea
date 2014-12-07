var User = require('./../../models/User.js');

module.exports = function(req, res){
  
  req.assert('facebookProfile', 'Enter valid facebook profile').isValidFacebookProfile();

  var validationErrors = req.validationErrors();
  if(validationErrors){
    return res.status(400).send({errors: validationErrors});
  }

  req.user.profile = req.body;

  req.user.save(function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).send(user.toProfile());
  });

};