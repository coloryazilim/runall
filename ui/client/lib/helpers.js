HELPERS = {
  session(key) {
    return Session.get(key);
  },

  console(log) {
    return console.log(log);
  },

  debug() {
    debugger;
  },

  moment(d, f) {
    return moment(d).format(f)
  }
};

_.each(HELPERS, (fn, name) => {
  return Blaze.registerHelper(name, fn);
});
