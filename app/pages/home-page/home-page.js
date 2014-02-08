'use strict';

var APP = window.APP = window.APP || {};

APP.home = (function(){

    var bindEventsToUI = function() {
        // ...
    };

    var init = function() {
        console.log('APP.home');
        bindEventsToUI();
        APP.box1.init();
        APP.box2.init();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());

alert("homepage.js");
