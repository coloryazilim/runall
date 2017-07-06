Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

// MOMENT LANGUAGE
moment.locale('en');

// ALL PAGES ensureSignedIn
Router.plugin('ensureSignedIn');
