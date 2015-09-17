angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.keyword = 'AngularJS Application Programing';
  }]);