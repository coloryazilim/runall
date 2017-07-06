Template.sites.onCreated(function() {
  this.subscribe('sites');
});

Template.site.onCreated(function() {
  const { _id } = Router.current().params;
  this.subscribe('site', _id);
});

Template.caches.onCreated(function() {
  this.subscribe('caches', this.data.siteId);
});

Template.histories.onCreated(function() {
  this.subscribe('histories');
});
