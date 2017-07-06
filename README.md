# tone
Allows your meteor website to be crawled perfectly by search engines for prerender.


#### Start Test App
```
$ meteor create test-app
$ cd test-app
$ touch server/tone.js
$ meteor npm install prerender-node
$ meteor npm install
```

`server/tone.js` file.

``` js
import prerenderIO from 'prerender-node';

Meteor.startup(() => {
  prerenderIO.set('host', 'localhost:3000');
  prerenderIO.set('protocol', 'http'); // https 
  prerenderIO.set('forwardHeaders', true);

  WebApp.rawConnectHandlers.use(prerenderIO);
});
```

#### Start app
```
$ export PRERENDER_SERVICE_URL='http://localhost:5858'
$ meteor --port 5555
```

go to `http://localhost:5555?_escaped_fragment_=`
