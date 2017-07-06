Router.route('/', {
  name: 'Home'
});

Router.route('/sites', {
  name: 'Sites'
});

Router.route('/sites/:_id', {
  name: 'Site'
});

Router.route('/histories', {
  name: 'Histories'
});
