angular.module('myApp', ['ngStorage'])
  .controller('MyController', ['$scope', '$localStorage', 
    function($scope, $localStorage) {
      $scope.$storage = $localStorage.$default({
        count: 100
      });
      //$scope.$storage = $localStorage;

      $scope.ondelete = function() {
        delete $scope.$storage.count;
      };

      // $scope.$storage.$reset({
      //   count: 100
      // });
  }]);