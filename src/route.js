require('../node_modules/tachyons/css/tachyons.min.css');

const m = require('mithril');
const nav = require('./nav/nav')(m);
const page = require('./page/page')(m, nav);
const home = require('./home/home')(m);
const about = require('./about/about')(m);

m.route(document.body, '/', {
  '/': {
    view: () => m(page, m(home)),
  },
  '/about': {
    view: () => m(page, m(about)),
  },
});
