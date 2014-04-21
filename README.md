
co-mongo
===================
mongo coroutine library based on [co](https://github.com/visionmedia/co) and [node-mongodb-native](https://github.com/mongodb/node-mongodb-native)

### Installation
```sh
$ npm install comongo
```

### Usage
```js
var mongo = require('comongo');
var db = yield mongo.connect('localhost/test');
var coll = db.collection('your coll name');

// insert
var ret = yield coll.insert({ hello: 'world' });

// cursor and query
var cur = coll.find({ hello: 'world' }).skip(0);

// toArray and foreach
(yield cur.toArray()).forEach(function(item) {
  // sync foreach, don't need care about async call
});

// Error handler
try {
  // your co-mongo codes
} catch (err) {
  // handles error from err
}
```

### License
MIT