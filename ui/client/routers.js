Router.route('/', {
  name: 'Home',
  layoutTemplate: 'authLayout'
});

Router.route('/sites', {
  name: 'Sites',
  layoutTemplate: 'authLayout'
});

Router.route('/sites/:_id', {
  name: 'Site',
  layoutTemplate: 'authLayout'
});

Router.route('/histories', {
  name: 'Histories',
  layoutTemplate: 'authLayout'
});
