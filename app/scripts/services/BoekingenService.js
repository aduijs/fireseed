/**
 * Created by Arjan on 7/28/2014.
 */
/**
 * Created by Arjan on 7/20/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').service('BoekingenService', function(FBURL){
        var firebaseRef = new Firebase(FBURL).child('boekingen');

        return {
            loadContent: function loadContent(cb) {
                firebaseRef.once('value', function(snapshot){
                    cb.call(this, snapshot.val());
                });
            }
        };

    });
})(window.angular);