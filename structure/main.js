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
console.log('topline', topline);

var man = {
    vm: {
    },

    controller: function() {
        this.topline = submodule(topline);
        console.log('this.topline', this.topline);
    },

    view: function(c) {
        return [
            c.topline(),
        ];
    }
};

m.route.mode = 'search';
m.module(document.getElementById('main'), man);
