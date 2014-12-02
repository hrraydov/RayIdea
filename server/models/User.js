var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uuid = require('node-uuid');

var userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true,
    index: true
  },
  name: String,
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  facebookProfile: String,
  twitterProfile: String,
  googleProfile: String,
  githubProfile: String,
  linkedInProfile: String,
  about: String,
  website: String
});

userSchema.methods.hashPassword = function(){
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function(){
  this.token = uuid.v1();
};

module.exports = mongoose.model('User', userSchema);