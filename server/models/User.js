var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uuid = require('node-uuid');

var userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
    index: true
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

userSchema.methods.toProfile = function(){
  return {
    name: this.name,
    gender: this.gender,
    facebookProfile: this.facebookProfile,
    twitterProfile: this.twitterProfile,
    googleProfile: this.googleProfile,
    githubProfile: this.githubProfile,
    linkedInProfile: this.linkedInProfile,
    about: this.about,
    website: this.website
  };
};

module.exports = mongoose.model('User', userSchema);