var m = require('mithril');

// Our modules, simple for the sake of example.
// The modules don't need any animator-specific code, nor are there any conditions that must be met.
var page1 = {
  controller : function(){},
  view       : function(){
        return m( '.page.page1', {config:slidingPage},[
      m('h1', 'Page 1!' ),
      m( 'a', {
        config : m.route,
        href : '/route2'
      }, 'Go to page 2' ),
            ' ',
      m( 'a', {
        config : m.route,
        href : '/route3'
      }, 'Go to page 3' )
    ] );
  }
};

var page2 = {
  controller : function(){},
  view       : function(){
    return m( '.page.page2', {config:slidingPage},[
      m('h1', 'Page 2!' ),
      m( 'a', {
        config : m.route

      }, 'Go to page 1' ),
            ' ',
      m( 'a', {
        config : m.route,
        href : '/route3'
      }, 'Go to page 3' )
    ] );
  }
};

var page3 = {
  controller : function(){},
  view       : function(){
    return m( '.page.page3',  {config:slidingPage},[
      m('h1', 'Page 3!' ),
      m( 'a', {
        config : m.route,
        href : '/route1'
      }, 'Go to page 1' ),
            ' ',
      m( 'a', {
        config : m.route,
        href : '/route2'
      }, 'Go to page 2' )
    ] );
  }
};

// A convenience wrapper to bind slideIn and slideOut functions (below) to a module using the animator plugin:
// https://gist.github.com/barneycarroll/c69fbe0786e37c941baf
var slidingPage = animator( slideIn, slideOut);

// Pass slidingPage variations of each page into the route.
m.route( document.body, '/route1', {
  '/route1' :  page1 ,
  '/route2' : page2 ,
  '/route3' :  page3
} );

// Animation for sliding in. This is a bit basic, but you could do anything.
function slideIn( el ){
    el.style.position = 'absolute';

    Velocity(el, "transition.slideLeftIn", {
              stagger: 250
      }).then( function(){
          el.style.removeProperty( 'position' );
      });
}


// Slide out.
function slideOut( el, callback ){
    el.style.position = 'absolute';
    Velocity(el, "transition.slideLeftOut", {
              stagger: 250
            });
}
