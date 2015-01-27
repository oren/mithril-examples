var m = require('mithril');

module.exports = function(app) {
    var login = {
        vm: {
            email: m.prop(''),
            password: m.prop(''),
            error: m.prop('')
        },

        controller: function() {
            this.login = function(ev) {
                ev.preventDefault();

                m.request({
                    method: 'POST',
                    url: app.vm.apiPath + 'login',
                    data: {
                        email: login.vm.email,
                        password: login.vm.password
                    }
                })
                    .then(app.vm.user, login.vm.error);
            };
        },

        view: function(c) {
            return [
                m('form.pagisto-cms-login', {
                    onsubmit: c.login
                }, [
                        m('input', {
                            type: 'text',
                            onchange: m.withAttr('value', login.vm.email)
                        }),
                        m('input', {
                            type: 'password',
                            onchange: m.withAttr('value', login.vm.password)
                        }),
                        m('input', {
                            type: 'submit'
                        }),
                        m('.error', login.vm.error()),
                        m('a', {
                            href: '/register',
                            config: m.route
                        }, 'Register')
                    ])
            ];
        }
    };

    return login;
};
