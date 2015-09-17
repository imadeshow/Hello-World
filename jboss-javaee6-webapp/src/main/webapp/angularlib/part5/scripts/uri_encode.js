angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.data='!#"&()+-/@_;:,.あ';
  }]);