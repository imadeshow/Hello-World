angular.module('myApp', ['countTo'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.start = 0;
    $scope.end = 100;
    $scope.duration = 100;
  }]);