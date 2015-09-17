angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.min = new Date();
  }]);