# Mithril examples

## Getting statred tutorial

building a simple todo app -
http://lhorie.github.io/mithril/getting-started.html

## Run the example
    npm install      # puts mithril in node_modules
    open index.html
    
## Terminology

### module
An app have modules (module = part of a page).
module have 3 layers: Model, Controller and View.
module have two functions: controller and view and it also stores some data.

### model
* encapsulate business logic
* can be easily shared between modules, controllers.

### view-model
* a model level entity that stores UI state.
* handles business logic that revolves around UI-specific restrictions.

### controller
Exposes a slice of the model layer that pertains to the UI that is currently in view.

### view

function that returns virtual dom

## data binding
### model -> view
    m("input", {value: todo.vm.description()})

This binds the description getter-setter to the text input.
Updating the value of the description in the model updates the DOM input when Mithril redraws.

### view -> model
    m("input", {onchange: m.withAttr("value", todo.vm.description), value: todo.vm.description()})

When the onchange event is triggered, do this:  todo.vm.description(attribute value)
