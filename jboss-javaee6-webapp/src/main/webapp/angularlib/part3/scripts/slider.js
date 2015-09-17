angular.module('myApp', [ 'ui.slider' ])
  .controller('MyController', function($scope) {
    $scope.value = 50;
  });