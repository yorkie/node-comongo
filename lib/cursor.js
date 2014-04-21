
module.exports = {

  get _ () {
    return this.__;
  },

  set _ (val) {
    this.__ = val;
  },

  sort: function() {
    return this._.sort.apply(this._, arguments);
  },

  skip: function() {
    return this._.skip.apply(this._, arguments);
  }

  limit: function() {
    return this._.limit.apply(this._, arguments);
  },

  toArray: function(name) {
    var self = this;
    return function(callback) {
      self._.toArray(callback);
    };
  },

  nextObject: function() {
    return this._.nextObject;
  }

}