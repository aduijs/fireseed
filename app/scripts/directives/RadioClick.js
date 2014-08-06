/**
 * Created by Arjan on 8/1/2014.
 */
(function(angular){
    'use strict';
    angular.module('myApp').directive('radioClick', [function radioClick() {
    return {
        replace: false,
        require: 'ngModel',
        scope: false,
        link: function (scope, element, attr, ngModelCtrl) {
            $(element).change(function () {
                if (element[0].checked) {
                    scope.$apply(function() {
                        ngModelCtrl.$setViewValue(attr.value);
                    });
                }
            });
        }
    };
}]);
})(window.angular);