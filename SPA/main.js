var m = require('mithril');

var menu = require('./menu.js');
var itemList = require('./item-list.js');
var item = require('./item.js');
var post = require('./post.js');

var main = document.querySelector('main');

console.log(item);
console.log(post);

m.route.mode = "hash";
m.route(main, "/", {
  "/": itemList,
  "/item": item,
  "/post": post
});
