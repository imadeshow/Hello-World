angular.module('myApp', ['ngColorPicker'])
  .controller('MyController', ['$scope', function($scope) {
    $scope.colors = [
      '#00FF00',
      '#00CCFF',
      '#FFFF00',
      '#FF99FF',
      '#EE0000',
      '#000000'
    ];
    $scope.selected = '#00FF00';
  }]);
