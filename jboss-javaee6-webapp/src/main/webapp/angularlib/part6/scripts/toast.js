angular.module('myApp', ['toaster'])
  .controller('MyController', ['$scope', 'toaster', function($scope, toaster) {
    $scope.onclick = function() {
      toaster.pop('success', 'テストの結果', '合格！');
    };
  }]);
