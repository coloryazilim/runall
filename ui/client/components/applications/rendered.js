Template.applications.onCreated(function() {
  this.subscribe('applications');
});

Template.application.onCreated(function() {
  const { _id } = Router.current().params;
  this.subscribe('application', _id);
});
