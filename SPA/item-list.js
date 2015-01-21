var m = require('mithril');

// item-list module
var itemList = {};

// get this from the server
var links = [
  {title: "item 1", url: "/item", src: 'static/images/motor_small.jpg'},
  {title: "item 2", url: "/item", src: 'static/images/bike.jpg'},
  {title: "item 3", url: "/item", src: 'static/images/table.jpg'},
  {title: "item 4", url: "/item", src: 'static/images/fridge.jpg'},
  {title: "item 5", url: "/item", src: 'static/images/dining.jpg'},
  {title: "item 1", url: "/item", src: 'static/images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'static/images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'static/images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'static/images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'static/images/dining.jpg'},
  {title: "item 1", url: "post.html", src: 'static/images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'static/images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'static/images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'static/images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'static/images/dining.jpg'},
  {title: "item 1", url: "post.html", src: 'static/images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'static/images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'static/images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'static/images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'static/images/dining.jpg'}
];

//controller
itemList.controller = function() {
};

//view
itemList.view = function() {
  var tmpLinks = links.map(function (link) {
    var image = m("img.image", {src: link.src});
    return m("a", {href: link.url, config: m.route}, image)
  })

  return m("div", tmpLinks);
};

module.exports = itemList;

//initialize
// m.module(document.querySelector('main'), itemList);
