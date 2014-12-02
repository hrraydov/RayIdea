var User = require('./../../models/User.js');

module.exports = function(req, res){
  req.assert('username', 'Enter username or email').notEmpty();
  req.assert('password', 'Enter password').notEmpty();

  var errors = req.validationErrors(true);
  if(errors){
    return res.status(400).send({errors: errors});
  }else{
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);

    User
    .findOne({})
    .or([{username: username},{email: username}])
    .exec(function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      if(!user){
        return res.status(400).send({errors: 'User not found'});
      }
      
      return res.status(200).send({token: user.token});
    });
  };
};