angular.module('myApp', ['FBAngular'])
  .controller('MyController', ['$scope', 'Fullscreen', function($scope, Fullscreen) {
      $scope.ontoggle = function() {
        Fullscreen.toggleAll();
        /*
        if (Fullscreen.isEnabled()) {
          Fullscreen.cancel();
        } else {
          Fullscreen.all();
        }
        */
      };
  }]);