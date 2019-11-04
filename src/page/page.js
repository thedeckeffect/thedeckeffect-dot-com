function page(m, nav) {
  return {
      view: ({ children }) => m('.w-100', [
        m(nav),
        m('.pt5', children),
      ]),
  };
}

module.exports = page;
