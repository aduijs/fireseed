/**
 * Created by Arjan on 7/20/2014.
 */
/**
 * Created by Arjan on 7/20/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name motorhotelApp.controller:BoekingenCtrl
 * @description
 * # BoekingenCtrl
 * Controller of the motorhotelApp
 */
angular.module('myApp')
    .controller('BoekingenCtrl', ['$scope', 'syncData', function($scope, syncData){
        syncData('syncedValue').$bind($scope, 'syncedValue');

        var menuEl = document.getElementById("mobile-menu");
        $(menuEl).hasClass("triggered") && (document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""),
            document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide", menuEl.style.margin = "0", menuEl.className = menuEl.className.replace(/\btriggered\b/, ""));
    }]);


