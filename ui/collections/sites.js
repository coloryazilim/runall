Sites = new Mongo.Collection('sites');

Sites.attachBehaviour('timestampable');

Sites.attachSchema(new SimpleSchema({
  userId: { type: String, label: 'User' },
  url: { type: String, label: 'Site Url' },
  cache: { type: Boolean, label: 'Cache Active' }
}));

Sites.helpers({});
