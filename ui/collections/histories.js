import parseAgent from 'ua-parser-js';

Histories = new Mongo.Collection('histories');

Histories.attachBehaviour('timestampable');

Histories.attachSchema(new SimpleSchema({
  applicationId: { type: String, label: 'Application Id' },
  url: { type: String, label: 'Url' },
  statusCode: { type: Number, label: 'Status Code' },
  userAgent: { type: String, label: 'User Agent' },
  ms: { type: Number, label: 'Response Time (sec)' }
}));

Histories.helpers({
  parseAgent() {
    return parseAgent(this.userAgent);
  },

  requestBy() {
    return Utils.bot(this.userAgent);
  }
});
