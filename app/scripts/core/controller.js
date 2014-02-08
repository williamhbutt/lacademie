/**
 * Simple router/controller that will kick off the init script for the current page.
 * At present, it grabs the 'data-route' attribute on the body tag and executes that route.
 * For example, if data-route="home", the executeRoute method will call APP.home.init()
 */

'use strict';

var APP = window.APP = window.APP || {};

APP.core = {};

APP.core.controller = (function(){

    //private variable
    var _route = '';

    var setRoute = function(strVal) {
        _route = strVal;
    };

    var getRoute = function() {
        return _route;
    };

    var executeRoute = function() {

        var ns = APP;
        var route = getRoute();
        var action = 'init';
        if ( route !== '' && ns[route] && typeof ns[route][action] === 'function' ) {
            ns[route][action]();
        }
    };

    // exposed methods will be prefixed with the word `public`
    var publicInit = function() {

        console.log('APP.controller');

        // TODO: make the route determinant a config setting
        // var _route = document.body.getElementByClassname( 'data-route' );

        var routeName = $('[data-route-name]').attr('data-route-name');
        setRoute(routeName);
        executeRoute();

    };

    /**
    * interfaces to public functions
    */
    return {
        init: publicInit
    };

}());
