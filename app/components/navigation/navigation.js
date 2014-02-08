'use strict';

var APP = window.APP = window.APP || {};

APP.navigation = (function(){
    var $nav = $('.navigation');

    var bindEventsToUI = function() {
        $nav.on('click', function(event) {
            event.preventDefault();
            console.log('CLICKED!!');
        });
    };

    var init = function() {
        console.log('APP.navigation');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
