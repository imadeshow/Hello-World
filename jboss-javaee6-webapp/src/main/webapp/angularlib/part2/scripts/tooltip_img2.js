angular.module('myApp', [ 'ui.bootstrap', 'ngSanitize' ])
  .controller('MyController', ['$scope', function($scope) {
    $scope.chara = '<img src="http://www.web-deli.com/image/home_chara.gif" style="width:100px" />';
  }]);