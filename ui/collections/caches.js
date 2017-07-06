Caches = new Mongo.Collection('caches');

Caches.attachBehaviour('timestampable');

Caches.attachSchema(new SimpleSchema({
  siteId: { type: String, label: 'Site Id' },
  url: { type: String, label: 'Url' },
  start: { type: Date, label: 'Started At' },
  ms: { type: Number, label: 'Response Time (sec)' },
  phantomId: { type: String, label: 'Phantom Id' },
  stage: { type: Number, label: 'Stage Number' },
  pendingRequests: { type: Number, label: 'Pending Request ?' },
  lastResourceReceived: { type: Date, label: 'Last Resource Received' },
  downloadStarted: { type: Date, label: 'Download Started Date' },
  downloadChecker: { type: Date, label: 'Download Check Date' },
  downloadFinished:  { type: Date, label: 'Download Finished Date' },
  headers: { type: [Object], label: 'Document HTML Headers' },
  'headers.$.name': { type: String },
  'headers.$.value': { type: String },
  redirectURL: { type: String, label: 'Before Redirect Url' },
  statusCode: { type: Number, label: 'Status Code' },
  status: { type: String, label: 'Status' },
  timeoutChecker: { type: String, label: 'Timeout Checker' },
  documentHTML: { type: String, label: 'Content' },
  lastJavascriptExecution: { type: Date, label: 'Javascript Execution Date' }
}));

Caches.helpers({});
