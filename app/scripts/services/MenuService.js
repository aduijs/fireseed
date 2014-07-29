/*global Firebase*/

(function(angular){
    'use strict';
    angular.module('myApp').service('MenuService', function(FBURL){
        var firebaseRef = new Firebase(FBURL).child('menu');

        return {
            menuLoaded: function menuLaoded(cb) {
                //console.log("menuLoaded");
                firebaseRef.once('value', function(snapshot){

                    cb.call(this, snapshot.val());
                    //$scope.menus = snapshot.val();
                    //console.log(snapshot.val());
                    /*console.log(val);
                    cb.call(this, {
                        class: val.class,
                        data: val.data,
                        text: val.text,
                        type: val.type,
                        url: val.url
                    });*/

                });
            }
        };

    });
})(window.angular);