var User = require('./../../models/User.js');

module.exports = function(req, res){
	req.assert('username', 'Enter username').notEmpty();
  req.assert('email', 'Enter valid email').isEmail();
  req.assert('email', 'Enter email').notEmpty();
  req.assert('password', 'Enter password').notEmpty();
  req.assert('passwordConfirm', 'Passwords do not match').equals(req.body.password);

  var errors = req.validationErrors(true);
  if(errors){
    return res.status(400).send({errors: errors});
  }else{
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    User
    .findOne({})
    .where({account.email: email})
    .where({account.username: username})
    .exec(function(err, user){
      if(err){
        return res.status(500).send(err);
      }
      if(user){
        return res.status(400).send({errors: 'Username or email exists'});
      }
      var user = new User({
        account:{
          username: username,
          email: email,
          password: password
        }        
      });

      user.hashPassword();
      user.generateToken();

      user.save(function(err, user){
        if(err){
          return res.status(400).send(err);
        }
        return res.status(201).send({token: user.account.token, username: user.account.username});
      });
    });
  };
};