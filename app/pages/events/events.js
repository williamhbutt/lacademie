'use strict';

var APP = window.APP = window.APP || {};

APP.events = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.events');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
