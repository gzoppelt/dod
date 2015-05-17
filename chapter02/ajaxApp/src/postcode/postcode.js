'use strict';
angular.module('postcode',[])
    .controller('PostcodeController', ['$scope', 'postCodeService', function ($scope, postCodeService) {
        $scope.postCodeData = {};

        var success = function (data, status, headers, config) {
            $scope.postCodeData.result = data.result;
        };

        var error = function (data, status, headers, config) {
            $scope.postCodeData.error = data;
        };

        // call this function which will get the data asynchronously
        postCodeService.getRandomPostCode(success, error);
    }])

    .service('postCodeService', ['$http', function ($http) {

        var getRandomPostCode = function (success, error) {

            $http.get('http://api.postcodes.io/random/postcodes')
                .success(function(data, status, headers, config) {
                    success(data, status, headers, config);
                })
                .error(function(data, status, headers, config) {
                    error(data, status, headers, config);
                });
        };

        this.getRandomPostCode = getRandomPostCode;
    }])
;