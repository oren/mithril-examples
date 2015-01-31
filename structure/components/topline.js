var m = require('mithril');

module.exports = function(man) {
  console.log('man', man);
    var topline = {
        vm: {
            dropDowns: {
                page: m.prop(false),
                site: m.prop(false),
                user: m.prop(false)
            }
        },

        controller: function() {
            this.toggleMenu = function() {
                man.vm.showMenu(!man.vm.showMenu());
            };
        },

        view: function(c) {
            var dropDown = function(id) {
                return [
                    m('ul.drop-down', {}, [
                        m('li', man.vm.activeSite().title),
                        m('li', {
                            class: 'show'
                        }, [
                                man.vm.sites().map(function(site) {
                                    m('li', site.title)
                                })
                            ])
                    ])
                ];
            };

            return [
                m('#foo', [
                    m('a.toggle-menu', {
                        onclick: c.toggleMenu
                    }, 'Toggle'),
                    m('.active-elements', [
                        dropDown('change-site'),
                        dropDown('change-page'),
                    ]),
                    m('.actions'),
                    m('.options', [
                        m('a.logout', {
                            href: '/logout',
                            config: m.route
                        }, 'Logout')
                    ])
                ])
            ];
        }
    };

    return topline;
};
