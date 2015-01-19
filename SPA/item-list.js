var m = require('mithril');

// item-list module
var itemList = {};

// get this from the server
var links = [
  {title: "item 1", url: "/item", src: 'images/motor_small.jpg'},
  {title: "item 2", url: "/item", src: 'images/bike.jpg'},
  {title: "item 3", url: "/item", src: 'images/table.jpg'},
  {title: "item 4", url: "/item", src: 'images/fridge.jpg'},
  {title: "item 5", url: "/item", src: 'images/dining.jpg'},
  {title: "item 1", url: "/item", src: 'images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'images/dining.jpg'},
  {title: "item 1", url: "post.html", src: 'images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'images/dining.jpg'},
  {title: "item 1", url: "post.html", src: 'images/motor_small.jpg'},
  {title: "item 2", url: "post.html", src: 'images/bike.jpg'},
  {title: "item 3", url: "post.html", src: 'images/table.jpg'},
  {title: "item 4", url: "post.html", src: 'images/fridge.jpg'},
  {title: "item 5", url: "post.html", src: 'images/dining.jpg'}
];

//controller
itemList.controller = function() {
};

//view
itemList.view = function() {
  var tmpLinks = links.map(function (link) {
    var image = m("img.image", {src: link.src});
    return m("a", {href: link.url}, image)
  })

  return m("div", tmpLinks);
};

module.exports = itemList;

//initialize
// m.module(document.querySelector('main'), itemList);
