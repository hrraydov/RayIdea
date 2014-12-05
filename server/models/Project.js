var mongoose = require('mongoose');

var resourceSchema = mongoose.Schema({
  title: String,
  url: String
});

var projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  resources: [resourceSchema],
  type: {
    type: String,
    enum: ['public', 'private'],
    required: true
  },
  memberCandidate: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Project', projectSchema);