/*global Firebase */
(function(angular) {
    'use strict';


angular.module('myApp')
    .controller('MainCtrl', ['$scope', 'syncData', function($scope, syncData) {
        syncData('syncedValue').$bind($scope, 'syncedValue');
    }])
  //.controller('MainCtrl', function ($scope, $timeout, HomeService) {
   /*     .controller('MainCtrl', ['$scope', 'syncData', function($scope, syncData, $timeout, HomeService) {

//        HomeService.loadContent(function(data){
//
//            $scope.list = [];
//            $timeout(function(){
//                $scope.list.push(data);
//                console.log("push data home: " +data);
//            });
//            console.log($scope.list);
//        });
        HomeService.loadContent(function(loadContent){
            $timeout(function(){
            $scope.list = loadContent;
            console.log($scope.list);
            });
        });

        var menuEl = document.getElementById("mobile-menu");
        $(menuEl).hasClass("triggered") && (document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""),
            document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide", menuEl.style.margin = "0", menuEl.className = menuEl.className.replace(/\btriggered\b/, ""));
  });*/
}(window.angular));