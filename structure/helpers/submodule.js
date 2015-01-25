var submodule = function(module, args) {
  return module.view.bind(this, new module.controller(args))
}

module.exports = submodule;
