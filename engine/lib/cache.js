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
        url: req.prerender.url,
        siteId: req.headers['x-prerender-token'],
        createdAt: req.prerender.start,
        ms: new Date().getTime() - req.prerender.start.getTime(),
        phantomId: req.prerender.phantomId,
        stage: req.prerender.stage,
        pendingRequests: req.prerender.pendingRequests,
        lastResourceReceived: req.prerender.lastResourceReceived,
        downloadStarted: req.prerender.downloadStarted,
        downloadChecker: req.prerender.downloadChecker,
        headers: req.prerender.headers,
        statusCode: req.prerender.statusCode,
        redirectURL: req.prerender.redirectURL,
        status: req.prerender.status,
        downloadFinished: req.prerender.downloadFinished,
        timeoutChecker: req.prerender.timeoutChecker,
        documentHTML: req.prerender.documentHTML,
        lastJavascriptExecution: req.prerender.lastJavascriptExecution,
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
        db.collection('sites').findOne({ _id: data.siteId }).then((site) => {
          if (site) {
            if (site.cache) {
              return db.collection('caches').update({ url: data.url }, data, { upsert: true });
            }
          }
        });
      });
    }
};
