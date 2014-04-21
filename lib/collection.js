
var cursorBase = require('./cursor');

module.exports = {

  get _ () {
    return this.__;
  },

  set _ (val) {
    this.__ = val;
  },

  find: function() {
    var _ = this._.find.apply(this._, arguments);
    var cursor = Object.create(cursorBase);
    cursor._ = _;
    return cursor;
  },

  insert: function(docs, option) {
    var self = this;
    return function(callback) {
      self._.insert.call(self._, docs, option, callback);
    };
  },

  update: function(query, update, option) {
    var self = this;
    return function(callback) {
      self._.update(query, update, option, callback);
    };
  },

  findOne: function(query, fields) {
    var self = this;
    return function(callback) {
      self._.findOne(query, fields, callback);
    };
  },

  findAndModify: function(query, sort, update, option) {
    var self = this;
    return function(callback) {
      self._.findAndModify(query, sort, update, option, callback);
    };
  }

};