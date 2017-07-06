var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var cache_manager = require('cache-manager');

const mongo = MongoClient.connect(process.env.MONGOLAB_URI);

module.exports = {
    init() {
      this.cache = cache_manager.caching({
        store: mongo_cache
      });
    },

    beforePhantomRequest(req, res, next) {
      if(req.method !== 'GET') {
        return next();
      }

      this.cache.get(req.prerender.url, (err, result) => {
        if (!err && result) {
          return res.send(200, result);
        }

        return next();
      });
    },

    afterPhantomRequest(req, res, next) {
      this.cache.set({
        token: req.headers['x-prerender-token'], // string
        url: req.prerender.url, // sting
        start: req.prerender.start, // Date
        phantomId: req.prerender.phantomId, // String
        stage: req.prerender.stage, // Number
        pendingRequests: req.prerender.pendingRequests, // Number
        lastResourceReceived: req.prerender.lastResourceReceived, // date
        downloadStarted: req.prerender.downloadStarted, // date
        downloadChecker: req.prerender.downloadChecker, // date
        headers: req.prerender.headers, // list<Array>
        statusCode: req.prerender.statusCode, // Number
        redirectURL: req.prerender.redirectURL, // String
        status: req.prerender.status, // string
        downloadFinished: req.prerender.downloadFinished, // date
        timeoutChecker: req.prerender.timeoutChecker, // Number
        documentHTML: req.prerender.documentHTML, // String
        lastJavascriptExecution: req.prerender.lastJavascriptExecution // date
      });

      // nexted.
      next();
    }
};

var mongo_cache = {
    get(url, callback) {
      mongo.then((db) => {
        db.collection('caches').findOne({ url }).then((doc) => {
          if (doc) {
            return callback(null, doc.documentHTML);
          }

          callback(true, null);
        });
      });
    },

    set(data, callback) {
      mongo.then((db) => {
        db.collection('sites').findOne({ url: data.url }).then((site) => {

          // website found then
          if (site) {

            // and cache active then.
            if (site.cache) {
              db.collection('caches').update({ url: data.url }, data, { upsert: true }).then(() => {

              });
            }
          }
        });
      });
    }
};
