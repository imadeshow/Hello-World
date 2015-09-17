angular.module('myApp', [ 'ui.slider' ])
  .controller('MyController', function($scope) {
    $scope.min = 100;
    $scope.max = 300;
  });