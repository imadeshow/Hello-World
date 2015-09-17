angular.module('myApp', ['angular.filter'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.fruits = ['りんご', 'みかん', 'ぶどう'];
  }]);
