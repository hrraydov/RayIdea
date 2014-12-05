var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var uuid = require('node-uuid');

var userSchema = mongoose.Schema({
	account: {
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
    }
  },    
  projects: {
    ownerOf: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }],
    memberOf: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }]
  },
  profile: {
    name: {
      bulgarian: String,
      english: String
    },
    about: {
      bulgarian: String,
      english: String
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    facebookProfile: String,
    twitterProfile: String,
    googleProfile: String,
    githubProfile: String,
    linkedInProfile: String,
    website: String
  }  
});

userSchema.methods.hashPassword = function(){
  this.account.password = bcrypt.hashSync(this.account.password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.account.password);
};

userSchema.methods.generateToken = function(){
  this.account.token = uuid.v1();
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
    website: this.website,
    ownerOf: this.ownerOf
  };
};

module.exports = mongoose.model('User', userSchema);