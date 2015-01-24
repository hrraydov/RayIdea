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
    }],
    candidateFor: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project'
    }]
  },
  skills: [{
    _id: false,
    name: String,
    value: Number
  }],
  profile: {
    name: {
      first: {
        bulgarian: String,
        english: String
      },
      second: {
        bulgarian: String,
        english: String
      },
      last: {
        bulgarian: String,
        english: String
      }
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
    website: String,
    birthdate: String
  }  
},
{
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

userSchema.methods.hashPassword = function(){
  this.account.password = bcrypt.hashSync(this.account.password, bcrypt.genSaltSync(8));
};

userSchema.methods.validPassword = function(password) {
  console.log('Compare passowrds: ' + bcrypt.compareSync(password, this.account.password));
  return bcrypt.compareSync(password, this.account.password);
};

userSchema.methods.generateToken = function(){
  this.account.token = uuid.v1();
};

userSchema.virtual('profile.name.full').get(function(){
  var bulgarian = '';
  if(this.profile.name.first.bulgarian){
    bulgarian += ' ' + this.profile.name.first.bulgarian;
  }
  if(this.profile.name.second.bulgarian){
    bulgarian += ' ' + this.profile.name.second.bulgarian;
  }
  if(this.profile.name.last.bulgarian){
    bulgarian += ' ' + this.profile.name.third.bulgarian;
  }

  var english = '';
  if(this.profile.name.first.english){
    english += ' ' + this.profile.name.first.english;
  }
  if(this.profile.name.second.english){
    english += ' ' + this.profile.name.second.english;
  }
  if(this.profile.name.last.english){
    english += ' ' + this.profile.name.last.english;
  }
  return {
    english: english,
    bulgarian: bulgarian
  }
});

module.exports = mongoose.model('User', userSchema);