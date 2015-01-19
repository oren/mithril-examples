var m = require('mithril');

var menu = require('./menu.js');
var itemList = require('./item-list.js');
var item = require('./item.js');
var post = require('./post.js');

var main = document.querySelector('main');

m.route.mode = 'pathname';
m.route(main, "/", {
  "/": itemList,
  "/item": item,
  "/post": post
});
