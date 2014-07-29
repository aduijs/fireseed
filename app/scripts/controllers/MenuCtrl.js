/*global Firebase */
(function(angular) {
    'use strict';


angular.module('myApp')
    .controller('MenuController', function ($scope, $location, $timeout, MenuService) {
        //var firebaseRef = new Firebase(FBURL).child('menu');
        $scope.$location = $location;
        //$scope.menus = [];
        $scope.isActive = function(menu) {
            //console.log(menu.url);
            if (menu.url == $location.path()) {
                return true;
            }
            return false;
        };


        MenuService.menuLoaded(function(menuLoaded){
           //console.log(menuLoaded);

            //console.log($scope.menus);
            //$scope.menus = [];
            $timeout(function(){
                $scope.menus = menuLoaded;
            });
        });
//
//        firebaseRef.on('value', function(snapshot){
//                //var snapshotVal = ;
//
//                $scope.menus = snapshot.val();
//
//        });
        $scope.toggle = function () {
            console.log("toggle");
            var menuEl = document.getElementById("mobile-menu");
            $(menuEl).hasClass( "triggered") ? closeMobileMenu(document.getElementById("mobile-menu")) : openMobileMenu(document.getElementById("mobile-menu"))
        }



    });
}(window.angular));