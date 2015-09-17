angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.hourStep = 1;
    $scope.minuteStep = 15;
    $scope.amPm = true;
  }]);