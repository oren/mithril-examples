var m = require('mithril');

// menu module
var menu = {};

//controller
menu.controller = function() {
};

//view
menu.view = function() {
  return m("div", [
    m("p.gap1"),
    m("a.post", {href: "/post", config: m.route}, "Post"),
    m("img.humburger", {src: "static/images/hamburger.png"})
  ]);
};

//initialize
m.module(document.querySelector("header"), menu);

module.exports = menu;

