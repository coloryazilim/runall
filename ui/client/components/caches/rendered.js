Template.caches.onCreated(function() {
  this.subscribe('caches', this.data.applicationId);
});
