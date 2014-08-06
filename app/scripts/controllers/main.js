/*global Firebase */
(function(angular) {
    'use strict';


angular.module('myApp')
    .controller('MainCtrl', function ($scope, $timeout, HomeService) {

        HomeService.loadContent(function(loadContent){
            $timeout(function(){
            $scope.list = loadContent;
            console.log($scope.list);
            });
        });

        var menuEl = document.getElementById("mobile-menu");
        $(menuEl).hasClass("triggered") && (document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""),
            document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide", menuEl.style.margin = "0", menuEl.className = menuEl.className.replace(/\btriggered\b/, ""));
    })
}(window.angular));