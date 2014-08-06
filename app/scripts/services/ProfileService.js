/**
 * Created by Arjan on 8/5/2014.
 */
/**
 * Created by Arjan on 7/20/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').service('ProfileService', function(FBURL, $rootScope){
        var id = $rootScope.auth.user.uid;
        var firebaseRef = new Firebase(FBURL).child('users').child(id);

        return {
            loadProfile: function loadProfile(cb) {
                firebaseRef.once('value', function(snapshot){
                    cb.call(this, snapshot.val());
                });
            }
        };

    });
})(window.angular);