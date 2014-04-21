
var MongoClient = require('mongodb').MongoClient;
var dbbase = require('./db');

module.exports = {
  
  connect: function *(configStr) {
    yield connect(configStr);
  }
  
}

function connect(configStr) {
  return function(callback) {
    MongoClient.connect(configStr, function(err, _) {
      var db = Object.create(dbbase);
      db._ = _;
      callback(err, db);
    });
  };
}