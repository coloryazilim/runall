Router.route('/applications', {
  name: 'Applications',
  layoutTemplate: 'authLayout'
});

Router.route('/applications/:_id', {
  name: 'Application',
  layoutTemplate: 'authLayout'
});
