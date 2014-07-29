/*global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name motorhotelApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the motorhotelApp
 */
(function(angular) {
    'use strict';

angular.module('myApp')
    .controller('RegisterCtrl', function ($scope, $firebaseSimpleLogin, FBURL, $window) {
        var fbRef = new Firebase(FBURL);
        $scope.simpleLogin = $firebaseSimpleLogin(fbRef);
        $scope.errors = [];
        $scope.registerUser = {
            email: '',
            password: '',
            confirmPassword: ''
        };

        $scope.register = function() {
            var user = $scope.registerUser;
            $scope.errors = [];

            if (user.email === '') {
                $scope.errors.push('Please enter an email');
            }
            if (user.password === '') {
                $scope.errors.push('Please must not be blank');
            }
            else if (user.password !== user.confirmPassword) {
                $scope.errors.push('Password must match');
            }

            if ($scope.errors.length > 0){
                return;
            }

            var promise = $scope.simpleLogin.$createUser(user.email, user.password);

            promise.then(function(user) {
                console.log(user);
                $window.location.href = '/#/boekingen';
            }, function(error) {
                console.error(error);

            });
        }
        var menuEl = document.getElementById("mobile-menu");
        $(menuEl).hasClass("triggered") && (document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""),
            document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide", menuEl.style.margin = "0", menuEl.className = menuEl.className.replace(/\btriggered\b/, ""));
    });
}(window.angular));