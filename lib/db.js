

var collectionBase = require('./collection');

module.exports = {

  get _ () {
    return this.__;
  },

  set _ (val) {
    this.__ = val;
  },

  collection: function(name) {
    var _ = this._.collection(name);
    var coll = Object.create(collectionBase);
    coll._ = _;
    return coll;
  },

  createCollection: function(name) {
    var self = this;
    return function(callback) {
      return self._.createCollection.call(self._, name);
    };
  },

  close: function() {
    return this._.close;
  },

  dropDatabase: function() {
    return this._.dropDatabase;
  }

}