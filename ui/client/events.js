Template.sites.events({
  'click .reactive-table tbody tr'() {
    return Router.go('Site', { _id: this._id });
  }
})
