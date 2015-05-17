'use strict';

var app = angular.module('ajaxApp', [
    'ngRoute',
    'postcode'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/postcode/postcode.html',
      controller: 'PostcodeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});