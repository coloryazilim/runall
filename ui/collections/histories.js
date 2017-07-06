Histories = new Mongo.Collection('histories');

Histories.attachBehaviour('timestampable');

Histories.attachSchema(new SimpleSchema({
  siteId: { type: String, label: 'Site Id' },
  url: { type: String, label: 'Url' },
  statusCode: { type: Number, label: 'Status Code' },
  userAgent: { type: String, label: 'User Agent' },
  ms: { type: Number, label: 'Response Time (sec)' }
}));

Histories.helpers({});
