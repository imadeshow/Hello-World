angular.module('myApp', ['FBAngular'])
  .controller('MyController', ['$scope', 'Fullscreen', function($scope, Fullscreen) {
    $scope.isFullscreen = false;

    $scope.onfull = function() {
      $scope.isFullScreen = !$scope.isFullScreen;
    };
  }]);