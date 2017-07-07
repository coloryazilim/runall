Applications = new Mongo.Collection('applications');

Applications.attachBehaviour('timestampable');

Applications.attachSchema(new SimpleSchema({
  userId: { type: String, label: 'User' },
  domain: { type: String, label: 'Site Url' },
  cache: { type: Boolean, label: 'Cache Active' }
}));

Applications.helpers({});
