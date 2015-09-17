angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.onhover = function(value) {
      $scope.percent = 100 * (value / $scope.max);
    };
  }]);