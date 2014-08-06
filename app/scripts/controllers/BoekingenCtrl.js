/*Global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name motorhotelApp.controller:BoekingenCtrl
 * @description
 * # BoekingenCtrl
 * Controller of the motorhotelApp
 */
angular.module('myApp')
    .controller('BoekingenCtrl', function($rootScope, $scope, $firebase, $timeout, BoekingenService, ProfileService, $filter, FBURL){
        var id = $rootScope.auth.user.uid;
        $scope.boekingen = [];
        var i = 1;
        BoekingenService.boekingenLoaded(function(boekingenLoaded){
            //console.log(menuLoaded);

            //console.log($scope.menus);
            //$scope.menus = [];
            //console.log($rootScope.auth.user.uid);
            //console.log(boekingenLoaded);
            //console.log(angular.equals(boekingenLoaded.uid, $rootScope.auth.user.uid));
            $timeout(function(){
                if (boekingenLoaded.uid === id) {
                    boekingenLoaded.nummer = i;
                    $scope.boekingen.push(boekingenLoaded);
                    $scope.boekingOverzicht = true;
                    i++;
                }
            });
        });




        //var ref = new Firebase("https://dazzling-fire-1951.firebaseio.com/reserveringen");
        var ref = new Firebase(FBURL).child('reserveringen');
        //var firebaseRef = new Firebase(FBURL).child('users').child(id);
        $scope.reservering = {};
        $scope.reservering.aanhef = 'Fam';
        $scope.reservering.land = 'Nederland';
        $scope.reservering.accomodatie = 'Camping';
        $scope.reservering.avondeten = 'Ja';
        $scope.reservering.informatie = 'Ja';

        //$scope.reservering.adres = 'ok dit werkt';
        //var sync = $firebase(ref);
        $scope.user = $rootScope.auth.user;
        //firebaseRef.once('value', function(snapshot){
        //    reservering = snapshot.val();
       //});
        //$scope.reserveringen = sync.$asArray();
        ProfileService.loadProfile(function(loadProfile){
            $timeout(function(){
                //formdata = loadProfile;
                //$scope.reservering.push(loadProfile);
                angular.extend($scope.reservering, loadProfile);

            });
        });
        //console.log(reservering);
        //reservering.email = $scope.user.email;
        //reservering.uid = $scope.user.uid;

        $scope.today = new Date();

        //personalia
        console.log($scope.today);


        $scope.addReservering = function(reservering) {
            $scope.submitted = true;
            reservering = $scope.reservering;
            $scope.reservering.aankomst = $filter('date')(reservering.aankomst, "yyyy-MM-dd");
            $scope.reservering.vertrek = $filter('date')(reservering.vertrek, "yyyy-MM-dd");


            if ($scope.reserverenForm.$valid == true) {
            //if ($scope.reserverenForm.$pristine == false) {
                ref.push(reservering);

                var id = $rootScope.auth.user.uid;
                var firebaseRef = new Firebase(FBURL).child('users').child(id);
                firebaseRef.update({
                    aanhef: reservering.aanhef,
                    voorletters :  reservering.voorletters,
                    achternaam : reservering.achternaam,
                    adres : reservering.adres,
                    postcode : reservering.postcode,
                    plaatsnaam : reservering.plaatsnaam,
                    land : reservering.land,
                    //telefoonthuis : reservering.telefoonthuis,
                    telefoonmobiel : reservering.telefoonmobiel
                    //telefoonthuisblijver : reservering.telefoonthuisblijver
                }, function(err) {
                    //err && console.error(err);

                });
            }



        }





        var menuEl = document.getElementById("mobile-menu");
        $(menuEl).hasClass("triggered") && (document.getElementById("menu").className = document.getElementById("menu").className.replace(/\bmobile-show\b/, ""),
            document.getElementById("menu").className = document.getElementById("menu").className + " mobile-hide", menuEl.style.margin = "0", menuEl.className = menuEl.className.replace(/\btriggered\b/, ""));
    });


