'use strict';

var app = angular.module('collectionBindingApp', [
    'ui.router',
    'ngRoute',
    'employee'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'src/employee/employee.tpl.html',
      controller: 'EmployeeController'
    })
    .otherwise({
      redirectTo: '/'
    });
});