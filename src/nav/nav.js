function nav(m) {
  return {
      view: () => m('.flex.w-100', [
        m('.w-50.pointer', {
          onclick: () => {
            m.route.set('/');
          },
        }, 'The Deck Effect'),
        m('.w-50.pointer', {
          onclick: () => {
            m.route.set('/about');
          },
        } ,'About')
      ]),
  };
}

module.exports = nav;
