angular.module('myApp', [ 'infinite-scroll' ])
  .controller('MyController', function($scope) {
    $scope.randomNumber = function(num) {
      for (var i = 1; i < num; i++) {
        $scope.items.push(Math.ceil(Math.random() * 1000));
      }
    }

    $scope.items = [];
    $scope.randomNumber(50);
  });
