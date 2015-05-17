'use strict';

var app = angular.module('directiveApp', [
  'ngRoute',
  'employee'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/employee/employee.html',
      controller: 'EmployeeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});