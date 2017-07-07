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
