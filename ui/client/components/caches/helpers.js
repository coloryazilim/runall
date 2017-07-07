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
