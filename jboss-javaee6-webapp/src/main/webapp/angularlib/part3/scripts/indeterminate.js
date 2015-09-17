angular.module('myApp', ['ui.indeterminate'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.unknown = true;
  }]);