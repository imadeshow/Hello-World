angular.module('myApp', ['ngAudio'])
  .controller('MyController', ['$scope', 'ngAudio', function($scope, ngAudio) {
    $scope.audio = ngAudio.load('sound/mambo.mp3');
  }]);