Template.sites.helpers({
  sites() {
    return Sites.find();
  },

  settings() {
    return {
      rowsPerPage: 10,
      showNavigation: 'never',
      showFilter: false,
      fields: [
        { key: '_id', label: 'ID' },
        { key: 'url', label: 'URL' }
      ]
    }
  }
});

Template.site.helpers({
  site() {
    const { _id } = Router.current().params;
    return Sites.findOne(_id);
  }
});

Template.caches.helpers({
  caches() {
    return Caches.find({ });
  },

  settings() {
    return {
      rowsPerPage: 10,
      showNavigation: 'never',
      showFilter: false,
      fields: [
        { key: 'url', label: 'Cache Url' },
        { key: 'status', label: 'Status' },
        { key: 'statusCode', label: 'Status Code' },
        { key: 'downloadStarted', label: 'Start' },
        { key: 'downloadFinished', label: 'End' }
      ]
    }
  }
});
