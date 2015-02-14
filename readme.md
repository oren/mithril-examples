# Mithril examples

## Getting statred tutorial

building a simple todo app -
http://lhorie.github.io/mithril/getting-started.html

## SPA example


all m.withAttr does is say "when this attribute changes in the dom, put that value inside this variable"



models  
------
  functions that brings data from a DB
  but sometimes it also variables that holds that data
  in the browser's memory.
  abstract persistent storage.

controller - uses the models to get the data to populate the vm
----------

vm 
--
  model, but just for the view. 
  function to query and update the UI
  but also variables that holds the state of the UI.

non-view state is data or state not UI related

ctrl.pages() is a model. and ctrl.rotate() should probably be inside a vm
The view is a composition of the model and the view-model

example for non-view state

// DB: Users
// This object serves as a representation of a database.
var USERS_DB = [
  {
    id: 0,
    isLoggedIn: false,
  },
  {
    id: 1,
    isLoggedIn: false,
  },
];

// MODELS
// ===========================================

// MODEL: User
// Models abstract interactions with the database.
function User(user) { this.user = user; }

// Static properties.
// These can only be called from `User`
User.findById = function(id) {
  var user = USERS_DB.filter(function(user) { return user.id === id; })[0];
  return new User(user);
};

// User methods.
// These can be called from the model instances.
User.prototype.isLoggedIn = function() {
  return this.user.isLoggedIn;
};

User.prototype.login = function() {
  this.isLoggedIn = true;
};

User.prototype.logout = function() {
  this.isLoggedIn = false;
};

// A model in use
// =========================================

var userOne = User.findById(0);

userOne.login();
console.log(userOne.isLoggedIn());
userOne.logout();
consoleOne.log(userOne.isLoggedIn());
