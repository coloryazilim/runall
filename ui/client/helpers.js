Template.sites.helpers({
  sites() {
    return Sites.find();
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
      rowsPerPage: 100,
      // showNavigation: 'never',
      showFilter: false,
      fields: [
        { key: 'status', label: 'Status' },
        { key: 'start', label: 'Time', tmpl: Template.livestampTmpl },
        { key: 'url', label: 'Cache Url' },
        {
          key: 'ms',
          label: 'Response Time (sec)',
          fn(ms) {
            return Utils.getFormattedMs(ms);
          }
        },
        { key: 'downloadStarted', label: 'Start' },
        { key: 'downloadFinished', label: 'End' }
      ]
    }
  }
});

Template.histories.helpers({
  histories() {
    return Histories.find({ });
  },

  settings() {
    return {
      rowsPerPage: 100,
      // showNavigation: 'never',
      showFilter: false,
      fields: [
        { key: 'statusCode', label: 'Status' },
        { key: 'createdAt', label: 'Time', tmpl: Template.livestampTmpl },
        {
          key: 'ms',
          label: 'Response Time (sec)',
          fn(ms) {
            return Utils.getFormattedMs(ms);
          }
        },
        { key: 'url', label: 'Url' },
        { key: 'requestBy', label: 'Request By' }
      ]
    }
  }
});
