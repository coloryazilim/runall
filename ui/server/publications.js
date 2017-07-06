Meteor.publish('sites', function() {
  return Sites.find({
    userId: this.userId
  });
});

Meteor.publish('site', function(_id) {
  return Sites.find({ _id, userId: this.userId });
});

Meteor.publish('caches', function(siteId) {
  return Caches.find({ siteId });
});
