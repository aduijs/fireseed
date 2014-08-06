/**
 * Created by Arjan on 8/1/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').directive('datepicker', [function datePickerClick() {

        return {
            restrict: 'A',
            require : 'ngModel',
            link: function(scope, element, attrs, ngModelCtrl) {
                console.log(element);

                element.onChange().on('changeDate', function(e) {
                    ngModelCtrl.$setViewValue(e.date);
                    scope.$apply();
                });
            }
        };
    }]);
})(window.angular);