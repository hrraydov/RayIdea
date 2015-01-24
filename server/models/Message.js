var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
  sender: String,
  receiver: String,
  content: String
});

module.exports = mongoose.model('Message', messageSchema);