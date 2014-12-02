var mongoose = require('mongoose');

module.exports = function(){
  mongoose.connect('mongodb://admin:123456@ds051630.mongolab.com:51630/rayidea');
  var connection = mongoose.connection;
  connection.on('error', function(err){
    console.log('Error: ' + err);
  });
}
