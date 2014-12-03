var User = require('./../../models/User.js');

module.exports = function(req, res){
  
  req.assert('facebookProfile', 'Enter valid facebook profile').isValidFacebookProfile();

  var validationErrors = req.validationErrors();
  if(validationErrors){
    return res.status(400).send({errors: validationErrors});
  }

  req.user.gender = req.body.gender;
  req.user.name = req.body.name;
  req.user.facebookProfile = req.body.facebookProfile;
  req.user.twitterProfile = req.body.twitterProfile;
  req.user.googleProfile = req.body.googleProfile;
  req.user.githubProfile = req.body.githubProfile;
  req.user.linkedInProfile = req.body.linkedInProfile;
  req.user.website = req.body.website;
  req.user.about = req.body.about;

  req.user.save(function(err, user){
    if(err){
      return res.status(500).send(err);
    }
    return res.status(200).send(user.toProfile());
  });

};