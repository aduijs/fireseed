/**
 * Created by Arjan on 7/20/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').service('HomeService', function(FBURL){
        var firebaseRef = new Firebase(FBURL).child('home');

        return {
            loadContent: function loadContent(cb) {
                firebaseRef.once('value', function(snapshot){
                    cb.call(this, snapshot.val());
                });
            }
        };

    });
})(window.angular);