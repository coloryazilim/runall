Meteor.publish('applications', function() {
  return Applications.find({
    userId: this.userId
  });
});

Meteor.publish('application', function(_id) {
  return Applications.find({ _id, userId: this.userId });
});

Meteor.publish('caches', function(applicationId) {
  return Caches.find({ applicationId });
});

Meteor.publish('histories', function() {
  const _ids = Applications.find({ userId: this.userId }).map((h) => h._id);
  return Histories.find({
    applicationId: {
      $in: _ids
    }
  });
});
