var m = require('mithril');
var submodule = require('./helpers/submodule.js');

var app = {
    vm: {
        showMenu: m.prop(false),
        activeSite: m.prop({}),
        sites: m.prop([])
    }
};

var topline = require('./components/topline.js')(app);

var man = {
    vm: {
    },

    controller: function() {
        this.topline = submodule(topline);
    },

    view: function(c) {
        return [
            c.topline(),
        ];
    }
};

m.route.mode = 'search';
m.module(document.getElementById('pagisto-cms'), man);
