'use strict';
function closeMobileMenu(menuEl) {
    if (menuEl.className = menuEl.className.replace(/\btriggered\b/, ""), document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""), document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide");
    if (document.getElementById("two-column")) {
        var twoColumnEl = document.getElementById("two-column"), moduleListEl = twoColumnEl.getElementsByClassName("module_list")[0];

        //moduleListEl.className = moduleListEl.className + " menu-closed", moduleListEl.className = moduleListEl.className.replace(/\bmenu-open\b/, "");
        //console.log("closing two column");
       // $(".module_list").removeClass("menu-open").addClass("menu-closed");
    }

    menuEl.style.margin = "0"
}
function openMobileMenu(menuEl) {
    if (menuEl.className = menuEl.className + " triggered", document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-hide\b/, ""), document.getElementById("menu").className = document.getElementById("menu").className + " mobile-show");
    if (document.getElementById("two-column")) {
        var twoColumnEl = document.getElementById("two-column"), moduleListEl = twoColumnEl.getElementsByClassName("module_list")[0];
      // moduleListEl.className = moduleListEl.className + " menu-open", moduleListEl.className = moduleListEl.className.replace(/\bmenu-closed\b/, "");
       // console.log("opening two column");
    // $(".module_list").removeClass("menu-closed").addClass("menu-open");
    }

    menuEl.style.margin = "0 0 0 90px"
}
/**
 * @ngdoc overview
 * @name motorhotelApp
 * @description
 * # motorhotelApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'simpleLoginTools',
    'routeSecurity','myApp.service.login', 'myApp.service.firebase', 'myApp.service.changeEmail'
    ])
    .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
            // establish authentication
            $rootScope.auth = loginService.init('/login');
            $rootScope.FBURL = FBURL;
    }])
    .config(["$routeProvider", function ($routeProvider, $urlRouterProvider) {
        $routeProvider
       .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
        .when('/specials', {
        authRequired: true,
        templateUrl: 'views/specials.html',
        controller: 'SpecialsCtrl'
        })
        .when('/boekingen', {
        authRequired: true,
        templateUrl: 'views/boekingen.html',
        controller: 'BoekingenCtrl'
        })
        .when('/account', {
            authRequired: true,
            templateUrl: 'views/account.html',
            controller: 'AccountCtrl'
        })
        .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
        })
        .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
        })
        .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
        })
        .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
      //$locationProvider.html5Mode( true );
    }])
    .constant('FBURL', 'https://dazzling-fire-1951.firebaseio.com/')
    // where to redirect users if they need to authenticate (see module.routeSecurity)
    .constant('loginRedirectPath', '/login');

//var isLoggedIn = function($firebaseSimpleLogin, $state, FBURL) {
//   console.log("checking");
//    var firebaseRef = new Firebase(FBURL);
//    return $firebaseSimpleLogin(firebaseRef())
//        var promise = $getCurrentUser();
//
//        promise.then(function(user) {
//            console.log(user);
//            //$window.location.href = '/#/boekingen';
//        }, function(error) {
//            console.error(error);
//            $state.go('login');
//        });
////        .$getCurrentUser() // this returns a promise
////        .then(function(user) {
////            if (user) {
////                console.log("user");
////                return;
////            } else {
////                console.log("redirecting");
////                // send user to login state/route
////                $state.go('login');
////            }
////        }, function(error) {
////        console.error(error);
////
//    })
//};
