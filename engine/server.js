var prerender = require('./lib');

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS,
    iterations: process.env.PRERENDER_NUM_ITERATIONS
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.blacklist());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

// cache mongodb
server.use(require('./lib/cache'));

// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
// server.use(prerender.logger());
// server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

// START SERVER
server.start();
