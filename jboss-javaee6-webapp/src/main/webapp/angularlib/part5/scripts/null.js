angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.data1 = null;
    $scope.data2 = [ 1, 2, 3 ];
  }]);