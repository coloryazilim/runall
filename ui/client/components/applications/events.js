Template.applications.events({
  'click .reactive-table tbody tr'() {
    return Router.go('Application', { _id: this._id });
  }
})
