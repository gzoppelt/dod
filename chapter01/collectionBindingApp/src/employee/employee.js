'use strict';
angular.module('employee', [])
    .controller('EmployeeController', ['$scope', function ($scope) {
        var Employee = function (name, age) {
            this.name = name;
            this.age = age;
        };

        var getEmployees = function () {
          return [
            new Employee("First employee", 56),
            new Employee("First old employe", 58),
            new Employee("Second employee", 44),
            new Employee("Second old employee", 59),
            new Employee("Last employee", 32)
          ];
        };

        $scope.employeeData = {
          employees: getEmployees()
        };
    }])
    .filter('oldEmployeeFilter', function () {
        return function (items) {
            return _.filter(items, function (item) {
                return item.age >= 58;
            });
        };
    })
;
