Template.applications.helpers({
  applications() {
    return Applications.find();
  },

  settings() {
    return {
      rowsPerPage: 1000,
      // showNavigation: 'never',
      showFilter: false,
      fields: [
        { key: '_id', label: 'TOKEN' },
        { key: 'domain', label: 'Domain' },
        { key: 'cache', label: 'Cache Enabled ?' }
      ]
    }
  }
});

Template.application.helpers({
  application() {
    const { _id } = Router.current().params;
    return Applications.findOne(_id);
  }
});
