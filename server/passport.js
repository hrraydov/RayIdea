var User = require('./models/User.js');
var passport = require('passport');
var BearerStrategy = require('passport-http-bearer').Strategy;

module.exports = function(){
  passport.use(new BearerStrategy({},
    function(token, done) {
      console.log(token);
      process.nextTick(function () {
        User.findOne({'account.token': token}, function(err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          return done(null, user, { scope: 'all' });
        })
      });
    }
  ));
};
