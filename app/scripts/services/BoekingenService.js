/**
 * Created by Arjan on 7/28/2014.
 */
/**
 * Created by Arjan on 7/20/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').service('BoekingenService', function(FBURL){
        var firebaseRef = new Firebase(FBURL).child('reserveringen');

        return {
            boekingenLoaded: function boekingenLoaded(cb) {
                firebaseRef.on('child_added', function (snapshot) {
                    //cb.call(this, snapshot.val());
                    var val = snapshot.val();
                        cb.call(this, {
                        aankomst: val.aankomst,
                        vertrek: val.vertrek,
                        aantalnachten: val.aantalnachten,
                        uid: val.uid
                        /*text: val.text,
                        type: val.type,
                        url: val.url*/
                    });
                });
            }
        };
    });
})(window.angular);