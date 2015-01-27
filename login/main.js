var m = require('mithril');

var app = {
    vm: {
        apiPath: m.prop('http://localhost:3000'),
        user: m.prop({}),
    }
};

var login = require('./login.js')(app);

m.route.mode = 'search';
m.module(document.getElementById('login'), login);

