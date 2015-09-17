angular.module('myApp', [ 'ui.bootstrap' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.today = new Date();
    $scope.$watch('today', function(new_value, old_value){
      if (!angular.isDate(new_value)){
        $scope.today = new Date();
      }
    });

    $scope.onopen = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };
  }]);